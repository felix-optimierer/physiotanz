/*
 * Home Page – Physiotanz Beckenbodenstuhl
 * Design: "Vertrauen & Wärme" – Editorial Healthcare
 * Target: Avatar 1 – Junge Mama nach Geburt mit Beckenbodenproblemen
 * Focus: PelviPower Beckenbodenstuhl als Lösung
 * CTAs: Personalisiert in jedem zweiten Abschnitt
 */
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "wouter";
import { CheckCircle, Clock, Shield, Heart, Zap, Baby, ArrowRight, Star, Quote } from "lucide-react";

const HERO_IMG = "/images/hero-mother-baby_4dd1f20e.webp";
const MOTHER_CHILD_IMG = "/images/hero-mother-baby_4dd1f20e.webp";
const PELVIC_IMG = "/images/pelvic-floor-illustration_9a57e5b5.webp";
const YOGA_IMG = "/images/confident-woman-yoga_fe87d662.webp";
const STUHL_IMG = "/images/beckenbodenstuhl-praxis_a221d095.webp";
const REGINA_IMG = "/images/regina-forstner_1bddf2a8.webp";
const PATTERN_IMG = "/images/abstract-pattern-pink_dbf4fca5.webp";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Nach meiner zweiten Geburt hatte ich massive Probleme mit dem Beckenboden. Der PelviPower Stuhl bei Regina war meine Rettung – nach nur 8 Sitzungen spüre ich einen riesigen Unterschied!",
    rating: 5,
    detail: "Mama von 2 Kindern",
  },
  {
    name: "Julia K.",
    text: "Ich habe mich so geschämt, dass ich beim Niesen Urin verloren habe. Regina hat mir die Angst genommen und der Beckenbodenstuhl hat mir geholfen, mein Selbstvertrauen zurückzugewinnen.",
    rating: 5,
    detail: "8 Monate nach Geburt",
  },
  {
    name: "Katharina W.",
    text: "Endlich kann ich wieder mit meinen Kindern auf dem Trampolin springen! Der Stuhl trainiert den Beckenboden so effektiv – und man muss dabei einfach nur sitzen.",
    rating: 5,
    detail: "Mama von 3 Kindern",
  },
  {
    name: "Lisa B.",
    text: "Ich hatte keine Zeit für Rückbildung und fühlte mich schuldig. Der Beckenbodenstuhl passt perfekt in meinen Mama-Alltag – 20 Minuten reichen und ich merke echte Fortschritte.",
    rating: 5,
    detail: "Berufstätige Mama",
  },
  {
    name: "Anna S.",
    text: "Regina ist unglaublich einfühlsam. Sie versteht die Probleme junger Mütter und der Beckenbodenstuhl ist eine geniale Ergänzung zur klassischen Physiotherapie.",
    rating: 5,
    detail: "6 Monate nach Geburt",
  },
  {
    name: "Maria H.",
    text: "Ich hatte Angst, dass ich eine OP brauche. Dank dem Training mit dem PelviPower Stuhl hat sich meine Situation so verbessert, dass eine OP kein Thema mehr ist.",
    rating: 5,
    detail: "Mama, 35 Jahre",
  },
  {
    name: "Stefanie R.",
    text: "Das Beste: Man sitzt einfach nur auf dem Stuhl und die Technologie macht den Rest. Perfekt für Mamas, die keine Energie mehr für aufwendige Übungen haben.",
    rating: 5,
    detail: "Mama von Zwillingen",
  },
  {
    name: "Christina P.",
    text: "Nach 3 Geburten war mein Beckenboden am Ende. Der PelviPower Stuhl hat mir in wenigen Wochen mehr geholfen als monatelanges Beckenbodentraining zu Hause.",
    rating: 5,
    detail: "Mama von 3 Kindern",
  },
];

const problems = [
  { icon: Baby, text: "Urinverlust beim Husten, Niesen oder Lachen seit der Geburt" },
  { icon: Heart, text: "Schweregefühl im Unterleib oder Druckgefühl nach unten" },
  { icon: Clock, text: "Keine Zeit für aufwendige Rückbildungskurse im Mama-Alltag" },
  { icon: Shield, text: "Unsicherheit beim Sport, Spielen mit den Kindern oder im Alltag" },
];

const benefits = [
  {
    icon: Zap,
    title: "Effektiv ohne Anstrengung",
    desc: "Du sitzt bequem auf dem Stuhl – die Technologie trainiert deinen Beckenboden automatisch mit über 20.000 Kontraktionen pro Sitzung.",
  },
  {
    icon: Clock,
    title: "Nur 20 Minuten pro Sitzung",
    desc: "Passt in jeden Mama-Alltag. Kein Umziehen, kein Schwitzen – du bleibst vollständig bekleidet.",
  },
  {
    icon: Shield,
    title: "Medizinisch fundiert",
    desc: "PelviPower ist ein zertifiziertes Medizinprodukt, das in Kliniken und Praxen eingesetzt wird. Betreut von Physiotherapeutin Regina Forstner.",
  },
  {
    icon: CheckCircle,
    title: "Spürbare Ergebnisse",
    desc: "Die meisten Frauen berichten bereits nach 4-6 Sitzungen von einer deutlichen Verbesserung ihrer Beschwerden.",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* ========== HERO SECTION ========== */}
      <section className="relative overflow-hidden bg-[#FAFAF8]">
        <div className="container py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Side */}
            <FadeIn direction="right">
              <div className="max-w-xl">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-4">
                  Neu in der Praxis
                </span>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2D2D2D] leading-tight mb-4">
                  Dein Beckenboden verdient<br />
                  <span className="text-[#E91E8C]">die beste Unterstützung.</span>
                </h1>
                <p className="text-base md:text-lg text-[#555] leading-relaxed mb-6">
                  Stärke deinen Beckenboden ohne Anstrengung – mit dem PelviPower Beckenbodenstuhl bei Physiotanz. Ideal nach Schwangerschaft und Geburt.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/anfrage/dein-anliegen"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#16a34a] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#15803d] transition-all shadow-lg hover:shadow-xl text-base md:text-lg"
                  >
                    Kostenlos beraten lassen
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/beckenbodenstuhl"
                    className="inline-flex items-center justify-center gap-2 border border-[#E91E8C]/30 text-[#E91E8C] font-medium px-6 py-3 rounded-md hover:bg-[#FDF2F8] transition-all text-sm"
                  >
                    Mehr erfahren
                  </Link>
                </div>
                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-[#888]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#E91E8C]" />
                    Zertifiziertes Medizinprodukt
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#E91E8C]" />
                    20+ Jahre Erfahrung
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#E91E8C]" />
                    Vollständig bekleidet
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Image Side */}
            <FadeIn direction="left" delay={0.15}>
              <div className="relative">
                <img
                  src={HERO_IMG}
                  alt="Junge Mutter lächelt entspannt"
                  className="w-full rounded-lg shadow-xl object-cover aspect-[4/3]"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-4 md:left-auto md:-right-4 bg-white rounded-lg shadow-lg p-3 md:p-4 max-w-[200px]">
                  <p className="text-xs font-semibold text-[#E91E8C]">PelviPower</p>
                  <p className="text-[11px] text-[#666] mt-0.5">Über 20.000 Kontraktionen pro Sitzung</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========== PROBLEM SECTION ========== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-3 block">
                Kennst du das?
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4">
                Dein Körper hat Großartiges geleistet –<br />
                jetzt verdient er Unterstützung.
              </h2>
              <p className="text-[#666] leading-relaxed">
                Nach einer Schwangerschaft und Geburt ist der Beckenboden oft geschwächt. Das ist ganz normal – und du bist damit nicht allein.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {problems.map((p, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-5 rounded-lg bg-[#FDF2F8]/50 border border-[#E91E8C]/8 hover:border-[#E91E8C]/20 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#E91E8C]/10 flex items-center justify-center shrink-0">
                    <p.icon className="w-5 h-5 text-[#E91E8C]" />
                  </div>
                  <p className="text-sm text-[#444] leading-relaxed pt-1.5">{p.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p className="text-center text-sm text-[#888] mt-8 italic">
              „Ich dachte, das gehört jetzt einfach dazu als Mama. Aber das stimmt nicht."
            </p>
          </FadeIn>

          {/* CTA nach Problem-Sektion */}
          <FadeIn delay={0.35}>
            <div className="text-center mt-10">
              <Link
                href="/anfrage/dein-anliegen"
                className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm"
              >
                Jetzt persönliche Unterstützung anfragen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-[#999] mt-3">
                Unverbindlich & kostenlos – wir finden gemeinsam die richtige Lösung für dich.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== SOLUTION SECTION ========== */}
      <section className="py-16 md:py-24 bg-[#FAFAF8]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <img
                  src={STUHL_IMG}
                  alt="PelviPower Beckenbodenstuhl in der Praxis"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-3 block">
                  Die Lösung
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4">
                  Der PelviPower Beckenbodenstuhl
                </h2>
                <p className="text-[#555] leading-relaxed mb-6">
                  Stell dir vor, du sitzt einfach auf einem Stuhl – vollständig bekleidet – und dein Beckenboden wird dabei effektiv trainiert. Genau das macht der PelviPower Beckenbodenstuhl mit modernster Magnetfeld-Technologie.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E91E8C] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-[#2D2D2D] text-sm">Kein Ausziehen nötig</p>
                      <p className="text-xs text-[#888]">Du bleibst vollständig bekleidet während der gesamten Behandlung</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E91E8C] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-[#2D2D2D] text-sm">Schmerzfrei & angenehm</p>
                      <p className="text-xs text-[#888]">Du spürst ein leichtes Kribbeln – keine Schmerzen, kein Unbehagen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E91E8C] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-[#2D2D2D] text-sm">Professionell betreut</p>
                      <p className="text-xs text-[#888]">Physiotherapeutin Regina Forstner begleitet dich persönlich</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/beckenbodenstuhl"
                  className="inline-flex items-center gap-2 text-[#E91E8C] font-semibold text-sm hover:gap-3 transition-all"
                >
                  Mehr über den Beckenbodenstuhl erfahren
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========== BENEFITS SECTION ========== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-3 block">
                Deine Vorteile
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D]">
                Warum der Beckenbodenstuhl<br />perfekt für dich ist
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="p-6 rounded-lg bg-white border border-[#eee] hover:border-[#E91E8C]/20 hover:shadow-md transition-all group">
                  <div className="w-11 h-11 rounded-lg bg-[#FDF2F8] flex items-center justify-center mb-4 group-hover:bg-[#E91E8C]/15 transition-colors">
                    <b.icon className="w-5 h-5 text-[#E91E8C]" />
                  </div>
                  <h3 className="font-semibold text-[#2D2D2D] mb-2">{b.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA nach Vorteile-Sektion */}
          <FadeIn delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/anfrage/dein-anliegen"
                className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm"
              >
                Dein Beckenboden-Training starten
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-[#999] mt-3">
                Kostenloses Erstgespräch – wir beraten dich ganz individuell.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-16 md:py-24 bg-[#FAFAF8]">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-3 block">
                So funktioniert's
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D]">
                In 3 einfachen Schritten<br />zu einem starken Beckenboden
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Beratungsgespräch",
                desc: "Du erzählst mir von deinen Beschwerden. Gemeinsam besprechen wir, ob der Beckenbodenstuhl die richtige Lösung für dich ist.",
              },
              {
                step: "02",
                title: "Behandlung starten",
                desc: "Du setzt dich bekleidet auf den PelviPower Stuhl. Die Magnetfeld-Technologie trainiert deinen Beckenboden – 20 Minuten pro Sitzung.",
              },
              {
                step: "03",
                title: "Ergebnisse spüren",
                desc: "Bereits nach wenigen Sitzungen spürst du eine Verbesserung. Dein Beckenboden wird stärker, dein Alltag leichter.",
              },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#E91E8C]/15 mb-3 font-[family-name:var(--font-heading)]">
                    {s.step}
                  </div>
                  <h3 className="font-semibold text-[#2D2D2D] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/anfrage/dein-anliegen"
                className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm"
              >
                Jetzt Beratungsgespräch vereinbaren
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-3 block">
                Erfahrungen
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D]">
                Das sagen Mamas über den<br />Beckenbodenstuhl
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="p-5 rounded-lg bg-[#FAFAF8] border border-[#eee] hover:shadow-md transition-all h-full flex flex-col">
                  <div className="flex items-center gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-[#E91E8C] text-[#E91E8C]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#E91E8C]/20 mb-2" />
                  <p className="text-sm text-[#555] leading-relaxed flex-1">{t.text}</p>
                  <div className="mt-4 pt-3 border-t border-[#eee]">
                    <p className="text-sm font-semibold text-[#2D2D2D]">{t.name}</p>
                    <p className="text-xs text-[#999]">{t.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA nach Testimonials */}
          <FadeIn delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/erfahrungen"
                className="inline-flex items-center gap-2 text-[#E91E8C] font-semibold text-sm hover:gap-3 transition-all mr-6"
              >
                Alle Erfahrungsberichte lesen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/anfrage/dein-anliegen"
                className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm"
              >
                Auch du kannst das schaffen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== ABOUT REGINA ========== */}
      <section className="py-16 md:py-24 bg-[#FAFAF8]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
            <FadeIn direction="right">
              <img
                src={REGINA_IMG}
                alt="Regina Forstner – Physiotherapeutin"
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg object-cover"
              />
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-3 block">
                  Deine Therapeutin
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4">
                  Regina Forstner
                </h2>
                <p className="text-[#555] leading-relaxed mb-4">
                  Seit über 20 Jahren bin ich mit Leidenschaft Physiotherapeutin. Als Osteopathin und Tanztherapeutin verbinde ich verschiedene Ansätze, um dir ganzheitlich zu helfen.
                </p>
                <p className="text-[#555] leading-relaxed mb-6">
                  Ich verstehe die Herausforderungen junger Mütter – denn Beckenbodenprobleme nach der Geburt sind häufiger als du denkst. Mit dem PelviPower Beckenbodenstuhl biete ich dir eine moderne, effektive und diskrete Lösung.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="text-xs px-3 py-1.5 bg-[#FDF2F8] text-[#E91E8C] rounded-full font-medium">
                    Physiotherapeutin
                  </span>
                  <span className="text-xs px-3 py-1.5 bg-[#FDF2F8] text-[#E91E8C] rounded-full font-medium">
                    Osteopathin
                  </span>
                  <span className="text-xs px-3 py-1.5 bg-[#FDF2F8] text-[#E91E8C] rounded-full font-medium">
                    Tanztherapeutin
                  </span>
                  <span className="text-xs px-3 py-1.5 bg-[#FDF2F8] text-[#E91E8C] rounded-full font-medium">
                    20+ Jahre Erfahrung
                  </span>
                </div>
                {/* CTA nach Über Regina */}
                <Link
                  href="/anfrage/dein-anliegen"
                  className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm"
                >
                  Persönliches Gespräch mit Regina vereinbaren
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========== VISION / EMOTIONAL CTA ========== */}
      <section
        className="relative py-20 md:py-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${PATTERN_IMG})` }}
      >
        <div className="absolute inset-0 bg-white/80" />
        <div className="container relative z-10">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4">
                Stell dir vor, du könntest wieder<br />
                <span className="text-[#E91E8C]">unbeschwert lachen, husten und toben.</span>
              </h2>
              <p className="text-[#555] leading-relaxed mb-8 max-w-lg mx-auto">
                Kein heimliches Kreuzen der Beine mehr. Keine Angst vor dem Trampolin. Kein ständiger Toiletten-Radar. Dein Beckenboden kann wieder stark werden – und du verdienst das.
              </p>
              <Link
                href="/anfrage/dein-anliegen"
                className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-semibold px-8 py-3.5 rounded-md hover:bg-[#D4167D] transition-all shadow-lg text-sm"
              >
                Jetzt den ersten Schritt machen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-[#999] mt-4">
                Unverbindlich &amp; kostenlos – wir besprechen gemeinsam, ob der Beckenbodenstuhl für dich geeignet ist.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
