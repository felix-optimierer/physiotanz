/*
 * Anfrage Step 2 – Deine Daten
 * Multi-step form: Step 2 of 3
 */
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import FormProgress from "@/components/FormProgress";
import { useLocation } from "wouter";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function AnfrageStep2() {
  const [, navigate] = useLocation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    telefon: "",
    nachricht: "",
  });

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = form.name.trim() !== "" && (form.email.trim() !== "" || form.telefon.trim() !== "");

  const handleNext = () => {
    if (!canProceed) return;
    sessionStorage.setItem("anfrage_daten", JSON.stringify(form));
    navigate("/anfrage/termin");
  };

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-[#FAFAF8] min-h-[70vh]">
        <div className="container max-w-2xl">
          <FadeIn>
            <FormProgress currentStep={2} />

            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-2">
                Wie können wir dich erreichen?
              </h1>
              <p className="text-sm text-[#666]">
                Damit wir uns bei dir melden können.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">
                  Dein Name <span className="text-[#E91E8C]">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="z.B. Lisa Müller"
                  className="w-full px-4 py-3 rounded-lg border border-[#ddd] bg-white text-sm text-[#2D2D2D] placeholder:text-[#bbb] focus:border-[#E91E8C] focus:ring-2 focus:ring-[#E91E8C]/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">
                  E-Mail Adresse
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="lisa@beispiel.at"
                  className="w-full px-4 py-3 rounded-lg border border-[#ddd] bg-white text-sm text-[#2D2D2D] placeholder:text-[#bbb] focus:border-[#E91E8C] focus:ring-2 focus:ring-[#E91E8C]/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">
                  Telefonnummer
                </label>
                <input
                  type="tel"
                  value={form.telefon}
                  onChange={(e) => update("telefon", e.target.value)}
                  placeholder="z.B. 0664 1234567"
                  className="w-full px-4 py-3 rounded-lg border border-[#ddd] bg-white text-sm text-[#2D2D2D] placeholder:text-[#bbb] focus:border-[#E91E8C] focus:ring-2 focus:ring-[#E91E8C]/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-1.5">
                  Nachricht <span className="text-[#999] font-normal">(optional)</span>
                </label>
                <textarea
                  value={form.nachricht}
                  onChange={(e) => update("nachricht", e.target.value)}
                  placeholder="Gibt es etwas, das du uns vorab mitteilen möchtest?"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-[#ddd] bg-white text-sm text-[#2D2D2D] placeholder:text-[#bbb] focus:border-[#E91E8C] focus:ring-2 focus:ring-[#E91E8C]/20 outline-none transition-all resize-none"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => navigate("/anfrage/dein-anliegen")}
                className="flex items-center justify-center gap-2 border border-[#ddd] text-[#666] font-medium px-5 py-3 rounded-md hover:bg-[#f5f5f5] transition-all text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück
              </button>
              <button
                onClick={handleNext}
                disabled={!canProceed}
                className="flex-1 flex items-center justify-center gap-2 bg-[#E91E8C] text-white font-semibold py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Weiter
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#999] text-center mt-4">
              * Pflichtfeld. Mindestens E-Mail oder Telefonnummer erforderlich.
            </p>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
