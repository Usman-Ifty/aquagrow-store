"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, CreditCard } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CartPage() {
  const [items, setItems] = useState([
    {
      id: "pro",
      name: "AquaGrow Pro",
      price: 3500,
      quantity: 1,
      emoji: "🌿"
    }
  ]);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 250;
  const total = subtotal + shipping;

  const updateQty = (id, delta) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  return (
    <main className="flex-1">
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-black mb-12 flex items-center gap-4">
          <ShoppingBag className="text-primary" size={36} /> Your Shopping Cart
        </h1>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass p-6 rounded-3xl border border-white/5 flex items-center gap-6"
                >
                  <div className="w-24 h-24 rounded-2xl bg-card flex items-center justify-center text-4xl shadow-inner shrink-0">
                    {item.emoji}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-primary font-bold">PKR {item.price.toLocaleString()}</p>
                  </div>

                  <div className="flex items-center gap-4 bg-muted rounded-xl p-2">
                    <button 
                      onClick={() => updateQty(item.id, -1)}
                      className="p-1 hover:text-primary transition-colors"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="font-bold w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQty(item.id, 1)}
                      className="p-1 hover:text-primary transition-colors"
                    >
                      <Plus size={18} />
                    </button>
                  </div>

                  <button className="text-muted-foreground hover:text-red-500 transition-colors p-2">
                    <Trash2 size={20} />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="glass p-8 rounded-[2.5rem] border border-white/5 space-y-6 sticky top-32">
                <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
                
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-foreground font-semibold">PKR {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping Fee</span>
                    <span className="text-foreground font-semibold">PKR {shipping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs text-accent font-bold uppercase tracking-widest pt-2">
                    <span>Discount (Student)</span>
                    <span>- PKR 0</span>
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
                  className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xl hover:opacity-90 transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3"
                >
                  <CreditCard size={20} /> Checkout
                </Link>

                <p className="text-center text-xs text-muted-foreground">
                  Payments secured by <span className="text-blue-400 font-bold">Stripe</span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-24 glass rounded-3xl">
            <div className="text-6xl mb-6">🛒</div>
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Looks like you haven't added any smart pots yet.</p>
            <Link href="/products" className="bg-primary text-white px-8 py-4 rounded-xl font-bold">Start Shopping</Link>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
