/*
 * Erfahrungen Page – Testimonials / Reviews
 * Design: Editorial Healthcare – warm, trustworthy
 * CTAs: Personalisiert – mid-page CTA zwischen Testimonials
 */
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "wouter";
import { ArrowRight, Star, Quote } from "lucide-react";

const allTestimonials = [
  {
    name: "Sarah M.",
    text: "Nach meiner zweiten Geburt hatte ich massive Probleme mit dem Beckenboden. Beim Husten, Niesen oder Lachen – immer ging etwas daneben. Ich habe mich so geschämt und dachte, das gehört jetzt einfach dazu. Der PelviPower Stuhl bei Regina war meine Rettung – nach nur 8 Sitzungen spüre ich einen riesigen Unterschied! Ich kann wieder unbeschwert mit meinen Kindern spielen.",
    rating: 5,
    detail: "Mama von 2 Kindern, 34 Jahre",
  },
  {
    name: "Julia K.",
    text: "Ich habe mich so geschämt, dass ich beim Niesen Urin verloren habe. Ich habe mit niemandem darüber gesprochen – nicht mal mit meinem Mann. Regina hat mir die Angst genommen und der Beckenbodenstuhl hat mir geholfen, mein Selbstvertrauen zurückzugewinnen. Endlich fühle ich mich wieder wie ich selbst.",
    rating: 5,
    detail: "8 Monate nach Geburt",
  },
  {
    name: "Katharina W.",
    text: "Endlich kann ich wieder mit meinen Kindern auf dem Trampolin springen! Der Stuhl trainiert den Beckenboden so effektiv – und man muss dabei einfach nur sitzen. Kein Schwitzen, kein Umziehen, keine komplizierten Übungen. Perfekt für meinen stressigen Mama-Alltag mit drei Kindern.",
    rating: 5,
    detail: "Mama von 3 Kindern",
  },
  {
    name: "Lisa B.",
    text: "Ich hatte keine Zeit für Rückbildung und fühlte mich schuldig. Als berufstätige Mama mit zwei kleinen Kindern ist jede Minute kostbar. Der Beckenbodenstuhl passt perfekt in meinen Alltag – 20 Minuten reichen und ich merke echte Fortschritte. Regina ist dabei unglaublich verständnisvoll.",
    rating: 5,
    detail: "Berufstätige Mama, 31 Jahre",
  },
  {
    name: "Anna S.",
    text: "Regina ist unglaublich einfühlsam. Sie versteht die Probleme junger Mütter und nimmt sich wirklich Zeit für jede Patientin. Der Beckenbodenstuhl ist eine geniale Ergänzung zur klassischen Physiotherapie. Ich fühle mich bei ihr bestens aufgehoben.",
    rating: 5,
    detail: "6 Monate nach Geburt",
  },
  {
    name: "Maria H.",
    text: "Ich hatte Angst, dass ich eine OP brauche. Mein Gynäkologe hat mir gesagt, dass mein Beckenboden sehr geschwächt ist. Dank dem Training mit dem PelviPower Stuhl hat sich meine Situation so verbessert, dass eine OP kein Thema mehr ist. Ich bin Regina unendlich dankbar!",
    rating: 5,
    detail: "Mama, 35 Jahre",
  },
  {
    name: "Stefanie R.",
    text: "Das Beste: Man sitzt einfach nur auf dem Stuhl und die Technologie macht den Rest. Als Mama von Zwillingen habe ich wirklich keine Energie mehr für aufwendige Übungen am Abend. Der Beckenbodenstuhl ist die perfekte Lösung – effektiv und zeitsparend.",
    rating: 5,
    detail: "Mama von Zwillingen",
  },
  {
    name: "Christina P.",
    text: "Nach 3 Geburten war mein Beckenboden am Ende. Ich habe alles versucht – Rückbildungskurse, Beckenbodentraining zu Hause, Yoga. Nichts hat wirklich geholfen. Der PelviPower Stuhl hat mir in wenigen Wochen mehr gebracht als monatelanges Training. Absolute Empfehlung!",
    rating: 5,
    detail: "Mama von 3 Kindern",
  },
  {
    name: "Michaela F.",
    text: "Ich war skeptisch – einfach nur auf einem Stuhl sitzen und der Beckenboden wird trainiert? Klingt zu gut um wahr zu sein. Aber nach der dritten Sitzung habe ich gemerkt: Es funktioniert wirklich! Mein Urinverlust beim Sport hat sich deutlich verbessert.",
    rating: 5,
    detail: "Sportliche Mama, 29 Jahre",
  },
  {
    name: "Sandra L.",
    text: "Die Atmosphäre in der Praxis ist so angenehm und Regina nimmt sich wirklich Zeit. Ich habe mich von Anfang an wohlgefühlt – obwohl das Thema Beckenboden für mich sehr schambehaftet war. Danke für die diskrete und professionelle Betreuung!",
    rating: 5,
    detail: "12 Monate nach Geburt",
  },
  {
    name: "Verena G.",
    text: "Meine Hebamme hat mir den Beckenbodenstuhl bei Regina empfohlen. Ich bin so froh, dass ich den Tipp bekommen habe! Nach 10 Sitzungen fühle ich mich wie ein neuer Mensch. Kein ständiges Kreuzen der Beine mehr beim Niesen.",
    rating: 5,
    detail: "Mama, 33 Jahre",
  },
  {
    name: "Daniela W.",
    text: "Als Lehrerin stehe ich den ganzen Tag und merke den schwachen Beckenboden besonders. Seit dem Training mit dem PelviPower Stuhl fühle ich mich viel sicherer im Alltag. Die Investition hat sich absolut gelohnt!",
    rating: 5,
    detail: "Berufstätige Mama, 37 Jahre",
  },
];

const firstHalf = allTestimonials.slice(0, 6);
const secondHalf = allTestimonials.slice(6);

export default function Erfahrungen() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-20 bg-[#FAFAF8]">
        <div className="container text-center max-w-3xl">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-3 block">
              Erfahrungen
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2D2D2D] leading-tight mb-4">
              Was Mamas über den<br />
              <span className="text-[#E91E8C]">Beckenbodenstuhl sagen</span>
            </h1>
            <p className="text-[#555] leading-relaxed">
              Echte Geschichten von Frauen, die den PelviPower Beckenbodenstuhl bei Physiotanz ausprobiert haben. Ihre Erfahrungen sprechen für sich.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* First Half of Testimonials */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {firstHalf.map((t, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="p-6 rounded-lg bg-[#FAFAF8] border border-[#eee] hover:shadow-md transition-all h-full flex flex-col">
                  <div className="flex items-center gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-[#E91E8C] text-[#E91E8C]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E91E8C]/15 mb-2" />
                  <p className="text-sm text-[#555] leading-relaxed flex-1">{t.text}</p>
                  <div className="mt-4 pt-3 border-t border-[#eee]">
                    <p className="text-sm font-semibold text-[#2D2D2D]">{t.name}</p>
                    <p className="text-xs text-[#999]">{t.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-10 md:py-14 bg-[#FDF2F8]/50">
        <div className="container text-center max-w-2xl">
          <FadeIn>
            <h2 className="text-xl md:text-2xl font-bold text-[#2D2D2D] mb-3">
              Diese Frauen haben den ersten Schritt gemacht.
            </h2>
            <p className="text-sm text-[#666] mb-6">
              Du verdienst es auch, dich wieder sicher und unbeschwert zu fühlen. Finde heraus, ob der Beckenbodenstuhl das Richtige für dich ist.
            </p>
            <Link
              href="/anfrage/dein-anliegen"
              className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm"
            >
              Deine persönliche Beratung anfragen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Second Half of Testimonials */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {secondHalf.map((t, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="p-6 rounded-lg bg-[#FAFAF8] border border-[#eee] hover:shadow-md transition-all h-full flex flex-col">
                  <div className="flex items-center gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-[#E91E8C] text-[#E91E8C]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E91E8C]/15 mb-2" />
                  <p className="text-sm text-[#555] leading-relaxed flex-1">{t.text}</p>
                  <div className="mt-4 pt-3 border-t border-[#eee]">
                    <p className="text-sm font-semibold text-[#2D2D2D]">{t.name}</p>
                    <p className="text-xs text-[#999]">{t.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-[#E91E8C]">
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Schreibe deine eigene Erfolgsgeschichte
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Vereinbare jetzt dein kostenloses Beratungsgespräch und mache den ersten Schritt zu einem starken Beckenboden.
            </p>
            <Link
              href="/anfrage/dein-anliegen"
              className="inline-flex items-center gap-2 bg-white text-[#E91E8C] font-semibold px-8 py-3.5 rounded-md hover:bg-[#FDF2F8] transition-all shadow-lg text-sm"
            >
              Jetzt meine Erfolgsgeschichte starten
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
