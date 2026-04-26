/*
 * Danke Page – Thank you after form submission
 */
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";

export default function Danke() {
  return (
    <Layout>
      <section className="py-20 md:py-32 bg-[#FAFAF8] min-h-[70vh] flex items-center">
        <div className="container max-w-xl text-center">
          <FadeIn>
            <div className="w-16 h-16 rounded-full bg-[#E91E8C]/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#E91E8C]" />
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4">
              Vielen Dank für deine Anfrage!
            </h1>

            <p className="text-[#555] leading-relaxed mb-6">
              Wir haben deine Nachricht erhalten und melden uns schnellstmöglich bei dir zurück – in der Regel innerhalb von 24 Stunden.
            </p>

            <div className="bg-white rounded-lg border border-[#eee] p-5 mb-8 text-left">
              <h3 className="font-semibold text-[#2D2D2D] text-sm mb-3">Was passiert als Nächstes?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FDF2F8] flex items-center justify-center text-xs font-bold text-[#E91E8C] shrink-0 mt-0.5">1</div>
                  <p className="text-sm text-[#666]">Wir prüfen deine Anfrage und melden uns telefonisch oder per E-Mail bei dir.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FDF2F8] flex items-center justify-center text-xs font-bold text-[#E91E8C] shrink-0 mt-0.5">2</div>
                  <p className="text-sm text-[#666]">Gemeinsam vereinbaren wir einen Termin für dein kostenloses Beratungsgespräch.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FDF2F8] flex items-center justify-center text-xs font-bold text-[#E91E8C] shrink-0 mt-0.5">3</div>
                  <p className="text-sm text-[#666]">Im Gespräch klären wir, ob der Beckenbodenstuhl die richtige Lösung für dich ist.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm"
              >
                Zurück zur Startseite
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+436648810253"
                className="inline-flex items-center justify-center gap-2 border border-[#E91E8C]/30 text-[#E91E8C] font-medium px-6 py-3 rounded-md hover:bg-[#FDF2F8] transition-all text-sm"
              >
                <Phone className="w-4 h-4" />
                Direkt anrufen
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
