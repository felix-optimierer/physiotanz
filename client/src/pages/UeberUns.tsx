/*
 * Über Uns Page – About Regina and the practice
 * Design: Editorial Healthcare – warm, trustworthy
 * CTAs: Personalisiert in jedem zweiten Abschnitt
 */
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "wouter";
import { ArrowRight, Award, Heart, Users, Sparkles } from "lucide-react";

const REGINA_IMG = "/manus-storage/regina-forstner_1bddf2a8.webp";
const PRAXIS_IMG = "/manus-storage/praxis-aussen_3f91f739.webp";
const BEHANDLUNG1 = "/manus-storage/behandlungsraum-1_026c8880.webp";
const BEHANDLUNG3 = "/manus-storage/behandlungsraum-3_ef9f7509.webp";
const GYMNASTIK = "/manus-storage/gymnastikbaelle_5a6c84ae.webp";

const qualifications = [
  "Diplomierte Physiotherapeutin",
  "Osteopathin (Cranio Sacral Therapie)",
  "Tanztherapeutin",
  "Bemer-Therapie zertifiziert",
  "BodyART & Deep Work Trainerin",
  "Sportphysiotherapie",
  "Schwangeren- & Mutter-Kind-Betreuung",
  "Neurologische Rehabilitation",
];

export default function UeberUns() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-20 bg-[#FAFAF8]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-3 block">
                  Über uns
                </span>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2D2D2D] leading-tight mb-4">
                  Deine Gesundheit in<br />
                  <span className="text-[#E91E8C]">besten Händen.</span>
                </h1>
                <p className="text-[#555] leading-relaxed mb-4">
                  Ich bin Regina Forstner – Physiotherapeutin, Osteopathin und Tanztherapeutin mit über 20 Jahren Erfahrung. Mein Anliegen ist es, dir die Freude und den Spaß an der Bewegung zu vermitteln.
                </p>
                <p className="text-[#555] leading-relaxed mb-6">
                  In meiner Praxis in St. Georgen bei Salzburg verbinde ich klassische Physiotherapie mit ganzheitlichen Ansätzen. Ich habe mich auf chronische und akute Beschwerden im Bereich des Bewegungsapparates, der Neurologie und der Psychosomatik spezialisiert.
                </p>
                {/* CTA im Hero */}
                <Link
                  href="/anfrage/dein-anliegen"
                  className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm"
                >
                  Regina persönlich kennenlernen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <img
                src={REGINA_IMG}
                alt="Regina Forstner"
                className="w-full max-w-md mx-auto rounded-lg shadow-xl object-cover"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-3 block">
                Philosophie
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-6">
                „Krankheiten finden kann jeder –<br />Gesundheit zu finden ist das Ziel."
              </h2>
              <p className="text-[#555] leading-relaxed max-w-2xl mx-auto">
                Dieses Zitat von Andrew Taylor Still leitet meine tägliche Arbeit. Ich glaube daran, dass jeder Mensch die Fähigkeit zur Selbstheilung in sich trägt. Meine Aufgabe ist es, diese Kräfte zu aktivieren und zu unterstützen.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Heart, title: "Ganzheitlich", desc: "Körper, Geist und Seele als Einheit betrachten" },
              { icon: Users, title: "Persönlich", desc: "Individuelle Betreuung in vertrauensvoller Atmosphäre" },
              { icon: Award, title: "Kompetent", desc: "20+ Jahre Erfahrung und stetige Weiterbildung" },
              { icon: Sparkles, title: "Innovativ", desc: "Modernste Technologien wie der PelviPower Stuhl" },
            ].map((v, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="text-center p-5">
                  <div className="w-12 h-12 rounded-full bg-[#FDF2F8] flex items-center justify-center mx-auto mb-3">
                    <v.icon className="w-5 h-5 text-[#E91E8C]" />
                  </div>
                  <h3 className="font-semibold text-[#2D2D2D] mb-1 text-sm">{v.title}</h3>
                  <p className="text-xs text-[#888]">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA nach Philosophie */}
          <FadeIn delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/anfrage/dein-anliegen"
                className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm"
              >
                Jetzt persönliche Betreuung anfragen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-[#999] mt-3">
                Ganzheitlich, persönlich und auf dich zugeschnitten.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 md:py-24 bg-[#FAFAF8]">
        <div className="container max-w-4xl">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-3 block">
                Qualifikationen
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D]">
                Ausbildung & Spezialisierungen
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {qualifications.map((q, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#eee]">
                  <div className="w-2 h-2 rounded-full bg-[#E91E8C] shrink-0" />
                  <p className="text-sm text-[#444]">{q}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-3 block">
                Die Praxis
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D]">
                Ein Ort zum Wohlfühlen
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[PRAXIS_IMG, BEHANDLUNG1, BEHANDLUNG3, GYMNASTIK].map((img, i) => (
              <FadeIn key={i} delay={i * 0.08} className={i === 0 ? "col-span-2 md:col-span-1" : ""}>
                <img
                  src={img}
                  alt={`Praxis Physiotanz ${i + 1}`}
                  className="w-full h-48 md:h-56 object-cover rounded-lg"
                />
              </FadeIn>
            ))}
          </div>

          {/* CTA nach Galerie */}
          <FadeIn delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/anfrage/dein-anliegen"
                className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm"
              >
                Praxis besuchen – Termin vereinbaren
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-[#999] mt-3">
                Überzeuge dich selbst von der angenehmen Atmosphäre.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Kassenverrechnung */}
      <section className="py-16 md:py-24 bg-[#FAFAF8]">
        <div className="container max-w-3xl text-center">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-3 block">
              Kassenverrechnung
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4">
              Direkte Verrechnung mit deiner Kasse
            </h2>
            <p className="text-[#555] leading-relaxed mb-6">
              Ich verrechne direkt mit den Krankenkassen ÖGK, SVS und BVAEB. Der PelviPower Beckenbodenstuhl ist eine Privatleistung – gerne beraten wir dich zu den Kosten im persönlichen Gespräch.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["ÖGK", "SVS", "BVAEB"].map((kasse) => (
                <span
                  key={kasse}
                  className="px-5 py-2 bg-white border border-[#eee] rounded-lg text-sm font-medium text-[#2D2D2D]"
                >
                  {kasse}
                </span>
              ))}
            </div>
            {/* CTA nach Kassenverrechnung */}
            <Link
              href="/anfrage/dein-anliegen"
              className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm"
            >
              Fragen zur Kostenübernahme? Jetzt beraten lassen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#E91E8C]">
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Lerne mich und meine Praxis kennen
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Ich freue mich darauf, dich persönlich zu beraten und gemeinsam den besten Weg für deine Gesundheit zu finden.
            </p>
            <Link
              href="/anfrage/dein-anliegen"
              className="inline-flex items-center gap-2 bg-white text-[#E91E8C] font-semibold px-8 py-3.5 rounded-md hover:bg-[#FDF2F8] transition-all shadow-lg text-sm"
            >
              Dein persönliches Erstgespräch anfragen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
