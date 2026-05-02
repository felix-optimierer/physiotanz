/*
 * DSGVO-konformer Cookie-Banner
 * - Zeigt Banner beim ersten Besuch (KEINE Verzögerung - sofort sichtbar)
 * - Speichert Einwilligung in localStorage
 * - "Alle akzeptieren" und "Nur notwendige" Optionen
 * - Link zur Datenschutzerklärung
 * - Blockiert Analytics bis Einwilligung erteilt
 * - X-Button = "Nur notwendige" (nicht "Alle akzeptieren")
 */
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Cookie, X, Shield } from "lucide-react";

const COOKIE_CONSENT_KEY = "physiotanz_cookie_consent";

type ConsentStatus = "accepted" | "necessary_only" | null;

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show immediately - no delay, DSGVO requires consent BEFORE tracking
      setVisible(true);
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
    <div className="fixed inset-0 z-[9999] flex items-end justify-center p-3 md:p-4 bg-black/20">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl border border-[#eee] p-5 md:p-6">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#FDF2F8] flex items-center justify-center shrink-0 mt-0.5">
            <Cookie className="w-4.5 h-4.5 text-[#E91E8C]" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-[#2D2D2D] mb-1.5">
              Cookie-Einstellungen
            </h3>
            <p className="text-xs text-[#666] leading-relaxed mb-3">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
            </p>

            {/* Cookie Details */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#16a34a]" />
                <span className="text-xs text-[#555]">
                  <strong>Technisch notwendig:</strong> Für den Betrieb der Website erforderlich (immer aktiv)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#E91E8C]" />
                <span className="text-xs text-[#555]">
                  <strong>Analyse:</strong> Helfen uns, die Website zu verbessern (nur mit Ihrer Zustimmung)
                </span>
              </div>
            </div>

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
              <Link
                href="/datenschutz"
                className="inline-flex items-center justify-center px-4 py-2.5 text-[#999] text-xs hover:text-[#666] transition-colors"
              >
                Datenschutzerklärung
              </Link>
            </div>

            <div className="flex items-center gap-1.5 mt-3">
              <Shield className="w-3 h-3 text-[#16a34a]" />
              <span className="text-[10px] text-[#aaa]">
                DSGVO-konform · Ihre Daten werden nicht an Dritte weitergegeben
              </span>
            </div>
          </div>
          <button
            onClick={handleNecessaryOnly}
            className="text-[#999] hover:text-[#555] transition-colors shrink-0"
            aria-label="Cookie-Banner schließen (nur notwendige Cookies)"
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
