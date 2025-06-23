<template>
  <footer class="bg-secondary2 text-white py-8 px-4 w-full">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-around text-start">

      <!-- Kontakt (siempre visible) -->
      <div id="contact-section" class="mb-6 pl-4 w-full md:w-1/3">
        <h3 class="font-bold w-full text-left md:text-center">
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

          <p class="mt-4">
            {{ $t('footer.kontakt.email') }}: 
            <a href="mailto:info@mcekat.de" class="underline hover:text-gray-300">info@mcekat.de</a><br>
            {{ $t('footer.kontakt.web') }}: 
            <a href="https://www.mcekat.de" target="_blank" rel="noopener noreferrer" class="underline hover:text-gray-300">www.mcekat.de</a>
          </p>
        </div>
      </div>

      <!-- Impressum (acordeón) -->
      <div class="mb-6 pl-4 w-full md:w-1/3">
        <button 
          @click="toggleSection('impressum')" 
          class="font-bold w-full text-left md:text-center"
          :aria-expanded="activeSection === 'impressum'"
        >
          {{ $t('footer.impressum.title') }}
        </button>
        <transition name="fade">
          <div v-if="activeSection === 'impressum'" class="mt-2 prose text-white prose-a:text-white prose-a:underline" v-html="$t('footer.impressum.content')"></div>
        </transition>
      </div>

      <!-- Datenschutz (acordeón) -->
      <div class="mb-6 pl-4 w-full md:w-1/3">
        <button 
          @click="toggleSection('datenschutz')" 
          class="font-bold w-full text-left md:text-center"
          :aria-expanded="activeSection === 'datenschutz'"
        >
          {{ $t('footer.datenschutz.title') }}
        </button>
        <transition name="fade">
          <div v-if="activeSection === 'datenschutz'" class="mt-2 prose text-white prose-a:text-white prose-a:underline" v-html="$t('footer.datenschutz.privacyPolicy')"></div>
        </transition>
      </div>
    </div>

    <div class="mt-8 pt-4 border-t border-gray-600">
      <p class="text-center text-sm">
        © {{ new Date().getFullYear() }} m-c-EKAT Verschleißschutz & Reparatur GmbH. {{ $t('footer.rights_reserved') }}
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      activeSection: null
    }
  },
  methods: {
    toggleSection(section) {
      this.activeSection = this.activeSection === section ? null : section
      // Actualizar URL sin recargar
      const newUrl = this.activeSection ? `${window.location.pathname}#${section}` : window.location.pathname
      window.history.replaceState({}, '', newUrl)
    },
    checkHash() {
      const hash = window.location.hash.substring(1)
      if (['impressum', 'datenschutz'].includes(hash)) {
        this.activeSection = hash
      }
    }
  },
  mounted() {
    this.checkHash()
    window.addEventListener('hashchange', this.checkHash)
  },
  beforeDestroy() {
    window.removeEventListener('hashchange', this.checkHash)
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button {
  transition: color 0.2s ease;
  outline: none;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  text-align: left;
}
button:hover {
  color: #cbd5e0;
}

.prose a:hover {
  color: #cbd5e0;
  text-decoration-thickness: 2px;
}

/* Estilo para la sección de contacto fija */
#contact-section {
  border-right: 1px solid rgba(255,255,255,0.1);
  padding-right: 1rem;
}
</style>