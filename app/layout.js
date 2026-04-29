// app/layout.js
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "TK Digital Solutions — Premium Digital Growth Partner",
  description:
    "TK Digital Solutions helps businesses grow online with clarity, consistency, and automation. Premium digital marketing, content, and systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased">
        <CartProvider>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
          <Toaster position="top-right" richColors />
        </CartProvider>
      </body>
    </html>
  );
}
