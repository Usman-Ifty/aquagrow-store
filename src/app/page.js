import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, CheckCircle, ShieldCheck, Zap, Droplets } from "lucide-react";
import Link from "next/link";

const featuredProducts = [
  {
    id: "basic",
    name: "AquaGrow Basic",
    price: 1800,
    description: "Arduino-powered timer based irrigation. Ideal for students.",
    emoji: "🌱",
    rating: 4,
    reviews: 124,
    isFeatured: false
  },
  {
    id: "pro",
    name: "AquaGrow Pro",
    price: 3500,
    description: "Hybrid system with RTC module and soil moisture sensors.",
    emoji: "🌿",
    rating: 5,
    reviews: 89,
    isFeatured: true
  },
  {
    id: "smart",
    name: "AquaGrow Smart",
    price: 6500,
    description: "WiFi enabled with mobile app integration (Pre-order).",
    emoji: "🚀",
    rating: 5,
    reviews: 42,
    isFeatured: false
  }
];

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Now Shipping in Pakistan</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
              Smart Irrigation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">For Modern Life</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed">
              Your plants never forget to drink again. AquaGrow automated pots ensure your greenery thrives even when you're busy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/products" className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-2xl shadow-primary/40 flex items-center justify-center gap-2">
                Explore Products <ArrowRight size={20} />
              </Link>
              <Link href="/about" className="glass px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl font-black mb-4">Choose Your Model</h2>
              <p className="text-muted-foreground text-lg">Solutions designed for every plant lover.</p>
            </div>
            <Link href="/products" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View All Products <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black mb-6">Why AquaGrow?</h2>
            <p className="text-muted-foreground text-lg italic font-serif">"Automated care, every single day."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold">Plug & Play</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Setup in under 10 minutes. No technical skills required.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto text-accent">
                <Droplets size={32} />
              </div>
              <h3 className="text-xl font-bold">Water Efficient</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Reduces water waste by up to 60% compared to manual methods.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto text-blue-500">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold">1 Year Warranty</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Full local support and warranty on our Pro and Smart models.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto text-purple-500">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold">Made in Pakistan</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Proudly designed and assembled at FAST-NUCES Faisalabad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to Start Your <br />Smart Garden?</h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Join 1,000+ Pakistani plant owners who trust AquaGrow. Order today and get 8% student discount.
          </p>
          <Link href="/products" className="bg-white text-primary px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl inline-block">
            Order Now - Starting PKR 1,800
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
