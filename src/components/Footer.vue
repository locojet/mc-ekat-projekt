<template>
  <footer class="bg-secondary2 text-white py-8 px-4 w-full">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-around text-start">

      <!-- Kontakt -->
      <div class="mb-6 pl-4 w-full md:w-1/3">
        <button @click="toggleSection('kontakt')" class="font-bold w-full text-left">
          Kontakt
        </button>
        <transition name="fade">
          <div v-show="activeSection === 'kontakt'" class="mt-2">
            <p><strong>m-c-EKAT Verschleißschutz & Reparatur GmbH</strong><br>
              Heidmühlenweg 48a, D-25336 Elmshorn<br>
              Telefon: +49 (0) 4121 57 92 54<br>
              Fax: +49 (0) 4121 57 92 56<br>
              Mobil: +49 (0) 173 600 32 64<br><br>

              Kaltenhöfer Weg 1c, D-23999 Insel Poel<br>
              Telefon: +49 (0) 38425 425 07<br>
              Fax: +49 (0) 38425 425 08<br>
              Mobil: +49 (0) 173 237 15 91</p>

            <p>Email: <a href="mailto:info@mcekat.de" class="underline">info@mcekat.de</a><br>
              Web: <a href="http://www.mcekat.de" target="_blank" class="underline">www.mcekat.de</a></p>
          </div>
        </transition>
      </div>

      <!-- Impressum -->
      <div class="mb-6 pl-4 w-full md:w-1/3">
        <button @click="toggleSection('impressum')" class="font-bold w-full text-left">
          Impressum
        </button>
        <transition name="fade">
          <div v-show="activeSection === 'impressum'" class="mt-2">
            <p>
              Angaben gemäß § 5 TMG:<br>
              m-c-EKAT Verschleißschutz & Reparatur GmbH<br>
              Heidmühlenweg 48a, D-25336 Elmshorn<br>
              Kaltenhöfer Weg 1c, D-23999 Kirchdorf/Poel<br><br>
              Registergericht: Amtsgericht Pinneberg<br>
              Handelsregister: HRB 2315 EL<br>
              Umsatzsteuer-Ident.Nr.: DE 230 119 681 (gemäß § 27 a Umsatzsteuergesetz)<br><br>
              Geschäftsführer/Vertreten durch:<br>
              Mathias Ekat, Christian Ekat<br><br>
              Internet: <a href="mailto:info@mcekat.de" class="underline">info@mcekat.de</a><br><br>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br>
              Christian Ekat, Kaltenhöfer Weg 1c, 23999 Insel Poel<br><br>
              Hinweis auf EU-Streitschlichtung:<br>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br>
              <a href="http://ec.europa.eu/consumers/odr" target="_blank" class="underline">http://ec.europa.eu/consumers/odr</a><br>
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <h3 class="font-bold mt-4">Haftungsausschluss (Disclaimer)</h3>
            <p><strong>Haftung für Inhalte:</strong><br>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.<br><br>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
            <p><strong>Haftung für Links:</strong><br>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.<br><br>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
            <p><strong>Urheberrecht:</strong><br>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.<br><br>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.<br><br>
              Alle verwendeten Bilder und Texte unter Copyright der Fa. m-c-EKAT Verschleißschutz & Reparatur GmbH, ITW DEVCON, GE Inspection, DNV GL, I.A.C.S., Lloyds Register, Bureau Veritas und der DGZFP.
            </p>
          </div>
        </transition>
      </div>

      <!-- Datenschutz -->
      <div class="mb-6 pl-4 w-full md:w-1/3">
        <button @click="toggleSection('datenschutz')" class="font-bold w-full text-left">
          Datenschutz
        </button>
        <transition name="fade">
          <div v-show="activeSection === 'datenschutz'" class="mt-2">
            <h3 class="font-bold">Datenschutzerklärung</h3>
            <p><strong>Verantwortliche Stelle:</strong><br>
              Die verantwortliche Stelle der Datenverarbeitung auf dieser Website ist:<br>
              m-c-EKAT Verschleißschutz & Reparatur GmbH<br>
              Christian Ekat<br>
              Heidmühlenweg 48a, D-235336 Elmshorn
            </p>

            <p><strong>Sicherheit und Schutz personenbezogener Daten:</strong><br>
              Die Wahrung und der Schutz der von Ihnen bereitgestellten Daten sowie deren Vertraulichkeit ist uns äußerst wichtig. Um dies zu gewährleisten wenden wir äußerste Sorgfalt und moderne Sicherheitsstandards an. Da wir ein privatrechtliches Unternehmen sind, unterliegen wir den aktuellen gesetzlichen Regelungen der europäischen Datenschutzgrundverordnung (DS-GVO) sowie denen des Bundesdatenschutzgesetzes (BDSG). Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <p><strong>Rechtmäßigkeit der Verarbeitung:</strong><br>
              Die Verarbeitung personenbezogener Daten ist nur rechtmäßig, wenn für die Verarbeitung eine Rechtsgrundlage besteht. Rechtsgrundlage für die Verarbeitung können gemäß Artikel 6 Abs. 1 lit. a – f DSGVO insbesondere sein:<br>
              a. Die betroffene Person hat ihre Einwilligung zur Verarbeitung der sie betreffenden personenbezogenen Daten für einen oder mehrere bestimmte Zwecke gegeben;<br>
              b. Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen;<br>
              c. Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt;<br>
              d. Die Verarbeitung ist erforderlich, um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person zu schützen;<br>
              e. Die Verarbeitung ist für die Wahrnehmung einer Aufgabe erforderlich, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;<br>
              f. Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, überwiegen, insbesondere dann, wenn es sich bei der betroffenen Person um ein Kind handelt.
            </p>

            <p><strong>Widerruf Ihrer Einwilligung zur Datenverarbeitung:</strong><br>
              Einige Vorgänge der Datenverarbeitung sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Bereits erteilte Einwilligungen können Sie jederzeit widerrufen, dafür genügt eine formlose Information per E-Mail. Die bisher erfolgte rechtmäßige Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <p><strong>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde:</strong><br>
              Als Betroffener haben Sie im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde. Die zuständige Aufsichtsbehörde bei datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich unser Unternehmenssitz befindet. Eine Liste der Datenschutzbeauftragten und deren Kontaktdaten sehen Sie unter: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" class="underline">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>
            </p>

            <p><strong>Recht auf Auskunft, Berichtigung, Sperrung, Löschung:</strong><br>
              Entsprechend der gesetzlichen Bestimmungen haben Sie jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, insbesondere Datenherkunft/-Empfänger sowie Zweck der Datenverarbeitung. Ferner haben Sie ein Recht auf Löschung, Berichtigung oder Sperrung Ihrer Daten. Dazu können Sie jederzeit über die im Impressum vorliegenden Kontaktdaten mit uns in Kontakt treten.
            </p>

            <p><strong>Widerspruchsrecht:</strong><br>
              Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DS-GVO erfolgt, Widerspruch einzulegen. Dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Der Verantwortliche verarbeitet die personenbezogenen Daten nicht mehr, es sei denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die die Interessen, Rechte und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
            </p>

            <p><strong>Server-Log-Files:</strong><br>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser automatisch an uns übermittelt. Dies sind:<br>
              • Browsertyp/ Browserversion<br>
              • Verwendetes Betriebssystem<br>
              • Referrer URL<br>
              • Hostname des zugreifenden Rechners<br>
              • Uhrzeit der Serveranfrage<br><br>
              Diese Daten sind keinen bestimmten Personen zuordnungsbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.
            </p>

            <p><strong>Cookies:</strong><br>
              Die Internetseite verwendet teilweise sogenannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Die meisten der von uns verwendeten Cookies sind sogenannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
            </p>

            <p><strong>Links:</strong><br>
              Diese Datenschutzerklärung erstreckt sich nicht auf die externen Links, welche auf unserer Internetseite angegeben werden. Die Einhaltung von Datenschutzbestimmungen anderer Anbieter können wir nicht beeinflussen. Bitte informieren Sie sich über die Datenschutzerklärungen auf den Websites der anderen Anbieter.
            </p>

            <p><strong>Widerspruch Werbe-Mails:</strong><br>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
         
          </div>
        </transition>
      </div>

    </div>

    <div class="mt-4">
      <p class="text-center">© {{ new Date().getFullYear() }} m-c-EKAT Verschleißschutz & Reparatur GmbH. Alle Rechte vorbehalten.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      activeSection: null,
    };
  },
  methods: {
    toggleSection(section) {
      this.activeSection = this.activeSection === section ? null : section;
    },
  },
};
</script>

<style scoped>
footer button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  text-align: left;
}
footer button:hover {
  color: #a0aec0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
a {
  color: #ffffff;
}
a.underline:hover {
  text-decoration: underline;
}
@media (min-width: 768px) {
  footer button {
    text-align: center;
  }
}
</style>
