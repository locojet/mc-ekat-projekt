<template>
  <footer class="bg-secondary2 text-white py-8 px-4 w-full">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-around text-start">

      <!-- Kontakt -->
      <div id="sec-4" class="mb-6 pl-4 w-full md:w-1/3">
        <button @click="toggleSection('kontakt')" class="font-bold w-full text-left md:text-center">
          {{ $t('footer.kontakt.title') }}
        </button>
        <transition name="fade">
          <div v-if="activeSection === 'kontakt'" class="mt-2">
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
        </transition>
      </div>

      <!-- Impressum -->
      <div class="mb-6 pl-4 w-full md:w-1/3">
        <button @click="toggleSection('impressum')" class="font-bold w-full text-left md:text-center">
          {{ $t('footer.impressum.title') }}
        </button>
        <transition name="fade">
          <div v-if="activeSection === 'impressum'" class="mt-2 prose text-white prose-a:text-white prose-a:underline" v-html="$t('footer.impressum.content')"></div>
        </transition>
      </div>

      <!-- Datenschutz -->
      <div class="mb-6 pl-4 w-full md:w-1/3">
        <button @click="toggleSection('datenschutz')" class="font-bold w-full text-left md:text-center">
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
    },
    handleHashChange() {
      if (window.location.hash === '#sec-4') {
        this.activeSection = 'kontakt'
      }
    }
  },
  mounted() {
    // Verificar hash inicial
    this.handleHashChange()
    
    // Escuchar cambios de hash
    window.addEventListener('hashchange', this.handleHashChange)
  },
  beforeDestroy() {
    window.removeEventListener('hashchange', this.handleHashChange)
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
}
button:hover {
  color: #cbd5e0;
}

.prose a:hover {
  color: #cbd5e0;
  text-decoration-thickness: 2px;
}
</style>