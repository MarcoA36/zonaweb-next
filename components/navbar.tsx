"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#negocios", label: "Negocios" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div
              className={cn(
                "inline-flex items-center gap-2 px-3 py-1.5 rounded-full  transition-all duration-300",
                scrolled
                  ? "border-primary/30  text-foreground"
                  : "border-white/20  text-white",
              )}
            >
              <span className="text-xl font-semibold tracking-tight">
                Zona<span className="text-primary">Web</span>
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          {/* <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div> */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/90 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          {/* <div className="hidden md:flex items-center gap-3">
            <Link
              href="/cotizador"
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Cotizar proyecto
            </Link>
          </div> */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5492284656640"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Whatsapp</span>
            </a>
          </div>
          {/* <Link
            href="#contacto"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contactar</span>
          </Link> */}

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-card pb-4">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-3">
                <a
                  href="https://wa.me/5492284656640"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contactar
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
