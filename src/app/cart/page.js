"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, CreditCard } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  const shipping = cart.length > 0 ? 250 : 0;
  const total = cartTotal + shipping;

  return (
    <main className="flex-1">
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-black flex items-center gap-4">
            <ShoppingBag className="text-primary" size={36} /> Your Shopping Cart
          </h1>
          <div className="text-muted-foreground font-medium">{cart.length} {cart.length === 1 ? 'Item' : 'Items'}</div>
        </div>

        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="glass p-6 rounded-[2rem] border border-white/5 flex flex-col sm:flex-row items-center gap-6 shadow-xl"
                  >
                    <div className="w-24 h-24 rounded-2xl bg-card relative overflow-hidden shadow-inner shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <p className="text-primary font-bold">PKR {item.price.toLocaleString()}</p>
                    </div>

                    <div className="flex items-center gap-4 bg-white/5 rounded-xl p-2 border border-white/5">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:text-primary transition-colors disabled:opacity-20"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={18} />
                      </button>
                      <span className="font-bold w-6 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:text-primary transition-colors"
                      >
                        <Plus size={18} />
                      </button>
                    </div>

                    <div className="font-bold text-lg min-w-[100px] text-center hidden md:block">
                      PKR {(item.price * item.quantity).toLocaleString()}
                    </div>

                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted-foreground hover:text-red-500 transition-colors p-3 hover:bg-red-500/10 rounded-xl"
                    >
                      <Trash2 size={20} />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass p-8 rounded-[2.5rem] border border-white/10 space-y-6 sticky top-32 shadow-2xl"
              >
                <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
                
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-foreground font-bold">PKR {cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping Fee</span>
                    <span className="text-foreground font-bold">PKR {shipping.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                  <div>
                    <div className="text-sm text-muted-foreground">Total Amount</div>
                    <div className="text-3xl font-black text-primary leading-none">PKR {total.toLocaleString()}</div>
                  </div>
                </div>

                <Link 
                  href="/checkout"
                  className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xl hover:opacity-90 transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 active:scale-95"
                >
                  <CreditCard size={20} /> Proceed to Checkout
                </Link>

                <p className="text-center text-xs text-muted-foreground">
                  Payments secured by <span className="text-blue-400 font-bold">Stripe</span>
                </p>
              </motion.div>
            </div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 glass rounded-[3rem] border border-white/5"
          >
            <div className="text-8xl mb-8 animate-bounce">🛒</div>
            <h2 className="text-3xl font-black mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-12 text-lg">Looks like you haven't added any smart pots yet.</p>
            <Link href="/products" className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20">
              Start Shopping
            </Link>
          </motion.div>
        )}
      </div>

      <Footer />
    </main>
  );
}
