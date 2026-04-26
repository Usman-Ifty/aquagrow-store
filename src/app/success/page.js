"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Package, ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);
  return (
    <main className="flex-1">
      <Navbar />

      <div className="container mx-auto px-6 pt-40 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto glass p-12 rounded-[3rem] border border-white/5"
        >
          <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 text-accent">
            <CheckCircle2 size={64} />
          </div>
          
          <h1 className="text-4xl font-black mb-4">Payment Successful!</h1>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Thank you for your purchase. Your AquaGrow Smart Pot is being prepared for shipment. You will receive an email confirmation shortly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="p-4 bg-white/5 rounded-2xl text-left border border-white/5">
              <div className="text-xs text-muted-foreground uppercase font-bold mb-1">Order Number</div>
              <div className="font-mono font-bold">#AQG-2026-8814</div>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl text-left border border-white/5">
              <div className="text-xs text-muted-foreground uppercase font-bold mb-1">Estimated Delivery</div>
              <div className="font-bold">May 2, 2026</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/" className="flex-1 bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all">
              Return Home <ArrowRight size={18} />
            </Link>
            <button className="flex-1 glass py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
              <Download size={18} /> Download Invoice
            </button>
          </div>
        </motion.div>

        <div className="mt-12 flex items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2 text-sm"><Package size={16} /> Track Order</div>
          <div className="flex items-center gap-2 text-sm">📧 24/7 Support</div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
