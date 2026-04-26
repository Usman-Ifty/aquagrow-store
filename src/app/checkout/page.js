"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CreditCard, MapPin, Truck, Lock, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    toast.loading("Connecting to Stripe...", { id: "payment" });

    // Simulate Stripe Checkout redirection
    setTimeout(() => {
      toast.success("Payment authorized!", { id: "payment" });
      router.push("/success");
    }, 2000);
  };

  return (
    <main className="flex-1">
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-black mb-12">Finalize Your Order</h1>

        <form onSubmit={handlePayment} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Shipping Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <section className="glass p-8 rounded-[2.5rem] border border-white/5 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <MapPin className="text-primary" /> Shipping Information
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2 col-span-2">
                  <label className="text-sm font-semibold ml-1">Full Name</label>
                  <input required type="text" placeholder="Muhammad Ahmad" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all" />
                </div>
                <div className="space-y-2 col-span-2">
                  <label className="text-sm font-semibold ml-1">Street Address</label>
                  <input required type="text" placeholder="123 Smart St, Model Town" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">City</label>
                  <input required type="text" placeholder="Lahore" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Postal Code</label>
                  <input required type="text" placeholder="54000" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all" />
                </div>
              </div>
            </section>

            <section className="glass p-8 rounded-[2.5rem] border border-white/5 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <Truck className="text-accent" /> Delivery Method
              </h3>
              <div className="p-6 bg-primary/10 rounded-3xl border border-primary/20 flex justify-between items-center">
                <div>
                  <div className="font-bold text-lg">Standard Delivery (2-4 Days)</div>
                  <div className="text-sm text-muted-foreground">Via TCS / Leopard Couriers</div>
                </div>
                <div className="font-black text-primary text-xl">PKR 250</div>
              </div>
            </section>
          </motion.div>

          {/* Payment Summary */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <section className="glass p-10 rounded-[3rem] border border-white/10 space-y-8 sticky top-32 shadow-2xl">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <CreditCard className="text-primary" /> Payment Method
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Your payment is handled securely via Stripe. We do not store your card details.
              </p>
              
              <div className="space-y-4">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex items-center gap-4 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-14 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xs text-white relative z-10 shadow-lg">VISA</div>
                  <div className="flex-1 font-mono text-lg tracking-wider relative z-10">•••• •••• •••• 4242</div>
                  <div className="text-sm font-bold text-muted-foreground relative z-10">04 / 28</div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-sm text-muted-foreground font-medium">Order Total</div>
                    <div className="text-4xl font-black text-primary leading-none mt-1">PKR 3,750</div>
                  </div>
                  <div className="text-xs text-accent font-black uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                    Student Verified
                  </div>
                </div>

                <button 
                  disabled={loading}
                  type="submit"
                  className="w-full bg-accent text-dark py-6 rounded-[1.5rem] font-black text-xl hover:opacity-90 transition-all shadow-2xl shadow-accent/20 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <><Lock size={20} /> Secure Pay Now <ArrowRight size={20} /></>}
                </button>
              </div>

              <div className="flex flex-col items-center gap-4 pt-4">
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest">
                    <ShieldCheck size={16} className="text-accent" /> SSL Secure
                  </div>
                  <div className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest">
                    <ShieldCheck size={16} className="text-accent" /> 256-bit Encryption
                  </div>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-6 opacity-30 grayscale invert" />
              </div>
            </section>
          </motion.div>
        </form>
      </div>

      <Footer />
    </main>
  );
}
