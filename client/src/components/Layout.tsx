/*
 * Layout Component – Physiotanz Beckenbodenstuhl
 * Design: "Vertrauen & Wärme" – Editorial Healthcare
 * Colors: Pink #E91E8C accent, warm whites, anthrazit text
 * Typography: Lora (headings), Source Sans 3 (body)
 * Mobile: Compact horizontal nav with scroll, NO hamburger menu
 */
import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Mail, MapPin, ChevronUp, Menu, X, Cookie } from "lucide-react";
import { showCookieBanner } from "@/components/CookieBanner";

const LOGO_URL = "/images/logo-2x_1e9a54d3.webp";

const navItems = [
  { label: "Startseite", href: "/" },
  { label: "Beckenbodenstuhl", href: "/beckenbodenstuhl" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Erfahrungen", href: "/erfahrungen" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
            : "bg-white/80 backdrop-blur-sm py-3"
        }`}
      >
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img
              src={LOGO_URL}
              alt="Physiotanz Logo"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav – visible on lg+ */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                  location === item.href
                    ? "text-[#E91E8C] bg-[#FDF2F8]"
                    : "text-[#2D2D2D] hover:text-[#E91E8C] hover:bg-[#FDF2F8]/60"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/anfrage/dein-anliegen"
              className="ml-2 text-sm font-semibold px-5 py-2 bg-[#E91E8C] text-white rounded-md hover:bg-[#D4167D] transition-colors shadow-sm"
            >
              Termin anfragen
            </Link>
          </nav>

          {/* Mobile: CTA + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/anfrage/dein-anliegen"
              className="text-xs font-semibold px-3 py-2 bg-[#E91E8C] text-white rounded-md hover:bg-[#D4167D] transition-colors shadow-sm"
            >
              Termin
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-md text-[#2D2D2D] hover:bg-[#FDF2F8] transition-colors"
              aria-label="Menü öffnen"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <>
            <div className="fixed inset-0 top-[56px] bg-black/20 z-40 lg:hidden" />
            <div
              ref={mobileRef}
              className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-[#eee] z-50 lg:hidden animate-in slide-in-from-top-2 duration-200"
            >
              <nav className="container py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium px-4 py-3 rounded-md transition-colors ${
                      location === item.href
                        ? "text-[#E91E8C] bg-[#FDF2F8]"
                        : "text-[#2D2D2D] hover:text-[#E91E8C] hover:bg-[#FDF2F8]/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/anfrage/dein-anliegen"
                  className="mt-2 text-sm font-semibold px-4 py-3 bg-[#E91E8C] text-white rounded-md hover:bg-[#D4167D] transition-colors text-center"
                >
                  Termin anfragen
                </Link>
              </nav>
            </div>
          </>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16 md:pt-[72px]">{children}</main>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white/90">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {/* Brand */}
            <div>
              <div className="h-14 w-auto mb-4 bg-white/10 rounded-lg p-2 inline-block">
                <img
                  src={LOGO_URL}
                  alt="Physiotanz"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                Physiotherapie, Osteopathie &amp; Beckenbodentraining in St. Georgen bei Salzburg. Deine Gesundheit in besten Händen.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
                Navigation
              </h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/60 hover:text-[#E91E8C] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/anfrage/dein-anliegen"
                    className="text-sm text-white/60 hover:text-[#E91E8C] transition-colors"
                  >
                    Termin anfragen
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
                Kontakt
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-white/60">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#E91E8C]" />
                  <span>
                    Bürmooser Landesstraße 4<br />
                    5113 St. Georgen
                  </span>
                </li>
                <li>
                  <a
                    href="tel:+436648810253"
                    className="flex items-center gap-3 text-sm text-white/60 hover:text-[#E91E8C] transition-colors"
                  >
                    <svg className="w-4 h-4 shrink-0 text-[#E91E8C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    0664 8810 2535
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@physiotanz.at"
                    className="flex items-center gap-3 text-sm text-white/60 hover:text-[#E91E8C] transition-colors"
                  >
                    <Mail className="w-4 h-4 shrink-0 text-[#E91E8C]" />
                    info@physiotanz.at
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/35">
            <p>&copy; {new Date().getFullYear()} Physiotanz – Regina Forstner. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-4">
              <Link
                href="/datenschutz"
                rel="noopener noreferrer"
                className="hover:text-white/60 transition-colors"
              >
                Datenschutz
              </Link>
              <Link
                href="/impressum"
                rel="noopener noreferrer"
                className="hover:text-white/60 transition-colors"
              >
                Impressum
              </Link>
              <button
                onClick={showCookieBanner}
                className="hover:text-white/60 transition-colors inline-flex items-center gap-1"
              >
                <Cookie className="w-3 h-3" />
                Cookie-Einstellungen
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 w-10 h-10 bg-[#E91E8C] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#D4167D] transition-all animate-in fade-in slide-in-from-bottom-4 duration-300"
          aria-label="Nach oben scrollen"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
