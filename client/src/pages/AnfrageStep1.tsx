/*
 * Anfrage Step 1 – Dein Anliegen
 * Multi-step form: Step 1 of 3
 */
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import FormProgress from "@/components/FormProgress";
import { useLocation } from "wouter";
import { useState } from "react";
import { ArrowRight, Baby, Droplets, Activity, Shield, HelpCircle } from "lucide-react";

const concerns = [
  { id: "inkontinenz", icon: Droplets, label: "Inkontinenz / Urinverlust", desc: "Beim Husten, Niesen, Lachen oder Sport" },
  { id: "rueckbildung", icon: Baby, label: "Rückbildung nach Geburt", desc: "Beckenboden stärken nach Schwangerschaft" },
  { id: "senkung", icon: Activity, label: "Senkungsbeschwerden", desc: "Schweregefühl oder Druckgefühl im Unterleib" },
  { id: "praevention", icon: Shield, label: "Prävention", desc: "Beckenboden vorbeugend stärken" },
  { id: "sonstiges", icon: HelpCircle, label: "Sonstiges", desc: "Andere Beschwerden oder Fragen" },
];

export default function AnfrageStep1() {
  const [, navigate] = useLocation();
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    if (selected.length === 0) return;
    // Store in sessionStorage for later steps
    sessionStorage.setItem("anfrage_anliegen", JSON.stringify(selected));
    navigate("/anfrage/deine-daten");
  };

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-[#FAFAF8] min-h-[70vh]">
        <div className="container max-w-2xl">
          <FadeIn>
            <FormProgress currentStep={1} />

            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-2">
                Was beschäftigt dich?
              </h1>
              <p className="text-sm text-[#666]">
                Wähle aus, welche Themen für dich relevant sind. Mehrfachauswahl möglich.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {concerns.map((c) => (
                <button
                  key={c.id}
                  onClick={() => toggle(c.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg border text-left transition-all ${
                    selected.includes(c.id)
                      ? "border-[#E91E8C] bg-[#FDF2F8] shadow-sm"
                      : "border-[#eee] bg-white hover:border-[#E91E8C]/30"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      selected.includes(c.id)
                        ? "bg-[#E91E8C] text-white"
                        : "bg-[#FDF2F8] text-[#E91E8C]"
                    }`}
                  >
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2D2D2D] text-sm">{c.label}</p>
                    <p className="text-xs text-[#888]">{c.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={selected.length === 0}
              className="w-full flex items-center justify-center gap-2 bg-[#E91E8C] text-white font-semibold py-3.5 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Weiter
              <ArrowRight className="w-4 h-4" />
            </button>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
