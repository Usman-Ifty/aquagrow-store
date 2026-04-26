"use client";

import Link from "next/link";
import { ShoppingCart, User, Leaf } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <Link href="/cart" className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute top-0 right-0 bg-accent text-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </Link>
          <Link href="/login" className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20">
            <User className="w-5 h-5" />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
