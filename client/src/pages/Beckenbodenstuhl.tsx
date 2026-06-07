/*
 * Beckenbodenstuhl Page – Detailed info about PelviPower
 * Design: Editorial Healthcare – warm, trustworthy
 * CTAs: Personalisiert in jedem zweiten Abschnitt
 */
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, HelpCircle } from "lucide-react";
import { useState } from "react";

const STUHL_IMG = "/manus-storage/beckenbodenstuhl-praxis_a221d095.webp";
const PELVIC_IMG = "/manus-storage/pelvic-floor-illustration_9a57e5b5.webp";
const YOGA_IMG = "/manus-storage/confident-woman-yoga_fe87d662.webp";
const KONZEPT_IMG = "/manus-storage/pelvipower-konzept_5f85c14c.webp";

const faqs = [
  {
    q: "Tut die Behandlung weh?",
    a: "Nein, die Behandlung ist vollkommen schmerzfrei. Du spürst ein leichtes Kribbeln oder Vibrieren im Beckenbodenbereich – viele Frauen empfinden es sogar als angenehm.",
  },
  {
    q: "Muss ich mich ausziehen?",
    a: "Nein! Das ist einer der größten Vorteile. Du bleibst während der gesamten Behandlung vollständig bekleidet. Einfach hinsetzen und die Technologie arbeiten lassen.",
  },
  {
    q: "Wie viele Sitzungen brauche ich?",
    a: "Wir empfehlen in der Regel 8-12 Sitzungen, idealerweise 2x pro Woche. Viele Frauen spüren bereits nach 4-6 Sitzungen eine deutliche Verbesserung.",
  },
  {
    q: "Ab wann nach der Geburt kann ich starten?",
    a: "In der Regel kannst du ab 6-8 Wochen nach einer natürlichen Geburt und ab 10-12 Wochen nach einem Kaiserschnitt starten. Wir besprechen das individuell im Beratungsgespräch.",
  },
  {
    q: "Übernimmt die Krankenkasse die Kosten?",
    a: "Der PelviPower Beckenbodenstuhl ist eine Privatleistung. Manche Zusatzversicherungen übernehmen einen Teil der Kosten. Gerne beraten wir dich dazu im persönlichen Gespräch.",
  },
  {
    q: "Kann ich den Stuhl auch bei Organsenkung nutzen?",
    a: "Ja, der PelviPower Stuhl kann auch bei leichter bis mittlerer Organsenkung unterstützend eingesetzt werden. Im Beratungsgespräch klären wir, ob er für deine Situation geeignet ist.",
  },
];

const indications = [
  "Belastungsinkontinenz (Urinverlust beim Husten, Niesen, Lachen)",
  "Dranginkontinenz (plötzlicher, starker Harndrang)",
  "Beckenbodenschwäche nach Schwangerschaft & Geburt",
  "Rückbildung nach Kaiserschnitt",
  "Senkungsbeschwerden (Organsenkung)",
  "Sexuelle Funktionsstörungen",
  "Chronische Beckenschmerzen",
  "Prävention – Beckenboden stärken vor Beschwerden",
];

export default function Beckenbodenstuhl() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-20 bg-[#FAFAF8]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-3 block">
                  PelviPower Beckenbodenstuhl
                </span>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2D2D2D] leading-tight mb-4">
                  Dein Beckenboden –<br />
                  <span className="text-[#E91E8C]">effektiv gestärkt.</span>
                </h1>
                <p className="text-[#555] leading-relaxed mb-6">
                  Der PelviPower Beckenbodenstuhl nutzt hochintensive elektromagnetische Technologie, um die gesamte Beckenbodenmuskulatur zu stimulieren. Über 20.000 Kontraktionen pro Sitzung – mehr als du jemals durch Übungen allein erreichen könntest.
                </p>
                <Link
                  href="/anfrage/dein-anliegen"
                  className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm"
                >
                  Jetzt unverbindlich beraten lassen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <img
                src={STUHL_IMG}
                alt="PelviPower Beckenbodenstuhl"
                className="w-full max-w-md mx-auto rounded-lg shadow-xl object-cover"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-3 block">
                Technologie
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D]">
                Wie funktioniert der Beckenbodenstuhl?
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <FadeIn direction="right">
              <img
                src={PELVIC_IMG}
                alt="Beckenboden Illustration"
                className="w-full max-w-sm mx-auto rounded-lg"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.1}>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E91E8C] text-white flex items-center justify-center text-sm font-bold shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-[#2D2D2D] mb-1">Hinsetzen</h3>
                    <p className="text-sm text-[#666]">Du setzt dich vollständig bekleidet auf den ergonomisch geformten Stuhl.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E91E8C] text-white flex items-center justify-center text-sm font-bold shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-[#2D2D2D] mb-1">Magnetfeld-Stimulation</h3>
                    <p className="text-sm text-[#666]">Hochintensive elektromagnetische Impulse durchdringen den Beckenboden und lösen tiefe Muskelkontraktionen aus.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E91E8C] text-white flex items-center justify-center text-sm font-bold shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-[#2D2D2D] mb-1">Muskelaufbau</h3>
                    <p className="text-sm text-[#666]">Über 20.000 Kontraktionen pro Sitzung stärken die gesamte Beckenbodenmuskulatur nachhaltig.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* CTA nach Technologie */}
          <FadeIn delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/anfrage/dein-anliegen"
                className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm"
              >
                Klingt gut? Lass dich persönlich beraten
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-[#999] mt-3">
                Wir erklären dir alles in Ruhe – kostenlos und unverbindlich.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Indications */}
      <section className="py-16 md:py-24 bg-[#FDF2F8]/30">
        <div className="container max-w-4xl">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-3 block">
                Anwendungsgebiete
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D]">
                Für wen ist der Beckenbodenstuhl geeignet?
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {indications.map((ind, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#eee]">
                  <CheckCircle className="w-5 h-5 text-[#E91E8C] shrink-0" />
                  <p className="text-sm text-[#444]">{ind}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA nach Anwendungsgebiete */}
          <FadeIn delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/anfrage/dein-anliegen"
                className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm"
              >
                Ist der Stuhl das Richtige für mich? Jetzt herausfinden
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-[#999] mt-3">
                Im Beratungsgespräch klären wir gemeinsam, ob der Beckenbodenstuhl für dich geeignet ist.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Treatment Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <FadeIn direction="right">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-3 block">
                  Behandlungsablauf
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4">
                  Was erwartet dich?
                </h2>
                <div className="space-y-4 text-sm text-[#555] leading-relaxed">
                  <p>
                    Im ersten Schritt führen wir ein persönliches Beratungsgespräch, in dem wir deine Beschwerden und Ziele besprechen. Ich erkläre dir genau, wie der Beckenbodenstuhl funktioniert und ob er für dich geeignet ist.
                  </p>
                  <p>
                    Die Behandlung selbst dauert nur 20 Minuten. Du setzt dich bekleidet auf den Stuhl und die Magnetfeld-Technologie beginnt zu arbeiten. Währenddessen kannst du entspannen, lesen oder einfach die Pause genießen.
                  </p>
                  <p>
                    Wir empfehlen eine Serie von 8-12 Sitzungen, idealerweise 2x pro Woche. Die Intensität wird individuell an dich angepasst und kann von Sitzung zu Sitzung gesteigert werden.
                  </p>
                </div>
                {/* CTA nach Behandlungsablauf */}
                <div className="mt-6">
                  <Link
                    href="/anfrage/dein-anliegen"
                    className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm"
                  >
                    Mein persönliches Erstgespräch buchen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.1}>
              <img
                src={YOGA_IMG}
                alt="Frau bei Beckenbodenübung"
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg object-cover"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#FAFAF8]">
        <div className="container max-w-3xl">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-3 block">
                Häufige Fragen
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D]">
                Deine Fragen – unsere Antworten
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-white rounded-lg border border-[#eee] overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium text-[#2D2D2D] text-sm pr-4">{faq.q}</span>
                    <HelpCircle
                      className={`w-5 h-5 shrink-0 transition-colors ${
                        openFaq === i ? "text-[#E91E8C]" : "text-[#ccc]"
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 -mt-1">
                      <p className="text-sm text-[#666] leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA nach FAQ */}
          <FadeIn delay={0.3}>
            <div className="text-center mt-10">
              <p className="text-sm text-[#666] mb-4">
                Noch Fragen? Wir beantworten sie dir gerne persönlich.
              </p>
              <Link
                href="/anfrage/dein-anliegen"
                className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm"
              >
                Deine offenen Fragen im Gespräch klären
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-[#E91E8C]">
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Bereit für einen starken Beckenboden?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Vereinbare jetzt dein kostenloses Beratungsgespräch und erfahre, wie der PelviPower Beckenbodenstuhl dir helfen kann.
            </p>
            <Link
              href="/anfrage/dein-anliegen"
              className="inline-flex items-center gap-2 bg-white text-[#E91E8C] font-semibold px-8 py-3.5 rounded-md hover:bg-[#FDF2F8] transition-all shadow-lg text-sm"
            >
              Kostenloses Beratungsgespräch vereinbaren
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
