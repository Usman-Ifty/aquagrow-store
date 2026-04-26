"use client";

import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ShoppingCart, Star, Check, ArrowLeft, Info, Cpu, Droplet, Shield } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);

  const handleWishlist = () => {
    toast.success(`${product.name} added to your wishlist!`);
  };

  if (!product) return <div className="min-h-screen flex items-center justify-center text-2xl font-bold">Product not found</div>;

  return (
    <main className="flex-1">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-24">
        <Link href="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft size={18} /> Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square rounded-[2.5rem] bg-card border border-border overflow-hidden shadow-2xl group"
          >
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 opacity-60"></div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} className={i < product.rating ? "fill-accent" : "text-muted"} />)}
              </div>
              <span className="text-muted-foreground font-medium">({product.reviews} customer reviews)</span>
            </div>

            <h1 className="text-5xl font-black mb-4 leading-tight">{product.name}</h1>
            <p className="text-3xl font-bold text-primary mb-8">PKR {product.price.toLocaleString()}</p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {product.longDescription}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="glass p-4 rounded-2xl flex items-center gap-4 border border-white/5">
                <Cpu className="text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Technology</div>
                  <div className="font-bold">Arduino Powered</div>
                </div>
              </div>
              <div className="glass p-4 rounded-2xl flex items-center gap-4 border border-white/5">
                <Droplet className="text-accent" />
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Efficiency</div>
                  <div className="font-bold">Eco-Watering</div>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-12">
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Info size={18} className="text-primary" /> Key Features
              </h4>
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-accent" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => addToCart(product)}
                className="flex-1 bg-primary text-white py-5 rounded-2xl font-black text-xl hover:opacity-90 transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 active:scale-95"
              >
                <ShoppingCart size={24} /> Add to Cart
              </button>
              <button 
                onClick={handleWishlist}
                className="glass px-8 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95"
              >
                Add to Wishlist
              </button>
            </div>
          </motion.div>
        </div>

        {/* Specs Table */}
        <section className="mt-24">
          <div className="glass p-12 rounded-[3rem] border border-white/5">
            <h2 className="text-3xl font-black mb-12 flex items-center gap-4">
              <Shield className="text-primary" size={32} /> Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(product.specs).map(([key, val]) => (
                <div key={key} className="space-y-1">
                  <div className="text-xs text-muted-foreground uppercase font-black tracking-widest">{key}</div>
                  <div className="text-lg font-bold">{val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
