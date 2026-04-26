/*
 * Anfrage Step 3 – Termin
 * Multi-step form: Step 3 of 3
 */
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import FormProgress from "@/components/FormProgress";
import { useLocation } from "wouter";
import { useState } from "react";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";

const timeSlots = [
  "Vormittag (8:00 – 12:00)",
  "Nachmittag (12:00 – 16:00)",
  "Flexibel – egal wann",
];

const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag"];

export default function AnfrageStep3() {
  const [, navigate] = useLocation();
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleSubmit = () => {
    setSubmitting(true);
    // Store final data
    sessionStorage.setItem(
      "anfrage_termin",
      JSON.stringify({ days: selectedDays, time: selectedTime })
    );
    // Simulate submission
    setTimeout(() => {
      navigate("/danke");
    }, 1200);
  };

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-[#FAFAF8] min-h-[70vh]">
        <div className="container max-w-2xl">
          <FadeIn>
            <FormProgress currentStep={3} />

            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-2">
                Wann passt es dir?
              </h1>
              <p className="text-sm text-[#666]">
                Wähle deine bevorzugten Tage und Zeiten. Wir melden uns mit einem konkreten Terminvorschlag.
              </p>
            </div>

            {/* Preferred Days */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#2D2D2D] mb-3">
                Bevorzugte Tage <span className="text-[#999] font-normal">(optional)</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {days.map((day) => (
                  <button
                    key={day}
                    onClick={() => toggleDay(day)}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                      selectedDays.includes(day)
                        ? "border-[#E91E8C] bg-[#FDF2F8] text-[#E91E8C]"
                        : "border-[#eee] bg-white text-[#666] hover:border-[#E91E8C]/30"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Preferred Time */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-[#2D2D2D] mb-3">
                Bevorzugte Uhrzeit <span className="text-[#999] font-normal">(optional)</span>
              </label>
              <div className="space-y-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`w-full p-3 rounded-lg border text-sm text-left font-medium transition-all ${
                      selectedTime === slot
                        ? "border-[#E91E8C] bg-[#FDF2F8] text-[#E91E8C]"
                        : "border-[#eee] bg-white text-[#666] hover:border-[#E91E8C]/30"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Privacy Note */}
            <div className="bg-white rounded-lg border border-[#eee] p-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#E91E8C] mt-0.5 shrink-0" />
                <p className="text-xs text-[#888] leading-relaxed">
                  Mit dem Absenden stimmst du zu, dass wir deine Daten zur Terminvereinbarung verwenden. Deine Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => navigate("/anfrage/deine-daten")}
                className="flex items-center justify-center gap-2 border border-[#ddd] text-[#666] font-medium px-5 py-3 rounded-md hover:bg-[#f5f5f5] transition-all text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="flex-1 flex items-center justify-center gap-2 bg-[#E91E8C] text-white font-semibold py-3.5 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    Anfrage absenden
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
