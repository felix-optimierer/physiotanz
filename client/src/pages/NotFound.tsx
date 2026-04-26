/*
 * 404 Not Found Page – Physiotanz themed
 * Design: Editorial Healthcare – warm, trustworthy
 */
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "wouter";
import { ArrowRight, Heart } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="py-20 md:py-32 bg-[#FAFAF8] min-h-[70vh] flex items-center">
        <div className="container max-w-xl text-center">
          <FadeIn>
            <div className="w-16 h-16 rounded-full bg-[#FDF2F8] flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-[#E91E8C]" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#E91E8C]/20 mb-2 font-[family-name:var(--font-heading)]">
              404
            </h1>

            <h2 className="text-xl md:text-2xl font-bold text-[#2D2D2D] mb-4">
              Diese Seite hat sich verlaufen
            </h2>

            <p className="text-[#555] leading-relaxed mb-8">
              Keine Sorge – genau wie beim Beckenboden finden wir auch hier den richtigen Weg zurück. Die Seite, die du suchst, existiert leider nicht.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm"
              >
                Zur Startseite
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/beckenbodenstuhl"
                className="inline-flex items-center justify-center gap-2 border border-[#E91E8C]/30 text-[#E91E8C] font-medium px-6 py-3 rounded-md hover:bg-[#FDF2F8] transition-all text-sm"
              >
                Beckenbodenstuhl entdecken
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
