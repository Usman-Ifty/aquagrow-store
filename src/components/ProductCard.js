"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all shadow-lg hover:shadow-primary/10"
    >
      <Link href={`/products/${product.id}`} className="block relative aspect-square overflow-hidden bg-muted">
        <div className="absolute inset-0 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500">
          {product.emoji}
        </div>
        {product.isFeatured && (
          <div className="absolute top-4 left-4 bg-accent text-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Most Popular
          </div>
        )}
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className={i < product.rating ? "fill-accent text-accent" : "text-muted"} />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
        </div>

        <Link href={`/products/${product.id}`}>
          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-2xl font-bold text-primary">PKR {product.price.toLocaleString()}</span>
          </div>
          <button className="bg-primary text-white p-3 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
