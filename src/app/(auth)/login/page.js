"use client";

import Link from "next/link";
import { Mail, Lock, ArrowRight, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_right,var(--primary)_0%,transparent_40%),radial-gradient(circle_at_bottom_left,var(--accent)_0%,transparent_30%)] p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass w-full max-w-md p-10 rounded-3xl shadow-2xl space-y-8"
      >
        <div className="text-center">
          <Link href="/" className="text-3xl font-black tracking-tight mb-2 inline-block">
            Aqua<span className="text-accent">Grow</span>
          </Link>
          <h2 className="text-xl font-bold text-muted-foreground mt-4">Welcome back!</h2>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
              <input 
                type="email" 
                placeholder="muhammad@fast.pk"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between ml-1">
              <label className="text-sm font-semibold">Password</label>
              <Link href="#" className="text-xs text-primary hover:underline">Forgot password?</Link>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>
          </div>

          <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl shadow-primary/20">
            Sign In <ArrowRight size={18} />
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10"></span></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-card px-2 text-muted-foreground">Or continue with</span></div>
        </div>

        <button className="w-full glass py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
          <Code2 size={20} />
          <span>GitHub</span>
        </button>

        <p className="text-center text-sm text-muted-foreground">
          Don't have an account? <Link href="/signup" className="text-primary font-bold hover:underline">Sign up for free</Link>
        </p>
      </motion.div>
    </main>
  );
}
