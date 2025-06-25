<template>
    <section class="bg-secondary2 text-white py-12 w-full">
      <div class="mx-auto max-w-7xl px-10 sm:px-4 text-start">
  
        <!-- Impressum -->
        <div class="mb-8">
          <button
            @click="toggleSection('impressum')"
            class="flex justify-between items-center w-full text-left font-bold text-xl mb-2"
          >
            <span>{{ $t('footer.impressum.title') }}</span>
            <span class="text-2xl">{{ activeSection === 'impressum' ? '−' : '+' }}</span>
          </button>
          <transition name="fade">
            <div
              v-if="activeSection === 'impressum'"
              class="text-start md:text-justify"
              v-html="$t('footer.impressum.content')"
            ></div>
          </transition>
        </div>
  
        <!-- Datenschutz -->
        <div class="mb-8">
          <button
            @click="toggleSection('datenschutz')"
            class="flex justify-between items-center w-full text-left font-bold text-xl mb-2"
          >
            <span>{{ $t('footer.datenschutz.title') }}</span>
            <span class="text-2xl">{{ activeSection === 'datenschutz' ? '−' : '+' }}</span>
          </button>
          <transition name="fade">
            <div
              v-if="activeSection === 'datenschutz'"
              class="text-start md:text-justify"
              v-html="$t('footer.datenschutz.privacyPolicy')"
            ></div>
          </transition>
        </div>
  
        <!-- Derechos reservados -->
        <p class="text-center mt-12 text-sm">
          © {{ new Date().getFullYear() }} {{ $t('footer.rights_reserved_short') }}
        </p>
  
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'LegalFooter',
    data() {
      return {
        activeSection: null
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
  button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem 0;
  }
  button:hover {
    color: #a0aec0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s ease;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  a {
    color: #ffffff;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>