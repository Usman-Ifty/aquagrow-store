"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent! Usman will get back to you soon.");
  };

  return (
    <main className="flex-1">
      <Navbar />

      <div className="container mx-auto px-6 pt-40 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-6xl font-black mb-8">Get in Touch</h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-md">
              Have questions about our smart pots? Want to join our team? Drop us a message.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary border border-white/5 shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-bold uppercase tracking-widest">Email Us</div>
                  <div className="text-xl font-bold">aquagrowpk@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-accent border border-white/5 shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-bold uppercase tracking-widest">Call Us</div>
                  <div className="text-xl font-bold">+92 306 222 1078</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-blue-400 border border-white/5 shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-bold uppercase tracking-widest">Visit Us</div>
                  <div className="text-xl font-bold">FAST-NUCES, Faisalabad, Pakistan</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass p-12 rounded-[3rem] border border-white/10 shadow-2xl"
          >
            <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
              <MessageSquare className="text-primary" /> Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Your Name</label>
                  <input required type="text" placeholder="Usman" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Email Address</label>
                  <input required type="email" placeholder="usman@gmail.com" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold ml-1">Subject</label>
                <input required type="text" placeholder="Inquiry about Smart Pot" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold ml-1">Message</label>
                <textarea required rows="4" placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xl hover:opacity-90 transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
