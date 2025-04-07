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
            <p>
              Verantwortliche Stelle:<br>
              m-c-EKAT Verschleißschutz & Reparatur GmbH<br>
              Christian Ekat<br>
              Heidmühlenweg 48a, D-235336 Elmshorn<br><br>
              Sicherheit und Schutz personenbezogener Daten:<br>
              Wir behandeln Ihre Daten streng vertraulich und entsprechend der DSGVO und BDSG. Datenübertragungen im Internet können jedoch Sicherheitslücken aufweisen.<br><br>
              Rechtmäßigkeit der Verarbeitung:<br>
              Die Datenverarbeitung erfolgt nur auf Basis gesetzlicher Erlaubnis (Art. 6 Abs. 1 lit. a–f DSGVO).<br><br>
              Widerruf Ihrer Einwilligung:<br>
              Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Der Widerruf berührt nicht die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung.<br><br>
              Beschwerderecht bei der Aufsichtsbehörde:<br>
              Zuständige Datenschutzbehörde siehe: <a href="https://www.bfdi.bund.de" target="_blank" class="underline">bfdi.bund.de</a><br><br>
              Auskunft, Berichtigung, Sperrung, Löschung:<br>
              Sie haben das Recht auf unentgeltliche Auskunft über Ihre gespeicherten Daten sowie deren Löschung oder Korrektur.<br><br>
              Cookies:<br>
              Diese Website verwendet Cookies zur Verbesserung der Nutzerfreundlichkeit. Sie können Cookies im Browser deaktivieren.<br><br>
              Widerspruch Werbe-Mails:<br>
              Der Nutzung veröffentlichter Kontaktdaten zur unverlangten Werbung wird widersprochen.
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
