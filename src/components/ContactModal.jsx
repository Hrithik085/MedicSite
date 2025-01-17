import React from "react";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-8 rounded shadow-lg max-w-5xl mx-auto max-h-full overflow-y-auto w-full">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">
          Privacy Policy
        </h2>
        <hr />
        <div className="mb-4">
          <p>
            Dr Wilfried Müller GmbH takes the protection of your personal data
            very seriously.
          </p>{" "}
          <br />
          {/* Add more paragraphs here */}
          <p>
            Wir erheben und verwenden Daten ausschließlich im Einklang mit den
            Bestimmungen der Datenschutz-Grundverordnung und des neuen
            Bundesdatenschutzgesetzes. Wir verpflichten uns zur Vertraulichkeit
            Ihrer personenbezogenen Daten und arbeiten daher innerhalb der
            gesetzlichen Grenzen. Ihre personenbezogenen Daten werden nur in dem
            notwendigen Umfang erhoben. Ihre Daten werden nur auf Ihren
            speziellen Wunsch an Dritte weitergeleitet. Darüber hinaus werden
            Daten an Dritte weitergeleitet, wenn dies gesetzlich vorgeschrieben
            ist.
          </p>
          <br />
          <p>
            Wir erheben nur personenbezogene Daten, die wir für die Abwicklung
            Ihrer Bestellung oder zur Beantwortung Ihrer Anfrage, zur Erfüllung
            vertraglicher Verpflichtungen, zur Sicherstellung des Betriebs der
            Website für erforderlich halten oder für die Sie uns Ihre
            Einwilligung zur Verarbeitung erteilt haben. Die rechtliche
            Grundlage ergibt sich aus Art. 6 Abs. 1 a), b), f) DSGVO.
          </p>
          <br />
          <p>
            Wenn Sie uns Ihre Einwilligung erteilen, erheben wir Daten im von
            Ihnen genehmigten Umfang. Wenn Sie uns über die angebotenen
            Kontaktmöglichkeiten kontaktieren, werden Ihre Angaben gespeichert,
            damit sie verwendet werden können, um Ihre Anfrage zu bearbeiten und
            zu beantworten.
          </p>
          <br />
          <p>
            Wenn Sie auf dieser Website einen Beitrag oder Kommentar
            hinterlassen, wird Ihre IP-Adresse gespeichert. Dies geschieht aus
            Sicherheitsgründen: Wenn Ihr Text gegen geltendes Recht verstößt,
            ist es notwendig, Ihre Identität nachvollziehen zu können.
          </p>
          <br />
          <p>
            Es ist normalerweise möglich, unsere Website ohne Angabe
            personenbezogener Daten zu nutzen. Wenn solche personenbezogenen
            Daten auf unserer Website erhoben werden, erfolgt dies, soweit
            möglich, immer auf freiwilliger Basis. Diese von uns erhobenen Daten
            werden nicht ohne Ihre ausdrückliche Zustimmung an Dritte
            weitergegeben.
          </p>
          <br />
          <p>
            Hiermit möchten wir nochmals darauf hinweisen, dass die
            Datenübertragung über das Internet, beispielsweise per E-Mail,
            Sicherheitslücken aufweisen kann. Ein vollständiger Schutz der Daten
            vor dem Zugriff durch Dritte kann nicht gewährleistet werden.
          </p>
          <br />
          <p>
            Wir halten uns an die Grundsätze der Datenvermeidung und
            Datensparsamkeit. Wir speichern daher Ihre personenbezogenen Daten
            nur so lange, wie es zur Erfüllung der hier genannten Zwecke oder
            der verschiedenen gesetzlich vorgeschriebenen Speicherfristen
            erforderlich ist. Sobald der jeweilige Zweck entfällt oder diese
            Fristen abgelaufen sind, werden die entsprechenden Daten
            routinemäßig gesperrt oder gemäß den gesetzlichen Vorschriften
            gelöscht.
          </p>
          <br />
          <p className="font-bold">Erklärung der Begriffe</p>
          <br />
          <p>
            Website umfasst alle einzelnen Webseiten, die wir unter der Domain
            www.drwmuellergmbh.de bereitstellen.
          </p>
          <br />
          <p>
            Die DSGVO ist die Verordnung (EU) 2016/679 des Europäischen
            Parlaments und des Rates vom 27. April 2016 zum Schutz natürlicher
            Personen bei der Verarbeitung personenbezogener Daten und zum freien
            Datenverkehr sowie zur Aufhebung der Richtlinie 95/46/EG
            (Datenschutz-Grundverordnung).
          </p>
          <br />
          <p>
            Gemäß Art. 4 Abs. 1 DSGVO sind personenbezogene Daten alle
            Informationen, die sich auf eine identifizierte oder
            identifizierbare natürliche Person beziehen; eine identifizierbare
            natürliche Person ist eine Person, die direkt oder indirekt
            identifiziert werden kann, insbesondere durch Bezugnahme auf eine
            Kennung wie einen Namen, eine Identifikationsnummer, Standortdaten,
            eine Online-Kennung oder auf einen oder mehrere Faktoren, die
            spezifisch für die physische, physiologische, genetische,
            psychische, wirtschaftliche, kulturelle oder soziale Identität
            dieser natürlichen Person sind.
          </p>
          <br />
          <p>
            Verarbeitung im Sinne von Art. 4 Abs. 2 DSGVO ist jeder Vorgang oder
            jede Vorgangsreihe im Zusammenhang mit personenbezogenen Daten,
            unabhängig davon, ob sie automatisiert durchgeführt wird, wie
            Erhebung, Erfassung, Organisation, Speicherung, Anpassung oder
            Veränderung, Auslesen, Abfrage, Verwendung, Offenlegung durch
            Übermittlung, Verbreitung oder eine andere Form der Bereitstellung,
            Abgleich oder Verknüpfung, Einschränkung, Löschung oder Vernichtung.
          </p>
          <br />
          <p>
            Profiling gemäß Art. 4 Abs. 4 DSGVO ist jede Art der automatisierten
            Verarbeitung personenbezogener Daten, die darin besteht,
            personenbezogene Daten zu verwenden, um persönliche Aspekte einer
            natürlichen Person zu bewerten, insbesondere um Aspekte im
            Zusammenhang mit der Arbeitsleistung, der wirtschaftlichen Lage,
            Gesundheit, persönlichen Vorlieben, Interessen, Zuverlässigkeit,
            Verhalten, Aufenthaltsort oder Bewegungen dieser natürlichen Person
            zu analysieren oder vorherzusagen.
          </p>
          <br />
          <p className="font-bold">Allgemeine Daten</p>
          <br />
          <p>
            Unsere Website erhebt bei jedem Zugriff durch Sie oder ein
            automatisiertes System eine Reihe von allgemeinen Daten und
            Informationen. Diese Informationen und Daten werden in den
            Server-Logfiles gespeichert. Dies kann folgende Informationen
            umfassen:
          </p>
          <br />
          <p>Browser-System und vom Benutzer verwendete Versionen</p>
          <br />
          <p>das vom Benutzer verwendete Betriebssystem</p>
          <br />
          <p>
            die Website, von der aus der Benutzer auf unsere Website gelangt ist
          </p>
          <br />
          <p>die vom Benutzer auf unserer Website aufgerufenen Unterseiten</p>
          <br />
          <p>Datum und Uhrzeit des Zugriffs auf unsere jeweilige Website</p>
          <br />
          <p>IP-Adresse</p>
          <br />
          <p>
            Internetdienstanbieter, über den der Nutzer die Webseiten aufruft
          </p>
          <br />
          <p>
            Daten und Informationen für Sicherheitszwecke im Falle von Angriffen
            auf unser IT-System
          </p>
          <br />
          <p>
            Wir ziehen aus diesen Daten keine Rückschlüsse auf die betroffene
            Person. Die Informationen werden ausschließlich für den Betrieb der
            Website, deren fortlaufende Funktionalität und Optimierung
            verwendet. Im Falle illegaler Aktivitäten können diese Informationen
            den Ermittlungsbehörden zur Verfügung gestellt werden. Letztlich
            helfen uns diese Informationen, den Datenschutz kontinuierlich zu
            gewährleisten und zu verbessern.
          </p>
          <br />
          <p>
            Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f) DSGVO.
            Die Verarbeitung dient unserem berechtigten Interesse am
            ordnungsgemäßen Betrieb unserer Website.
          </p>
          <br />
          <p className="font-bold">Cookies</p>
          <br />
          <p>
            Unsere Website verwendet teilweise Cookies. Dies sind kleine
            Textdateien, die auf Ihrem Computer gespeichert werden und die Ihr
            Browser speichert. Cookies schaden Ihrem Computer nicht und
            enthalten keine Viren. Cookies werden verwendet, um unsere Website
            benutzerfreundlicher, effektiver und sicherer zu machen. Einige
            Cookies enthalten eine sogenannte Cookie-ID. Eine Cookie-ID ist ein
            eindeutiger Identifikator des jeweiligen Cookies. Der Bezeichner
            besteht aus einer Zeichenkette, mit der Webseiten und Server dem
            spezifischen Internetbrowser zugeordnet werden können, in dem das
            Cookie gespeichert wurde. Dadurch können die besuchten Webseiten und
            Server den einzelnen Browser der betroffenen Person von anderen
            Internetbrowsern, die andere Cookies enthalten, unterscheiden. Der
            jeweilige Browser kann somit anhand der eindeutigen Cookie-ID
            erkannt und identifiziert werden.
          </p>
          <br />
          <p>
            Die meisten der von uns verwendeten Cookies sind sogenannte
            "Session-Cookies". Sie werden am Ende Ihres Besuchs automatisch
            gelöscht, während andere Cookies auf Ihrem Endgerät gespeichert
            bleiben, bis Sie diese löschen. Die Cookies ermöglichen es uns,
            Ihren Browser beim nächsten Besuch wiederzuerkennen.
          </p>
          <br />
          <p>
            Natürlich können Sie unsere Website auch ohne den Einsatz von
            Cookies nutzen. Sie können Ihren Browser so einstellen, dass Sie
            über die Installation von Cookies informiert werden und diese nur im
            Einzelfall erlauben. Sie können auch das Akzeptieren von Cookies für
            bestimmte Fälle oder generell ausschließen. Es ist auch möglich, die
            automatische Löschung von Cookies beim Schließen des Browsers
            auszuwählen.
          </p>
          <br />
          <p>
            Die hierfür erforderlichen Einstellungen in dem von Ihnen
            verwendeten Internetbrowser finden Sie in der Hilfefunktion Ihres
            Browsers oder in der Dokumentation des von Ihnen verwendeten
            Browsers.
          </p>
          <br />
          <p>
            Wir möchten darauf hinweisen, dass die Ablehnung oder das Anzeigen
            von Cookies die Funktionalität unserer Website beeinträchtigen kann.
          </p>
          <br />
          <p>
            Die rechtliche Grundlage für die Verwendung von Cookies ergibt sich
            aus Art. 6 Abs. 1 lit. f) DSGVO. Wir haben ein berechtigtes
            Interesse an der Verwendung von Cookies, um eine technisch
            fehlerfreie und optimierte Website bereitzustellen.
          </p>
          <br />
          <p className="font-bold">Kontaktformular</p>
          <br />
          <p>
            Wenn Sie uns Anfragen über das Kontaktformular senden, werden Ihre
            Angaben aus dem Formular, einschließlich der dort von Ihnen
            angegebenen Kontaktdaten, von uns zur Bearbeitung der Anfrage und
            für den Fall von Anschlussfragen gespeichert. Die Daten umfassen
            Ihren Nachnamen, Vornamen und Ihre E-Mail-Adresse sowie das Land,
            aus dem Sie uns schreiben. Optional können Sie auch weitere
            Informationen wie Ihre Telefonnummer angeben. Wir benötigen diese
            Informationen, um Ihnen genauere Informationen zu Ihrer Anfrage zur
            Verfügung zu stellen. Die Grundlage für die Verarbeitung dieser
            Daten ist Art. 6 Abs. 1 lit. b) DSGVO. Wir geben diese Daten nicht
            ohne Ihre Einwilligung weiter. Bei der Registrierung werden außerdem
            die IP-Adresse, die dem Internetdienstanbieter der betroffenen
            Person zugewiesen wurde, sowie das Datum und die Uhrzeit der
            Registrierung gespeichert. Nachdem Ihre Anfrage bearbeitet wurde,
            werden Ihre Daten gelöscht, es sei denn, Sie haben eine Einwilligung
            zur weiteren Nutzung erteilt oder gesetzliche oder steuerliche
            Vorschriften verhindern dies.
          </p>
          <br />
          <p className="font-bold">Unser Newsletter</p>
          <br />
          <p>
            Sie haben die Möglichkeit, den Newsletter zu abonnieren. Der
            Newsletter wird Sie über interessante Produkte und Dienstleistungen
            informieren. Sie können den Newsletter jederzeit abbestellen. Der
            entsprechende Link wird Ihnen in jedem einzelnen Newsletter
            mitgeteilt. Die rechtliche Grundlage für die Verwendung
            personenbezogener Daten ergibt sich aus Art. 6 Abs. 1 lit. f) DSGVO.
            Sie können den Newsletter jederzeit abbestellen. Sobald Sie sich
            abgemeldet haben, werden Ihre Daten im Zusammenhang mit dem
            Newsletter sofort gelöscht. Unser Newsletter wird über die Firma
            rapidmail GmbH, Augustinerplatz 2, 79098 Freiburg i.Br., Tel. 0800 -
            444 6 777, Fax +49 761 582 00 66, E-Mail support@rapidmail.de,
            verschickt. Weitere Informationen zum Datenschutz bei CreateSend
            finden Sie unter folgendem Link:
          </p>
          <br />
          <p className="font-bold">Google Analytics</p>
          <br />
          <p>
            Unsere Website verwendet Funktionen des Webanalysedienstes Google
            Analytics. Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f)
            DSGVO. Anbieter ist die Google Inc. 1600 Amphitheatre Parkway
            Mountain View, CA 94043, USA. Im Rahmen von Google Analytics werden
            auch Cookies verwendet. Dabei handelt es sich um Textdateien, die
            auf Ihrem Computer gespeichert werden und die eine Analyse der
            Benutzung der Website durch Sie ermöglichen. Die durch das Cookie
            erzeugten Informationen über Ihre Benutzung dieser Website werden in
            der Regel an einen Server von Google in den USA übertragen und dort
            gespeichert. Dazu gehören der Browsertyp / die Version, das
            verwendete Betriebssystem, die zuvor besuchte Seite, die IP-Adresse
            und der Zeitpunkt der Serveranfrage.
          </p>
          <br />
          <p>
            Die Verarbeitung der Daten im Zusammenhang mit Google Analytics
            erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f) DSGVO. Als Betreiber
            unserer Website haben wir ein Interesse daran, das Nutzerverhalten
            zu analysieren, um sowohl unser Angebot auf unserer Website als auch
            unsere Werbung zu optimieren. Durch die Nutzung des Internets sind
            Sie sich der Durchführung solcher Analysen bewusst. Die zur
            Durchführung der Analyse und Optimierung erhobenen Daten sind für
            den Nutzer nicht von überwiegendem Wert.
          </p>
          <br />
          <p>
            Bei aktivierter IP-Anonymisierung wird Ihre IP-Adresse von Google
            jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in
            anderen Vertragsstaaten des Abkommens über den Europäischen
            Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die
            vollständige IP-Adresse an einen Server von Google in den USA
            übertragen und dort gekürzt. Im Auftrag des Betreibers dieser
            Website wird Google diese Informationen verwenden, um Ihre Nutzung
            der Website auszuwerten, um Berichte über die Websiteaktivitäten
            zusammenzustellen und um weitere mit der Websitenutzung und der
            Internetnutzung verbundene Dienstleistungen gegenüber dem
            Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics
            von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen
            Daten von Google zusammengeführt.
          </p>
          <br />
          <p>
            Sie können die Speicherung der Cookies durch eine entsprechende
            Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch
            darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
            Funktionen dieser Website vollumfänglich nutzen können. Sie können
            darüber hinaus die Erfassung der durch das Cookie erzeugten und auf
            Ihre Nutzung der Website bezogenen Daten (einschließlich Ihrer
            IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch
            Google verhindern, indem sie das unter folgendem Link verfügbare
            Browser-Add-On herunterladen und installieren:
          </p>
          <br />
          <p>
            Alternativ zum Browser-Add-On gibt es eine weitere Möglichkeit die
            Erfassung von Daten durch Google Analytics zu verhindern. Dies ist
            besonders interessant für Nutzer mobiler Geräte. Bitte klicken Sie
            auf diesen Link: Google Analytics deaktivieren
          </p>
          <br />
          <p>
            Dadurch wird ein Opt-out-Cookie installiert, das die Erfassung der
            Daten auf dieser Website verhindert. Die Funktion bleibt bestehen,
            bis das Cookie gelöscht wird. Wenn das Cookie gelöscht wurde,
            klicken Sie einfach erneut auf den Link. Weitere Informationen zu
            den Nutzungsbedingungen und zum Datenschutz finden Sie auf den
            folgenden Seiten.
          </p>
          <br />
          <p>http://google.com/analytics/terms/de.html</p>
          <br />
          <p>http://www.google.de/intl/de/policies/</p>
          <br />
          <p>
            Abschließend möchten wir darauf hinweisen, dass der Code
            "anonymizeIP" zu Google Analytics auf unserer Website hinzugefügt
            wurde, um eine anonymisierte Erfassung von IP-Adressen zu
            gewährleisten (sogenanntes IP-Masking).
          </p>
          <br />
          <p className="font-bold">YouTube</p>
          <br />
          <p>
            Wir verwenden Plugins der von Google betriebenen YouTube-Seite.
            Betreiber der Seiten ist YouTube, LLC, 901 Cherry Ave. San Bruno, CA
            94066, USA. Wenn Sie eine unserer mit einem YouTube-Plugin
            ausgestatteten Seiten besuchen, wird eine Verbindung zu den
            YouTube-Servern hergestellt. Dem YouTube-Server wird mitgeteilt,
            welche unserer Seiten Sie besucht haben. Wenn Sie in Ihrem
            YouTube-Konto eingeloggt sind, ermöglichen Sie YouTube, Ihr
            Verhalten direkt Ihrem persönlichen Profil zuzuordnen. Sie können
            dies verhindern, indem Sie sich aus Ihrem YouTube-Konto ausloggen.
          </p>
          <br />
          <p>
            Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der
            Datenschutzerklärung von YouTube unter:
            href="http://www.google.de/intl/de/policies/privacy"
          </p>
          <br />
          <p className="font-bold">Google Maps</p>
          <br />
          <p>
            Wir verwenden auf unserer Website den Kartendienst Google Maps.
            Anbieter ist Google Inc, 1600 Amphitheatre Parkway, Mountain View,
            CA 94043, USA.
          </p>
          <br />
          <p>
            Um die Funktionen von Google Maps zu nutzen, ist es notwendig, Ihre
            IP-Adresse zu speichern. Diese Informationen werden in der Regel an
            einen Server von Google in den USA übertragen und dort gespeichert.
            Der Anbieter dieser Seite hat keinen Einfluss auf diese
            Datenübertragung.
          </p>
          <br />
          <p>
            Die Grundlage für die Verwendung von Google Maps ist Art. 6 Abs. 1
            lit. f DSGVO. Als Unternehmen haben wir ein Interesse daran, dass
            unser Standort leicht zu finden ist.
          </p>
          <br />
          <p>
            Weitere Informationen zur Datenverarbeitung bei der Nutzung von
            Google Maps finden Sie in der Datenschutzerklärung von Google unter
            http://www.google.de/intl/de/policies/privacy/
          </p>
          <br />
          <p className="font-bold">Ihre Rechte</p>
          <p>
            Auf Anfrage erhalten Sie Auskunft über die bei uns gespeicherten
            personenbezogenen Daten. Die Bereitstellung der Auskunft ist für Sie
            kostenlos.
          </p>
          <br />
          <p>
            Ihr Auskunftsrecht umfasst die Mitteilung der Verarbeitungszwecke,
            der Kategorien personenbezogener Daten und der Empfänger oder
            Kategorien von Empfängern. Soweit möglich, werde ich Sie über die
            geplante Speicherdauer oder die Kriterien für die Bestimmung dieser
            Dauer informieren. Dies umfasst das Recht auf Erhalt einer
            kostenlosen Kopie der erhobenen Daten in einem strukturierten,
            gängigen und maschinenlesbaren Format, wobei die Bereitstellung der
            Kopie die Rechte und Freiheiten anderer nicht beeinträchtigen darf.
            Dies schließt Ihr Recht auf eine direkte Übertragung der Daten
            (Recht auf Datenübertragbarkeit) an ein anderes Unternehmen ein,
            sofern dies technisch möglich und rechtlich zulässig ist.
          </p>
          <br />
          <p>
            Darüber hinaus haben Sie das Recht, die Berichtigung Ihrer Daten zu
            verlangen. Dies umfasst das Recht auf Vervollständigung
            (Vervollständigung des Datensatzes selbst; Vervollständigung durch
            eine ergänzende Erklärung) unvollständiger personenbezogener Daten
            unter Berücksichtigung der Zwecke der Verarbeitung. Ist eine
            Berichtigung erforderlich, werden wir auf Ihren Wunsch alle
            Empfänger von der Berichtigung in Kenntnis setzen.
          </p>
          <br />
          <p>
            Sie haben ferner das Recht, die Löschung Ihrer Daten zu verlangen.
            Die Löschung erfolgt unverzüglich auf Ihren Wunsch. Dies gilt nicht
            für Daten, die aufgrund gesetzlicher Vorschriften gespeichert werden
            müssen oder die noch zur Abwicklung des Auftrags benötigt werden.
            Ihre Daten werden gelöscht, wenn der Zweck, für den sie erhoben
            wurden, nicht mehr gegeben ist oder am Ende einer gesetzlichen
            Aufbewahrungsfrist. Das Recht auf Löschung bestimmt, dass wir auch
            Dritte auf Ihren Wunsch hin zur Löschung der Daten veranlassen. Für
            diesen Zweck wird der Dritte über Ihren Namen (zum Zwecke der
            Zuordnung) und den jeweiligen Löschungswunsch aller Links, Kopien
            und Replikationen informiert.
          </p>
          <br />
          <p>
            Sie haben auch das Recht, Ihre bei uns gespeicherten
            personenbezogenen Daten sperren zu lassen. Bei der Sperrung werden
            Ihre gespeicherten personenbezogenen Daten gekennzeichnet, um deren
            weitere Verarbeitung und Nutzung einzuschränken. Wenn eine Löschung
            Ihrer Daten aufgrund gesetzlicher, behördlicher oder vertraglicher
            Aufbewahrungsfristen nicht möglich ist, werden wir Ihre Daten
            ebenfalls sperren und Sie darüber informieren. Bestreiten Sie die
            Richtigkeit Ihrer Daten, werden wir diese ebenfalls bis zur
            abschließenden Klärung der Richtigkeit sperren. Sollte Grund zur
            Annahme bestehen, dass Ihre schutzwürdigen Interessen durch die
            Löschung beeinträchtigt werden, so werden wir die Daten statt der
            Löschung ebenfalls sperren.
          </p>
          <br />
          <p>
            Es gibt auch ein Recht auf Einschränkung der Verarbeitung. Dies
            gilt, wenn die Richtigkeit der bei uns gespeicherten Daten in Frage
            steht.
          </p>
          <br />
          <p>
            Sie haben ebenfalls das Recht, der Verarbeitung zu widersprechen.
            Daneben haben Sie das Recht, eine Beschwerde bei der
            Aufsichtsbehörde einzulegen. In Bayern ist dies das Bayerische
            Landesamt für Datenschutzaufsicht, Promenade 27, 91522 Ansbach,
            Telefon 0981 531300, E-Mail poststelle@lda.bayern.de. Die
            Bundesdatenschutzbehörde mit weiteren Adressen finden Sie unter
            folgendem Link: https://www.bfdi.bund.de/DE/Home/home_node.html
          </p>
          <br />
          <p>
            Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte. Unsere
            Kontaktdaten finden Sie am Ende dieser Erklärung.
          </p>
          <br />
          <p>Änderungen unserer Datenschutzbestimmungen</p>
          <br />
          <p>
            Wir behalten uns das Recht vor, diese Datenschutzerklärung von Zeit
            zu Zeit zu ändern, um sicherzustellen, dass sie stets den aktuellen
            rechtlichen Anforderungen entspricht oder um Änderungen unserer
            Dienstleistungen in der Datenschutzerklärung umzusetzen. Dies gilt
            beispielsweise bei der Einführung neuer Services. Die neue
            Datenschutzerklärung wird dann für einen neuen Besuch gelten.
          </p>
          <br />
          <p>
            Wir sind der Verantwortliche im Sinne der
            Datenschutz-Grundverordnung:
          </p>
          <br />
          <p>Dr. Wilfried Müller GmbH</p>
          <br />
          <p>Lechstraße 13 - 15</p>
          <br />
          <p>86931 Prittriching</p>
          <br />
          <p>+49 8206 / 96 240</p>
          <br />
          <p>+49 8206 / 96 24 29</p>
          <br />
          <p>info@med-geraete.de</p>
          <br />
          <p>www.drwmuellergmbh.de</p>
          <br />
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
