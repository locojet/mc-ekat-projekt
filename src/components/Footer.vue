<template>
  <footer class="bg-secondary2 text-white py-10 px-4">
    <div class="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
      <!-- Kontakt -->
      <div>
        <button @click="toggleSection('kontakt')" class="footer-title">Kontakt</button>
        <div v-show="activeSection === 'kontakt'" class="footer-content">
          <p><strong>m-c-EKAT Verschleißschutz & Reparatur GmbH</strong><br>
            Heidmühlenweg 48a, D-25336 Elmshorn<br>
            Telefon: +49 (0) 4121 57 92 54<br>
            Fax: +49 (0) 4121 57 92 56<br>
            Mobil: +49 (0) 173 600 32 64<br><br>
            Kaltenhöfer Weg 1c, D-23999 Insel Poel<br>
            Telefon: +49 (0) 38425 425 07<br>
            Fax: +49 (0) 38425 425 08<br>
            Mobil: +49 (0) 173 237 15 91<br><br>
            Email: <a href="mailto:info@mcekat.de" class="underline">info@mcekat.de</a><br>
            Web: <a href="http://www.mcekat.de" target="_blank" class="underline">www.mcekat.de</a>
          </p>
        </div>
      </div>

      <!-- Impressum -->
      <div>
        <button @click="toggleSection('impressum')" class="footer-title">Impressum</button>
        <div v-show="activeSection === 'impressum'" class="footer-content">
          <p class="text-sm leading-relaxed">
            Angaben gemäß § 5 TMG:<br>
            m-c-EKAT GmbH, Heidmühlenweg 48a, D-25336 Elmshorn<br>
            Kaltenhöfer Weg 1c, D-23999 Kirchdorf/Poel<br><br>
            Registergericht: Amtsgericht Pinneberg – HRB 2315 EL<br>
            USt-IdNr.: DE 230 119 681<br><br>
            Geschäftsführer: Mathias & Christian Ekat<br>
            Verantwortlich i.S.d. § 55 Abs. 2 RStV: Christian Ekat<br>
            <a href="http://ec.europa.eu/consumers/odr" target="_blank" class="underline">EU-Streitschlichtung</a><br><br>
            Weitere rechtliche Informationen im vollständigen Impressum.
          </p>
        </div>
      </div>

      <!-- Datenschutz -->
      <div>
        <button @click="toggleSection('datenschutz')" class="footer-title">Datenschutz</button>
        <div v-show="activeSection === 'datenschutz'" class="footer-content">
          <p class="text-sm leading-relaxed">
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Details zur Verarbeitung, Widerruf, Cookies & Server-Logs finden Sie in unserer vollständigen Datenschutzerklärung.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-10 text-center text-sm border-t border-white/20 pt-6">
      © {{ new Date().getFullYear() }} m-c-EKAT Verschleißschutz & Reparatur GmbH. Alle Rechte vorbehalten.
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
    }
  }
};
</script>

<style scoped>
.footer-title {
  @apply font-bold text-lg text-white mb-2 cursor-pointer hover:text-gray-300;
}
.footer-content {
  @apply text-start text-white text-sm mt-2 transition-all duration-300 ease-in-out;
}
</style>
