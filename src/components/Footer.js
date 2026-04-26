import Link from "next/link";
import { Globe, Camera, Send, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">
              Aqua<span className="text-accent">Grow</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Bringing smart irrigation solutions to every Pakistani home. Caring for your plants, one drop at a time.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-all"><Globe size={20} /></Link>
              <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-all"><Camera size={20} /></Link>
              <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-all"><Send size={20} /></Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Our Products</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About AquaGrow</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
              <li><Link href="/returns" className="hover:text-primary transition-colors">Return Policy</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                <span>FAST-NUCES, Faisalabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+92 306 222 1078</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span>aquagrowpk@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm flex flex-col md:flex-row items-center justify-center gap-4">
          <p>© {new Date().getFullYear()} AquaGrow Smart Irrigation Systems. Designed by Usman Ifty.</p>
        </div>
      </div>
    </footer>
  );
}
