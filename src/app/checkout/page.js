"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CreditCard, MapPin, Truck, Lock, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  return (
    <main className="flex-1">
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-black mb-12">Checkout Details</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Shipping Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <section className="glass p-8 rounded-3xl border border-white/5 space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <MapPin className="text-primary" /> Shipping Information
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 col-span-2">
                  <label className="text-sm font-semibold">Street Address</label>
                  <input type="text" placeholder="123 Smart St, Model Town" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:border-primary outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">City</label>
                  <input type="text" placeholder="Lahore" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:border-primary outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Postal Code</label>
                  <input type="text" placeholder="54000" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:border-primary outline-none" />
                </div>
              </div>
            </section>

            <section className="glass p-8 rounded-3xl border border-white/5 space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <Truck className="text-accent" /> Delivery Method
              </h3>
              <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 flex justify-between items-center">
                <div>
                  <div className="font-bold">Standard Delivery (2-4 Days)</div>
                  <div className="text-xs text-muted-foreground">Via TCS / Leopard Couriers</div>
                </div>
                <div className="font-black text-primary">PKR 250</div>
              </div>
            </section>
          </motion.div>

          {/* Payment Summary */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <section className="glass p-8 rounded-3xl border border-white/5 space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <CreditCard className="text-primary" /> Payment Method
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Secure payment processing via Stripe.</p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-[10px]">VISA</div>
                  <div className="flex-1 font-mono text-sm">•••• •••• •••• 4242</div>
                  <div className="text-xs font-bold text-muted-foreground">04/28</div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Order Total</span>
                  <span className="font-black text-primary text-2xl">PKR 3,750</span>
                </div>

                <button className="w-full bg-accent text-dark py-5 rounded-2xl font-black text-xl hover:opacity-90 transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-3">
                  <Lock size={20} /> Pay Now via Stripe <ArrowRight size={20} />
                </button>
              </div>

              <div className="flex items-center justify-center gap-6 pt-4 text-muted-foreground">
                <div className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-tighter">
                  <ShieldCheck size={14} className="text-accent" /> SSL Secure
                </div>
                <div className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-tighter">
                  <ShieldCheck size={14} className="text-accent" /> 256-bit Encryption
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
