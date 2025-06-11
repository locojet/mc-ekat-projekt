<template>
  <footer class="bg-secondary2 text-white py-8 px-4 w-full">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-around text-start">

      <!-- Kontakt -->
      <div class="mb-6 pl-4 w-full md:w-1/3">
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

            <p>
              {{ $t('footer.kontakt.email') }}: 
              <a href="mailto:info@mcekat.de" class="underline">info@mcekat.de</a><br>
              {{ $t('footer.kontakt.web') }}: 
              <a href="http://www.mcekat.de" target="_blank" rel="noopener noreferrer" class="underline">www.mcekat.de</a>
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
          <div v-if="activeSection === 'impressum'" class="mt-2" v-html="$t('footer.impressum.content')"></div>
        </transition>
      </div>

      <!-- Datenschutz -->
      <div class="mb-6 pl-4 w-full md:w-1/3">
        <button @click="toggleSection('datenschutz')" class="font-bold w-full text-left md:text-center">
          {{ $t('footer.datenschutz.title') }}
        </button>
        <transition name="fade">
          <div v-if="activeSection === 'datenschutz'" class="mt-2" v-html="$t('footer.datenschutz.privacyPolicy')"></div>
        </transition>
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