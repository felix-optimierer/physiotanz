/*
 * Impressum Page – Physiotanz
 * DSGVO-konformes Impressum für Regina Forstner
 */
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

export default function Impressum() {
  return (
    <Layout>
      <section className="py-12 md:py-20 bg-[#FAFAF8]">
        <div className="container max-w-3xl">
          <FadeIn>
            <h1 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-8">
              Impressum
            </h1>

            <div className="prose prose-sm max-w-none text-[#444] space-y-6">
              {/* Angaben gemäß § 5 ECG */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  Angaben gemäß § 5 ECG
                </h2>
                <p className="leading-relaxed">
                  Regina Forstner<br />
                  Physiotanz – Physiotherapie, Osteopathie &amp; Beckenbodentraining<br />
                  Bürmooser Landesstraße 4<br />
                  5113 St. Georgen bei Salzburg<br />
                  Österreich
                </p>
              </div>

              {/* Kontakt */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  Kontakt
                </h2>
                <p className="leading-relaxed">
                  Telefon: <a href="tel:+436648810253" className="text-[#E91E8C] hover:underline">0664 8810 2535</a><br />
                  E-Mail: <a href="mailto:info@physiotanz.at" className="text-[#E91E8C] hover:underline">info@physiotanz.at</a><br />
                  Website: <a href="https://www.physiotanz.at" className="text-[#E91E8C] hover:underline">www.physiotanz.at</a>
                </p>
              </div>

              {/* Berufsbezeichnung */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  Berufsbezeichnung und berufsrechtliche Regelungen
                </h2>
                <p className="leading-relaxed">
                  Berufsbezeichnung: Physiotherapeutin<br />
                  Verliehen in: Österreich<br />
                  Zuständige Kammer: Wirtschaftskammer Salzburg
                </p>
                <p className="leading-relaxed mt-2">
                  Berufsrechtliche Regelungen:<br />
                  MTD-Gesetz (Bundesgesetz über die Regelung der gehobenen medizinisch-technischen Dienste)
                </p>
              </div>

              {/* Aufsichtsbehörde */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  Aufsichtsbehörde
                </h2>
                <p className="leading-relaxed">
                  Bezirkshauptmannschaft Salzburg-Umgebung
                </p>
              </div>

              {/* Haftungsausschluss */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  Haftungsausschluss (Disclaimer)
                </h2>

                <h3 className="text-base font-medium text-[#2D2D2D] mt-4 mb-1">
                  Haftung für Inhalte
                </h3>
                <p className="leading-relaxed">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 ECG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 ECG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>

                <h3 className="text-base font-medium text-[#2D2D2D] mt-4 mb-1">
                  Haftung für Links
                </h3>
                <p className="leading-relaxed">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>

                <h3 className="text-base font-medium text-[#2D2D2D] mt-4 mb-1">
                  Urheberrecht
                </h3>
                <p className="leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
              </div>

              {/* Streitschlichtung */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  Streitschlichtung
                </h2>
                <p className="leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E91E8C] hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                  . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
