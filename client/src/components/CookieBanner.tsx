/*
 * DSGVO-konformer Cookie-Banner
 * - Zeigt Banner beim ersten Besuch
 * - Speichert Einwilligung in localStorage
 * - Bietet "Akzeptieren" und "Nur notwendige" Optionen
 * - Link zur Datenschutzerklärung
 */
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "physiotanz_cookie_consent";

type ConsentStatus = "accepted" | "necessary_only" | null;

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay so it doesn't flash immediately
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const handleNecessaryOnly = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "necessary_only");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-3 md:p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl border border-[#eee] p-5 md:p-6">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#FDF2F8] flex items-center justify-center shrink-0 mt-0.5">
            <Cookie className="w-4.5 h-4.5 text-[#E91E8C]" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-[#2D2D2D] mb-1.5">
              Cookie-Einstellungen
            </h3>
            <p className="text-xs text-[#666] leading-relaxed mb-4">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
              Technisch notwendige Cookies sind für den Betrieb der Seite erforderlich. 
              Analyse-Cookies helfen uns, die Website zu verbessern.{" "}
              <Link href="/datenschutz" className="text-[#E91E8C] hover:underline">
                Mehr erfahren
              </Link>
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={handleAcceptAll}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#E91E8C] text-white text-xs font-semibold rounded-md hover:bg-[#D4167D] transition-all shadow-sm"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={handleNecessaryOnly}
                className="inline-flex items-center justify-center px-5 py-2.5 border border-[#ddd] text-[#555] text-xs font-medium rounded-md hover:bg-[#f9f9f9] transition-all"
              >
                Nur notwendige
              </button>
            </div>
          </div>
          <button
            onClick={handleNecessaryOnly}
            className="text-[#999] hover:text-[#555] transition-colors shrink-0"
            aria-label="Cookie-Banner schließen"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper to check consent status from other components
export function getCookieConsent(): ConsentStatus {
  return localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentStatus;
}
