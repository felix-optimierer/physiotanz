/*
 * Kontakt Page – Physiotanz
 * Design: Editorial Healthcare – warm, trustworthy
 * Includes Google Maps integration for practice location
 * CTAs: Personalisiert in mehreren Abschnitten
 */
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { MapView } from "@/components/Map";
import { useRef } from "react";

const PRAXIS_IMG = "/manus-storage/praxis-aussen_3f91f739.webp";
const PRAXIS_IMG_2 = "/manus-storage/praxis-aussen-2_1ea79ca0.webp";

// Physiotanz location: Bürmooser Landesstraße 4, 5113 St. Georgen bei Salzburg
const PRAXIS_LOCATION = { lat: 47.9958, lng: 12.8935 };

export default function Kontakt() {
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;
    new google.maps.marker.AdvancedMarkerElement({
      map,
      position: PRAXIS_LOCATION,
      title: "Physiotanz – Regina Forstner",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-20 bg-[#FAFAF8]">
        <div className="container text-center max-w-3xl">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C] mb-3 block">
              Kontakt
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2D2D2D] leading-tight mb-4">
              Wir freuen uns<br />
              <span className="text-[#E91E8C]">auf dich.</span>
            </h1>
            <p className="text-[#555] leading-relaxed mb-6">
              Hast du Fragen zum Beckenbodenstuhl oder möchtest einen Termin vereinbaren? Kontaktiere uns – wir sind gerne für dich da.
            </p>
            {/* CTA im Hero */}
            <Link
              href="/anfrage/dein-anliegen"
              className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm"
            >
              Direkt Termin anfragen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info + Practice Images */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Details */}
            <FadeIn direction="right">
              <div>
                <h2 className="text-xl font-bold text-[#2D2D2D] mb-6">Kontaktdaten</h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FDF2F8] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#E91E8C]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#2D2D2D] text-sm">Adresse</p>
                      <p className="text-sm text-[#666]">
                        Bürmooser Landesstraße 4<br />
                        5113 St. Georgen
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FDF2F8] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#E91E8C]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#2D2D2D] text-sm">Telefon</p>
                      <a href="tel:+436648810253" className="text-sm text-[#E91E8C] hover:underline">
                        0664 8810 2535
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FDF2F8] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#E91E8C]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#2D2D2D] text-sm">E-Mail</p>
                      <a href="mailto:info@physiotanz.at" className="text-sm text-[#E91E8C] hover:underline">
                        info@physiotanz.at
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FDF2F8] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#E91E8C]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#2D2D2D] text-sm">Öffnungszeiten</p>
                      <p className="text-sm text-[#666]">
                        Mo – Mi: 8:00 – 16:00 Uhr<br />
                        Do: 8:00 – 12:00 Uhr<br />
                        Fr – So: nach Vereinbarung
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/anfrage/dein-anliegen"
                    className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm"
                  >
                    Termin online anfragen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Practice Images */}
            <FadeIn direction="left" delay={0.1}>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <img
                    src={PRAXIS_IMG}
                    alt="Praxis Physiotanz von außen"
                    className="w-full rounded-lg shadow-lg object-cover h-48 md:h-56"
                  />
                  <img
                    src={PRAXIS_IMG_2}
                    alt="Praxis Physiotanz Gebäude"
                    className="w-full rounded-lg shadow-lg object-cover h-48 md:h-56"
                  />
                </div>
                <div className="bg-[#FAFAF8] rounded-lg p-5 border border-[#eee]">
                  <h3 className="font-semibold text-[#2D2D2D] text-sm mb-2">Anfahrt</h3>
                  <p className="text-sm text-[#666] leading-relaxed">
                    Die Praxis befindet sich in St. Georgen bei Salzburg, direkt an der Bürmooser Landesstraße. Parkplätze sind direkt vor der Praxis vorhanden.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="bg-[#FAFAF8]">
        <div className="container max-w-5xl py-8 md:py-12">
          <FadeIn>
            <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 text-center">So findest du uns</h2>
            <div className="rounded-lg overflow-hidden shadow-lg border border-[#eee]">
              <MapView
                className="w-full h-[350px] md:h-[420px]"
                initialCenter={PRAXIS_LOCATION}
                initialZoom={15}
                onMapReady={handleMapReady}
              />
            </div>
            <p className="text-xs text-[#999] text-center mt-3">
              Bürmooser Landesstraße 4, 5113 St. Georgen bei Salzburg
            </p>
          </FadeIn>

          {/* CTA nach Google Maps */}
          <FadeIn delay={0.2}>
            <div className="text-center mt-8">
              <Link
                href="/anfrage/dein-anliegen"
                className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4167D] transition-all shadow-md text-sm"
              >
                Jetzt Besuch in der Praxis planen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-[#999] mt-3">
                Kostenlose Parkplätze direkt vor der Praxis.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-[#E91E8C]">
        <div className="container text-center max-w-2xl">
          <FadeIn>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              Lieber direkt online anfragen?
            </h2>
            <p className="text-sm text-white/80 mb-6">
              Nutze unser Anfrage-Formular und wir melden uns schnellstmöglich bei dir zurück.
            </p>
            <Link
              href="/anfrage/dein-anliegen"
              className="inline-flex items-center gap-2 bg-white text-[#E91E8C] font-semibold px-6 py-3 rounded-md hover:bg-[#FDF2F8] transition-all shadow-lg text-sm"
            >
              Zum Anfrage-Formular
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
