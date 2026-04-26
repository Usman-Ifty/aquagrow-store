"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, ShoppingCart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import Image from "next/image";

export default function WishlistPage() {
  // Mocking wishlist items for now
  const wishlistItems = [products[1]]; // Pro model as an example

  return (
    <main className="flex-1">
      <Navbar />

      <div className="container mx-auto px-6 pt-40 pb-24">
        <div className="flex items-center gap-4 mb-12">
          <Heart className="text-red-500 fill-red-500" size={36} />
          <h1 className="text-4xl font-black">My Wishlist</h1>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass p-6 rounded-[2.5rem] border border-white/5 space-y-6 shadow-xl group"
              >
                <div className="aspect-square relative rounded-3xl overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-primary font-bold text-xl mb-4">PKR {product.price.toLocaleString()}</p>
                  <div className="flex gap-4">
                    <button className="flex-1 bg-primary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                      <ShoppingCart size={18} /> Move to Cart
                    </button>
                    <button className="p-3 glass rounded-xl text-red-500 hover:bg-red-500/10 transition-all">
                      <Heart size={20} className="fill-red-500" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass rounded-[3rem] border border-white/5">
            <Heart size={64} className="mx-auto mb-6 text-muted-foreground opacity-20" />
            <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
            <Link href="/products" className="text-primary font-bold hover:underline">Go explore products</Link>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
