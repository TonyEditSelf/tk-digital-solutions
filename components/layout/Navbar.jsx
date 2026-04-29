// components/layout/Navbar.jsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-navy-900/70 border-b border-gold-500/10">
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          {/* Logo placeholder — swap with real logo image when ready */}
          <div className="w-11 h-11 rounded-lg bg-gold-gradient flex items-center justify-center text-navy-900 font-display font-bold text-lg shadow-lg shadow-gold-500/20">
            TK
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-semibold text-gold-gradient">{BRAND.shortName}</span>
            <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Digital Solutions</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-gold-500 transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/plans" className="relative hidden sm:inline-flex">
            <Button variant="ghost" size="icon" className="text-gold-500 hover:text-gold-400 hover:bg-navy-800">
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gold-gradient text-navy-900 text-[10px] font-bold flex items-center justify-center">
                  {count}
                </span>
              )}
            </Button>
          </Link>
          <Link href="/contact" className="hidden md:inline-flex">
            <Button className="bg-gold-gradient text-navy-900 hover:opacity-90 font-semibold">Book a Call</Button>
          </Link>
          <button className="md:hidden text-foreground p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gold-500/10 bg-navy-900/95 backdrop-blur-xl">
          <div className="container py-5 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/80 hover:text-gold-500">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>
              <Button className="w-full bg-gold-gradient text-navy-900 font-semibold">Book a Call</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
