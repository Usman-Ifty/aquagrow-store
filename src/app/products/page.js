"use client";

import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Filter, SlidersHorizontal } from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="flex-1">
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black mb-2">Our Products</h1>
            <p className="text-muted-foreground">Find the perfect smart pot for your home or office.</p>
          </div>

          <div className="flex items-center gap-4">
            <button className="glass px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all font-medium">
              <Filter size={18} /> Category
            </button>
            <button className="glass px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all font-medium">
              <SlidersHorizontal size={18} /> Sort by
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
