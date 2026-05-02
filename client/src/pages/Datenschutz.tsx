/*
 * Datenschutz Page – Physiotanz
 * Vollständige DSGVO-konforme Datenschutzerklärung
 * Angepasst für: Österreich, Google Fonts, Google Maps (2-Click), Umami Analytics, Kontaktformular
 */
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

export default function Datenschutz() {
  return (
    <Layout>
      <section className="py-12 md:py-20 bg-[#FAFAF8]">
        <div className="container max-w-3xl">
          <FadeIn>
            <h1 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-2">
              Datenschutzerklärung
            </h1>
            <p className="text-xs text-[#999] mb-8">Stand: Mai 2026</p>

            <div className="prose prose-sm max-w-none text-[#444] space-y-6">
              {/* 1. Verantwortlicher */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  1. Verantwortlicher
                </h2>
                <p className="leading-relaxed">
                  Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
                </p>
                <p className="leading-relaxed mt-2">
                  Regina Forstner<br />
                  Physiotanz – Physiotherapie, Osteopathie &amp; Beckenbodentraining<br />
                  Bürmooser Landesstraße 4<br />
                  5113 St. Georgen bei Salzburg<br />
                  Österreich<br />
                  Telefon: <a href="tel:+436648810253" className="text-[#E91E8C] hover:underline">0664 8810 2535</a><br />
                  E-Mail: <a href="mailto:info@physiotanz.at" className="text-[#E91E8C] hover:underline">info@physiotanz.at</a>
                </p>
              </div>

              {/* 2. Überblick */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  2. Überblick der Verarbeitungen
                </h2>
                <p className="leading-relaxed">
                  Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen:
                </p>
                <p className="leading-relaxed mt-2">
                  <strong>Arten der verarbeiteten Daten:</strong><br />
                  – Bestandsdaten (z.B. Namen, Adressen)<br />
                  – Kontaktdaten (z.B. E-Mail, Telefonnummern)<br />
                  – Inhaltsdaten (z.B. Eingaben in Formularen)<br />
                  – Nutzungsdaten (z.B. besuchte Webseiten, Zugriffszeiten)<br />
                  – Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen)
                </p>
                <p className="leading-relaxed mt-2">
                  <strong>Betroffene Personen:</strong> Besucher und Nutzer dieser Website, Kontaktanfragende.
                </p>
                <p className="leading-relaxed mt-2">
                  <strong>Zwecke der Verarbeitung:</strong> Bereitstellung der Website, Beantwortung von Kontaktanfragen, Terminvereinbarung, Sicherheitsmaßnahmen, Reichweitenmessung.
                </p>
              </div>

              {/* 3. Rechtsgrundlagen */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  3. Maßgebliche Rechtsgrundlagen
                </h2>
                <p className="leading-relaxed">
                  Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</strong> – Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck gegeben.</li>
                  <li><strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 lit. b DSGVO)</strong> – Die Verarbeitung ist für die Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen erforderlich.</li>
                  <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)</strong> – Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen erforderlich, sofern nicht die Interessen oder Grundrechte der betroffenen Person überwiegen.</li>
                </ul>
              </div>

              {/* 4. Sicherheitsmaßnahmen */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  4. Sicherheitsmaßnahmen
                </h2>
                <p className="leading-relaxed">
                  Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten. Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt.
                </p>
              </div>

              {/* 5. Hosting */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  5. Hosting
                </h2>
                <p className="leading-relaxed">
                  Diese Website wird auf Servern der Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Deutschland, gehostet. Die Server befinden sich ausschließlich in deutschen Rechenzentren. Hetzner verarbeitet Daten in unserem Auftrag und ist vertraglich verpflichtet, die Bestimmungen der DSGVO einzuhalten. Ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO wurde geschlossen.
                </p>
                <p className="leading-relaxed mt-2">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer zuverlässigen Bereitstellung der Website).
                </p>
              </div>

              {/* 6. Datenerfassung auf dieser Website */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  6. Datenerfassung auf dieser Website
                </h2>

                <h3 className="text-base font-medium text-[#2D2D2D] mt-4 mb-1">
                  Server-Log-Dateien
                </h3>
                <p className="leading-relaxed">
                  Der Hosting-Provider erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse (anonymisiert)</li>
                </ul>
                <p className="leading-relaxed mt-2">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Die Server-Logs werden nach 7 Tagen automatisch gelöscht.
                </p>

                <h3 className="text-base font-medium text-[#2D2D2D] mt-4 mb-1">
                  Kontakt- und Anfrage-Formular
                </h3>
                <p className="leading-relaxed">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, E-Mail, Telefonnummer, Nachricht, bevorzugte Terminzeiten) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <p className="leading-relaxed mt-2">
                  <strong>Verarbeitete Daten:</strong> Name, E-Mail-Adresse, Telefonnummer (optional), Nachricht (optional), Art des Anliegens, bevorzugte Tage und Uhrzeiten.
                </p>
                <p className="leading-relaxed mt-2">
                  <strong>Speicherort:</strong> Die Daten werden auf einem Server der Hetzner Online GmbH in Deutschland gespeichert.
                </p>
                <p className="leading-relaxed mt-2">
                  <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie durch Aktivierung der Datenschutz-Checkbox vor dem Absenden erteilen. Sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt, ist die Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO.
                </p>
                <p className="leading-relaxed mt-2">
                  <strong>Speicherdauer:</strong> Die von Ihnen im Formular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>
                <p className="leading-relaxed mt-2">
                  <strong>Widerruf:</strong> Sie können Ihre Einwilligung jederzeit per E-Mail an info@physiotanz.at widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>
              </div>

              {/* 7. Cookies */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  7. Cookies und lokale Speicherung
                </h2>
                <p className="leading-relaxed">
                  Unsere Website verwendet Cookies und den lokalen Speicher (localStorage) Ihres Browsers. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie richten keinen Schaden an.
                </p>
                <p className="leading-relaxed mt-2">
                  <strong>Technisch notwendige Speicherung:</strong>
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li><strong>Cookie-Einwilligung</strong> (localStorage: „physiotanz_cookie_consent") – Speichert Ihre Cookie-Präferenz, damit der Banner nicht erneut angezeigt wird. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</li>
                  <li><strong>Formular-Zwischenspeicherung</strong> (sessionStorage) – Speichert Ihre Formulareingaben temporär während des mehrstufigen Anfrage-Prozesses. Die Daten werden automatisch gelöscht, wenn Sie den Browser-Tab schließen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</li>
                </ul>
                <p className="leading-relaxed mt-2">
                  <strong>Analyse-Cookies:</strong> Werden nur mit Ihrer ausdrücklichen Einwilligung über den Cookie-Banner gesetzt. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
                </p>
                <p className="leading-relaxed mt-2">
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
                </p>
              </div>

              {/* 8. Webanalyse */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  8. Webanalyse (Umami)
                </h2>
                <p className="leading-relaxed">
                  Diese Website nutzt Umami, ein datenschutzfreundliches, Open-Source-Webanalyse-Tool. Umami speichert keine personenbezogenen Daten, setzt keine Cookies und erhebt keine IP-Adressen. Es werden ausschließlich anonymisierte Nutzungsstatistiken erhoben (Seitenaufrufe, Verweildauer, Referrer).
                </p>
                <p className="leading-relaxed mt-2">
                  Die Analyse-Daten werden auf unserem eigenen Server (Hetzner, Deutschland) verarbeitet und nicht an Dritte weitergegeben.
                </p>
                <p className="leading-relaxed mt-2">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der statistischen Analyse des Nutzerverhaltens zu Optimierungszwecken). Da Umami keine personenbezogenen Daten verarbeitet, ist nach herrschender Meinung keine Einwilligung erforderlich.
                </p>
              </div>

              {/* 9. Google Fonts */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  9. Google Fonts
                </h2>
                <p className="leading-relaxed">
                  Diese Website nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Google Fonts, bereitgestellt von der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Schriftarten direkt von Google-Servern. Dabei wird Ihre IP-Adresse an Google übermittelt.
                </p>
                <p className="leading-relaxed mt-2">
                  <strong>Hinweis:</strong> Wir planen, die Google Fonts lokal auf unserem eigenen Server zu hosten, um die Datenübertragung an Google vollständig zu vermeiden. Bis zur Umsetzung erfolgt die Nutzung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer einheitlichen Darstellung).
                </p>
                <p className="leading-relaxed mt-2">
                  Mehr Informationen zu Google Fonts finden Sie unter{" "}
                  <a
                    href="https://developers.google.com/fonts/faq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E91E8C] hover:underline"
                  >
                    https://developers.google.com/fonts/faq
                  </a>{" "}
                  und in der Datenschutzerklärung von Google:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E91E8C] hover:underline"
                  >
                    https://policies.google.com/privacy
                  </a>
                </p>
              </div>

              {/* 10. Google Maps */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  10. Google Maps (2-Click-Lösung)
                </h2>
                <p className="leading-relaxed">
                  Diese Website nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p className="leading-relaxed mt-2">
                  <strong>2-Click-Lösung:</strong> Die Google Maps Karte wird nicht automatisch geladen. Erst wenn Sie aktiv auf „Karte laden" klicken, wird eine Verbindung zu Google-Servern hergestellt. Dabei werden Daten (insbesondere Ihre IP-Adresse) an Google übertragen und möglicherweise an Server in den USA weitergeleitet.
                </p>
                <p className="leading-relaxed mt-2">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch aktives Klicken auf „Karte laden").
                </p>
                <p className="leading-relaxed mt-2">
                  Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E91E8C] hover:underline"
                  >
                    https://policies.google.com/privacy
                  </a>
                </p>
              </div>

              {/* 11. Externe Links */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  11. Externe Links und Social Media
                </h2>
                <p className="leading-relaxed">
                  Unsere Website enthält Links zu externen Webseiten (z.B. Instagram, Facebook). Beim Klick auf diese Links werden Sie auf die jeweilige externe Plattform weitergeleitet. Erst mit dem Klick werden Daten an den jeweiligen Anbieter übertragen. Wir haben keinen Einfluss auf die Datenverarbeitung durch diese Anbieter. Bitte informieren Sie sich in den Datenschutzerklärungen der jeweiligen Anbieter.
                </p>
              </div>

              {/* 12. Rechte der betroffenen Personen */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  12. Ihre Rechte als betroffene Person
                </h2>
                <p className="leading-relaxed">
                  Ihnen stehen als betroffene Person nach der DSGVO folgende Rechte zu:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob personenbezogene Daten verarbeitet werden und Auskunft über diese Daten zu erhalten.</li>
                  <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, die Berichtigung unrichtiger Daten oder die Vervollständigung unvollständiger Daten zu verlangen.</li>
                  <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen, sofern die Voraussetzungen hierfür vorliegen.</li>
                  <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.</li>
                  <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, die Sie betreffenden Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
                  <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Widerspruch einzulegen.</li>
                  <li><strong>Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie haben das Recht, eine erteilte Einwilligung jederzeit zu widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt unberührt.</li>
                  <li><strong>Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO):</strong> Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren. Zuständige Aufsichtsbehörde ist die Österreichische Datenschutzbehörde, Barichgasse 40-42, 1030 Wien, Österreich. Website:{" "}
                    <a
                      href="https://www.dsb.gv.at"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E91E8C] hover:underline"
                    >
                      www.dsb.gv.at
                    </a>
                  </li>
                </ul>
              </div>

              {/* 13. Datenübermittlung in Drittländer */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  13. Datenübermittlung in Drittländer
                </h2>
                <p className="leading-relaxed">
                  Eine Datenübermittlung in Drittländer (außerhalb der EU/des EWR) findet nur statt, wenn Sie der Nutzung von Google Maps aktiv zugestimmt haben (2-Click-Lösung) oder wenn Google Fonts von externen Servern geladen werden. In diesen Fällen erfolgt die Übermittlung auf Grundlage des EU-US Data Privacy Framework (Angemessenheitsbeschluss der EU-Kommission) bzw. Ihrer Einwilligung.
                </p>
              </div>

              {/* 14. Aktualität */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  14. Aktualität und Änderung dieser Datenschutzerklärung
                </h2>
                <p className="leading-relaxed">
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2026. Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser Seite abgerufen werden.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
