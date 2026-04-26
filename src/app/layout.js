import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "AquaGrow – Smart Irrigation Systems",
  description: "Automated care for your plants. Premium smart irrigation solutions for modern life.",
};

import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} dark`}>
      <body className="min-h-screen flex flex-col antialiased">
        <CartProvider>
          <Toaster position="top-right" />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
