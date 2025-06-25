<template>
  <footer class="bg-secondary2 text-white py-8 px-4 w-full">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-around text-start">

      <!-- Kontakt (siempre visible) -->
      <div id="sec-4" class="mb-6 pl-4 w-full md:w-1/3">
        <h3 class="font-bold w-full text-left md:text-center mb-2">
          {{ $t('footer.kontakt.title') }}
        </h3>
        <div class="mt-2">
          <p>
            <strong>{{ $t('footer.kontakt.company') }}</strong><br>
            {{ $t('footer.kontakt.address1') }}<br>
            {{ $t('footer.kontakt.phone1') }}<br>
            {{ $t('footer.kontakt.fax1') }}<br>
            {{ $t('footer.kontakt.mobile1') }}<br><br>

            {{ $t('footer.kontakt.address2') }}<br>
            {{ $t('footer.kontakt.phone2') }}<br>
            {{ $t('footer.kontakt.fax2') }}<br>
            {{ $t('footer.kontakt.mobile2') }}
          </p>

          <p>
            {{ $t('footer.kontakt.email') }}: 
            <a href="mailto:info@mcekat.de" class="underline">info@mcekat.de</a><br>
            {{ $t('footer.kontakt.web') }}: 
            <a href="http://www.mcekat.de" target="_blank" rel="noopener noreferrer" class="underline">www.mcekat.de</a>
          </p>
        </div>
      </div>

      <!-- Impressum (con despliegue simple) -->
      <div class="mb-6 pl-4 w-full md:w-1/3">
        <button @click="toggleImpressum" class="font-bold w-full text-left md:text-center">
          {{ $t('footer.impressum.title') }}
          <span class="float-right md:float-none">{{ impressumVisible ? '−' : '+' }}</span>
        </button>
        <div v-show="impressumVisible" class="mt-2 impressum-content">
          <div v-html="$t('footer.impressum.content')"></div>
        </div>
      </div>

      <!-- Datenschutz (con despliegue simple) -->
      <div class="mb-6 pl-4 w-full md:w-1/3">
        <button @click="toggleDatenschutz" class="font-bold w-full text-left md:text-center">
          {{ $t('footer.datenschutz.title') }}
          <span class="float-right md:float-none">{{ datenschutzVisible ? '−' : '+' }}</span>
        </button>
        <div v-show="datenschutzVisible" class="mt-2 datenschutz-content">
          <div v-html="$t('footer.datenschutz.privacyPolicy')"></div>
        </div>
      </div>

    </div>

    <div class="mt-4">
      <p class="text-center">
        © {{ new Date().getFullYear() }} m-c-EKAT Verschleißschutz & Reparatur GmbH. {{ $t('footer.rights_reserved') }}
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      impressumVisible: false,
      datenschutzVisible: false
    };
  },
  methods: {
    toggleImpressum() {
      this.impressumVisible = !this.impressumVisible;
      // Cierra Datenschutz si Impressum se abre
      if (this.impressumVisible) {
        this.datenschutzVisible = false;
      }
    },
    toggleDatenschutz() {
      this.datenschutzVisible = !this.datenschutzVisible;
      // Cierra Impressum si Datenschutz se abre
      if (this.datenschutzVisible) {
        this.impressumVisible = false;
      }
    }
  },
  mounted() {
    // Scroll a contacto si hay hash en la URL
    if (window.location.hash === '#sec-4') {
      const element = document.getElementById('sec-4');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
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
  width: 100%;
  position: relative;
}
footer button:hover {
  color: #a0aec0;
}
a {
  color: #ffffff;
}
a.underline:hover {
  text-decoration: underline;
}
.impressum-content,
.datenschutz-content {
  transition: all 0.3s ease;
}
@media (min-width: 768px) {
  footer button {
    text-align: center;
  }
}
</style>