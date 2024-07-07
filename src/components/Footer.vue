<template>
    <footer  class="bg-secondary2  text-white py-8 px-4 mb-20 text-start">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-around text-center">
        
        <!-- Kontakt -->
        <div class="mb-6 pl-4 ">
          <button @click="toggleSection('kontakt')" class="font-bold">
            Kontakt
          </button>
          <div  v-show="activeSection === 'kontakt'" class="mt-2">
            <footer class="footer-container">
  
  
  <div class="contact-details text-start">
    <p><strong>m-c-EKAT Verschleißschutz & Reparatur GmbH</strong><br>
    Heidmühlenweg 48a, D-25336 Elmshorn<br>
    Telefon: +49 (0) 4121 57 92 54<br>
    Fax: +49 (0) 4121 57 92 56<br>
    Mobil: +49 (0) 173 600 32 64<br><br>

    Kaltenhöfer Weg 1c, D-23999 Insel Poel<br>
    Telefon: +49 (0) 38425 425 07<br>
    Fax: +49 (0) 38425 425 08<br>
    Mobil: +49 (0) 173 237 15 91</p>
    
    <p>Email: <a href="mailto:info@mcekat.de">info@mcekat.de</a><br>
    Web: <a href="http://www.mcekat.de" target="_blank">www.mcekat.de</a></p>
  </div>
</footer>

          </div>
        </div>
        
        <!-- Impressum -->
        <div class="mb-6 pl-4">
          <button @click="toggleSection('impressum')" class="font-bold ">
            Impressum
        
          </button>
          <div v-show="activeSection === 'impressum'" class="mt-2 text-start">
            <p>
Angaben gemäß § 5 TMG: <br>
m-c-EKAT Verschleißschutz & Reparatur GmbH <br>
Heidmühlenweg 48a, D-25336 Elmshorn <br>
Kaltenhoefer Weg 1c, D-23999 Kirchdorf/Poel <br><br>
Registergericht: Amtsgericht Pinneberg <br>
Handelsregister: HRB 2315 EL <br>
Umsatzsteuer-Ident.Nr.: DE 230 119 681 <br>
(gemäß § 27 a Umsatzsteuergesetz:) <br><br>
Geschäftsführer/Vertreten durch: <br>
Mathias Ekat, Christian Ekat <br><br>
Internet: info@mcekat.de <br><br>
Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: <br>
Christian Ekat, Kaltenhöfer Weg 1c, 23999 Insel Poel <br><br>
Hinweis auf EU-Streitschlichtung <br>
Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <br>
http://ec.europa.eu/consumers/odr <br>
Unsere E-Mail-Adresse finden Sie oben im Impressum. <br><br>
Haftungsausschluss (Disclaimer) <br>
Haftung für Inhalte <br>
Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. <br>
Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen. <br><br>
Haftung für Links <br>
Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. <br>
Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen. <br><br>
Urheberrecht <br>
Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. <br>
Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>

          </div>
        </div>
  
        <!-- Datenschutz -->
        <div class="mb-6 pl-4">
          <button @click="toggleSection('datenschutz')" class="font-bold">
            Datenschutz
          </button>
          <div v-show="activeSection === 'datenschutz'" class="mt-2 text-start">
            <p>Datenschutzerklärung. <br>
Verantwortliche Stelle <br>
Die verantwortliche Stelle der Datenverarbeitung auf dieser Website ist: <br>
m-c-EKAT Verschleißschutz & Reparatur GmbH <br>
Christian Ekat <br>
Heidmühlenweg 48a <br>
D-235336 Elmshorn <br><br>
Sicherheit und Schutz personenbezogener Daten <br>
Die Wahrung und der Schutz der von Ihnen bereitgestellten Daten sowie deren Vertraulichkeit ist uns äußerst wichtig. Um dies zu gewährleisten, wenden wir äußerste Sorgfalt und moderne Sicherheitsstandards an. Da wir ein privatrechtliches Unternehmen sind, unterliegen wir den aktuellen gesetzlichen Regelungen der europäischen Datenschutzgrundverordnung (DS-GVO) sowie denen des Bundesdatenschutzgesetzes (BDSG). <br>
Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. <br><br>
Rechtmäßigkeit der Verarbeitung <br>
Die Verarbeitung personenbezogener Daten ist nur rechtmäßig, wenn für die Verarbeitung eine Rechtsgrundlage besteht. Rechtsgrundlage für die Verarbeitung können gemäß Artikel 6 Abs. 1 lit. a – f DSGVO insbesondere sein: <br>
a. Die betroffene Person hat ihre Einwilligung zu der Verarbeitung der sie betreffenden personenbezogenen Daten für einen oder mehrere bestimmte Zwecke gegeben; <br>
b. die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen; <br>
c. die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt; <br>
d. die Verarbeitung ist erforderlich, um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person zu schützen; <br>
e. die Verarbeitung ist für die Wahrnehmung einer Aufgabe erforderlich, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde; <br>
f. die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, überwiegen, insbesondere dann, wenn es sich bei der betroffenen Person um ein Kind handelt. <br><br>
Widerruf Ihrer Einwilligung zur Datenverarbeitung <br>
Einige Vorgänge der Datenverarbeitung sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Bereits erteilte Einwilligungen können Sie jederzeit widerrufen, dafür genügt eine formlose Information per E-Mail. Die bisher erfolgte rechtmäßige Datenverarbeitung bleibt vom Widerruf unberührt. <br><br>
Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde <br>
Als Betroffener haben Sie im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde. Die zuständige Aufsichtsbehörde bei datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich unser Unternehmenssitz befindet. Eine Liste der Datenschutzbeauftragten und deren Kontaktdaten finden Sie unter: https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html. <br><br>
Recht auf Auskunft, Berichtigung, Sperrung, Löschung <br>
Entsprechend der gesetzlichen Bestimmungen haben Sie jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, insbesondere Datenherkunft/-Empfänger sowie Zweck der Datenverarbeitung. Ferner haben Sie ein Recht auf Löschung, Berichtigung oder Sperrung Ihrer Daten. Dazu können Sie jederzeit über die im Impressum vorliegenden Kontaktdaten mit uns in Kontakt treten. <br><br>
Widerspruchsrecht <br>
Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DS-GVO erfolgt, Widerspruch einzulegen. Dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Der Verantwortliche verarbeitet die personenbezogenen Daten nicht mehr, es sei denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die die Interessen, Rechte und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen. <br>
Sie können jederzeit von Ihrem Widerspruchsrecht Gebrauch machen, treten Sie dafür einfach mit uns in Kontakt. <br><br>
Server-Log-Files <br>
Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser automatisch an uns übermittelt. Diese sind: <br>
• Browsertyp/ Browserversion <br>
• Verwendetes Betriebssystem <br>
• Referrer URL <br>
• Hostname des zugreifenden Rechners <br>
• Uhrzeit der Serveranfrage <br>
Diese Daten sind keinen bestimmten Personen zuordnungsbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden. <br><br>
Cookies <br>
Die Internetseite verwendet teilweise sogenannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. <br>
Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen. <br>
Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein. <br><br>
Links <br>
Diese Datenschutzerklärung erstreckt sich nicht auf die externen Links, welche auf unserer Internetseite angegeben werden. Die Einhaltung von Datenschutzbestimmungen anderer Anbieter können wir nicht beeinflussen. Bitte informieren Sie sich über die Datenschutzerklärungen auf den Websites der anderen Anbieter. <br><br>
Widerspruch Werbe-Mails <br>
Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>

            <p>Verantwortliche Stelle der Datenverarbeitung auf dieser Website ist:</p>
            <p>m-c-EKAT Verschleißschutz & Reparatur GmbH</p>
            <p>Christian Ekat</p>
            <p>Heidmühlenweg 48a</p>
            <p>D-235336 Elmshorn</p>
          </div>
        </div>
  
      </div>
      
      <div class="mt-4 mr">
        <p class="text-center">© {{ new Date().getFullYear() }} m-c-EKAT Verschleißschutz & Reparatur GmbH. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
    data() {
      return {
        activeSection: null, // Kein Abschnitt ist standardmäßig aktiv
      };
    },
    methods: {
      toggleSection(section) {
        this.activeSection = this.activeSection === section ? null : section;
      }
    }
  };
  </script>
  
  <style scoped>
  p{
    max-width: 50%;
  }
  footer button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
    width: 100%;
    text-align: left;
  }
  footer button:hover {
    color: #a0aec0;
  }
  footer div {
    transition: all 0.3s ease;
    overflow: hidden;
  }
  #sec-4 {
    margin-bottom: 4rem;
  }
  .mr p {
    text-align: center;
   max-width: 100%;
  }
  @media (min-width: 768px) {
    footer button {
      text-align: center;
    }
    footer div {
      text-align: start;
    }

    #sec-4 {
    margin-bottom: 0rem;
  }
  }
  </style>
  