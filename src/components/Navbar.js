"use client";

import Link from "next/link";
import { ShoppingCart, User, Leaf, LogOut, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check login state
    const user = localStorage.getItem("aquagrow_user");
    if (user) setIsLoggedIn(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("aquagrow_user");
    setIsLoggedIn(false);
    toast.success("Logged out successfully");
    router.push("/");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4 shadow-xl" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <Leaf className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight">
            Aqua<span className="text-accent">Grow</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-primary transition-colors font-medium">Home</Link>
          <Link href="/products" className="hover:text-primary transition-colors font-medium">Products</Link>
          <Link href="/about" className="hover:text-primary transition-colors font-medium">About</Link>
          <Link href="/contact" className="hover:text-primary transition-colors font-medium">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/wishlist" className="p-2 hover:bg-white/10 rounded-full transition-colors text-red-400">
            <Heart className="w-6 h-6" />
          </Link>
          <Link href="/cart" className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-accent text-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </Link>
          
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-sm font-bold text-accent">Usman Ifty</div>
              <button 
                onClick={handleLogout}
                className="p-2 hover:bg-red-500/10 text-red-400 rounded-full transition-colors"
                title="Logout"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          ) : (
            <Link href="/login" className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20">
              <User className="w-5 h-5" />
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
