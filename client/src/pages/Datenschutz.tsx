/*
 * Datenschutz Page – Physiotanz
 * DSGVO-konforme Datenschutzerklärung für Regina Forstner
 */
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

export default function Datenschutz() {
  return (
    <Layout>
      <section className="py-12 md:py-20 bg-[#FAFAF8]">
        <div className="container max-w-3xl">
          <FadeIn>
            <h1 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-8">
              Datenschutzerklärung
            </h1>

            <div className="prose prose-sm max-w-none text-[#444] space-y-6">
              {/* 1. Verantwortlicher */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  1. Verantwortlicher
                </h2>
                <p className="leading-relaxed">
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="leading-relaxed mt-2">
                  Regina Forstner<br />
                  Physiotanz – Physiotherapie, Osteopathie &amp; Beckenbodentraining<br />
                  Bürmooser Landesstraße 4<br />
                  5113 St. Georgen bei Salzburg<br />
                  Österreich<br />
                  Telefon: 0664 8810 2535<br />
                  E-Mail: info@physiotanz.at
                </p>
              </div>

              {/* 2. Überblick */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  2. Überblick der Verarbeitungen
                </h2>
                <p className="leading-relaxed">
                  Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.
                </p>
                <p className="leading-relaxed mt-2">
                  <strong>Arten der verarbeiteten Daten:</strong><br />
                  – Bestandsdaten (z.B. Namen, Adressen)<br />
                  – Kontaktdaten (z.B. E-Mail, Telefonnummern)<br />
                  – Inhaltsdaten (z.B. Eingaben in Formularen)<br />
                  – Nutzungsdaten (z.B. besuchte Webseiten, Zugriffszeiten)<br />
                  – Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen)
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
                  <li><strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)</strong> – Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck gegeben.</li>
                  <li><strong>Vertragserfüllung (Art. 6 Abs. 1 S. 1 lit. b DSGVO)</strong> – Die Verarbeitung ist für die Erfüllung eines Vertrags erforderlich.</li>
                  <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO)</strong> – Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen erforderlich.</li>
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

              {/* 5. Datenerfassung auf dieser Website */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  5. Datenerfassung auf dieser Website
                </h2>

                <h3 className="text-base font-medium text-[#2D2D2D] mt-4 mb-1">
                  Server-Log-Dateien
                </h3>
                <p className="leading-relaxed">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="leading-relaxed mt-2">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                </p>

                <h3 className="text-base font-medium text-[#2D2D2D] mt-4 mb-1">
                  Kontaktformular
                </h3>
                <p className="leading-relaxed">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="leading-relaxed mt-2">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
                <p className="leading-relaxed mt-2">
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>
              </div>

              {/* 6. Cookies */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  6. Cookies
                </h2>
                <p className="leading-relaxed">
                  Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die Ihr Browser speichert. Sie richten keinen Schaden an.
                </p>
                <p className="leading-relaxed mt-2">
                  <strong>Technisch notwendige Cookies:</strong> Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden. Sie werden in der Regel nur als Reaktion auf von Ihnen getätigte Aktionen gesetzt, die einer Dienstanforderung entsprechen, wie etwa das Festlegen Ihrer Datenschutzeinstellungen.
                </p>
                <p className="leading-relaxed mt-2">
                  <strong>Analyse-Cookies:</strong> Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die Leistung unserer Website messen und verbessern können. Sie werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt.
                </p>
                <p className="leading-relaxed mt-2">
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
                </p>
                <p className="leading-relaxed mt-2">
                  Rechtsgrundlage für technisch notwendige Cookies ist Art. 6 Abs. 1 lit. f DSGVO. Für alle anderen Cookies ist die Rechtsgrundlage Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
                </p>
              </div>

              {/* 7. Webanalyse */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  7. Webanalyse
                </h2>
                <p className="leading-relaxed">
                  Diese Website nutzt ein datenschutzfreundliches Webanalyse-Tool zur statistischen Auswertung der Besucherzugriffe. Das Tool speichert keine personenbezogenen Daten und verwendet keine Cookies, die einer Einwilligung bedürfen. Die IP-Adresse wird anonymisiert. Die Nutzung erfolgt auf Grundlage unseres berechtigten Interesses an einer statistischen Analyse des Nutzerverhaltens zu Optimierungszwecken gemäß Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </div>

              {/* 8. Google Maps */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  8. Google Maps
                </h2>
                <p className="leading-relaxed">
                  Diese Website nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
                </p>
                <p className="leading-relaxed mt-2">
                  Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
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

              {/* 9. Rechte der betroffenen Personen */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  9. Ihre Rechte als betroffene Person
                </h2>
                <p className="leading-relaxed">
                  Ihnen stehen als betroffene Person nach der DSGVO verschiedene Rechte zu:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob personenbezogene Daten verarbeitet werden und Auskunft über diese Daten zu erhalten.</li>
                  <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, die Berichtigung unrichtiger Daten oder die Vervollständigung unvollständiger Daten zu verlangen.</li>
                  <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen, sofern die Voraussetzungen hierfür vorliegen.</li>
                  <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.</li>
                  <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, die Sie betreffenden Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
                  <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Widerspruch einzulegen.</li>
                  <li><strong>Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie haben das Recht, eine erteilte Einwilligung jederzeit zu widerrufen.</li>
                  <li><strong>Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO):</strong> Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren. Zuständige Aufsichtsbehörde ist die Österreichische Datenschutzbehörde, Barichgasse 40-42, 1030 Wien.</li>
                </ul>
              </div>

              {/* 10. Aktualität */}
              <div>
                <h2 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                  10. Aktualität und Änderung dieser Datenschutzerklärung
                </h2>
                <p className="leading-relaxed">
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2026. Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
