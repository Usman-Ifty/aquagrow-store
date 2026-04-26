import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, History, Award } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <Navbar />

      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-6xl font-black mb-6">Our Mission</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded by **Usman Ifty** at FAST-NUCES Faisalabad, AquaGrow is dedicated to bridging the gap between nature and technology. We believe that everyone should have the joy of thriving plants, regardless of their busy lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="glass p-12 rounded-[3rem] border border-white/5 space-y-6">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-black">Innovation in Every Pot</h2>
              <p className="text-muted-foreground leading-relaxed">
                What started as a university project has grown into a mission to provide affordable, high-tech irrigation solutions to the Pakistani market. Our systems are locally designed and assembled, ensuring high quality and local support.
              </p>
            </div>
            <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center text-white font-black text-4xl">🌱 Innovation</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-16">Meet the Visionary</h2>
          <div className="max-w-sm mx-auto">
            <div className="aspect-square bg-muted rounded-[3rem] mb-6 overflow-hidden flex items-center justify-center text-8xl grayscale hover:grayscale-0 transition-all duration-500">
              👤
            </div>
            <h3 className="text-2xl font-bold">Usman Ifty</h3>
            <p className="text-primary font-bold mb-4">Founder & Lead Engineer</p>
            <p className="text-muted-foreground">
              A student entrepreneur from FAST-NUCES with a passion for IoT and sustainable technology.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
