<template>
  <footer id="footer" class="bg-[#2c3e50] w-full py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Versión Desktop (hidden on mobile) -->
      <div class="hidden lg:grid lg:grid-cols-3 gap-8">
        <!-- Contacto -->
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">{{ $t('contacto.kontakt.title') }}</h2>
          <div class="text-gray-200 text-sm space-y-2">
            <p><strong class="text-white">{{ $t('contacto.kontakt.company') }}</strong></p>
            <p>{{ $t('contacto.kontakt.address1') }}</p>
            <p><strong>{{ $t('contacto.kontakt.phone1_label') }}:</strong> <a href="tel:+494121579254" class="text-white underline">{{ $t('contacto.kontakt.phone1') }}</a></p>
            <p><strong>{{ $t('contacto.kontakt.mobile1_label') }}:</strong> <a href="tel:+491736003264" class="text-white underline">{{ $t('contacto.kontakt.mobile1') }}</a></p>
            <br>
            <p>{{ $t('contacto.kontakt.address2') }}</p>
            <p><strong>{{ $t('contacto.kontakt.phone2_label') }}:</strong> <a href="tel:+493842542507" class="text-white underline">{{ $t('contacto.kontakt.phone2') }}</a></p>
            <p><strong>{{ $t('contacto.kontakt.mobile2_label') }}:</strong> <a href="tel:+491732371591" class="text-white underline">{{ $t('contacto.kontakt.mobile2') }}</a></p>
            <div class="mt-4">
              <p>{{ $t('contacto.kontakt.email') }}:
                <a href="mailto:info@mcekat.de" class="text-white underline">info@mcekat.de</a>
              </p>
              <p>
                {{ $t('contacto.kontakt.web') }}:
                <a href="https://www.mcekat.de" class="text-white underline" target="_blank">www.mcekat.de</a>
              </p>
              <p>
                {{ $t('contacto.kontakt.web_com') }}:
                <a href="https://www.mcekat.com" class="text-white underline" target="_blank">www.mcekat.com</a>
              </p>
            </div>
          </div>
        </div>

        <!-- Impressum Desktop -->
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">{{ $t('footer.impressum.title') }}</h2>
          <div class="text-gray-200 text-sm" v-html="$t('footer.impressum.content')"></div>
        </div>

        <!-- Datenschutz Desktop -->
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">{{ $t('footer.datenschutz.title') }}</h2>
          <div class="text-gray-200 text-sm" v-html="$t('footer.datenschutz.content')"></div>
        </div>
      </div>

      <!-- Versión Móvil (hidden on desktop) -->
      <div class="lg:hidden space-y-8">
        <!-- Contacto (siempre visible) -->
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">{{ $t('contacto.kontakt.title') }}</h2>
          <div class="text-gray-200 text-sm space-y-2">
            <p><strong class="text-white">{{ $t('contacto.kontakt.company') }}</strong></p>
            <p>{{ $t('contacto.kontakt.address1') }}</p>
            <p><a href="tel:+494121579254" class="text-white underline">{{ $t('contacto.kontakt.phone1') }}</a></p>
            <p><a href="tel:+491736003264" class="text-white underline">{{ $t('contacto.kontakt.mobile1') }}</a></p>
            <br>
            <p>{{ $t('contacto.kontakt.address2') }}</p>
            <p><a href="tel:+493842542507" class="text-white underline">{{ $t('contacto.kontakt.phone2') }}</a></p>
            <p><a href="tel:+491732371591" class="text-white underline">{{ $t('contacto.kontakt.mobile2') }}</a></p>
            <div class="mt-4">
              <p>{{ $t('contacto.kontakt.email') }}:
                <a href="mailto:info@mcekat.de" class="text-white underline">info@mcekat.de</a>
              </p>
              <p>
                {{ $t('contacto.kontakt.web') }}:
                <a href="https://www.mcekat.de" class="text-white underline" target="_blank">www.mcekat.de</a>
              </p>
              <p>
                {{ $t('contacto.kontakt.web_com') }}:
                <a href="http://mcekat.com/" class="text-white underline" target="_blank">www.mcekat.com</a>
              </p>
            </div>
          </div>
        </div>

        <!-- Impressum Accordion -->
        <div class="border-b border-gray-600 pb-4">
          <button 
            @click="toggleImpressum" 
            class="flex justify-between items-center w-full text-left focus:outline-none"
          >
            <h2 class="text-2xl font-bold text-white">{{ $t('footer.impressum.title') }}</h2>
            <svg 
              class="w-6 h-6 text-white transition-transform duration-200" 
              :class="{ 'transform rotate-180': isImpressumOpen }" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            class="text-gray-200 text-sm overflow-hidden transition-all duration-300 ease-in-out"
            :class="isImpressumOpen ? 'max-h-[1000px] mt-4' : 'max-h-0'"
          >
            <div v-html="$t('footer.impressum.content')"></div>
          </div>
        </div>

        <!-- Datenschutz Accordion -->
        <div class="border-b border-gray-600 pb-4">
          <button 
            @click="toggleDatenschutz" 
            class="flex justify-between items-center w-full text-left focus:outline-none"
          >
            <h2 class="text-2xl font-bold text-white">{{ $t('footer.datenschutz.title') }}</h2>
            <svg 
              class="w-6 h-6 text-white transition-transform duration-200" 
              :class="{ 'transform rotate-180': isDatenschutzOpen }" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            class="text-gray-200 text-sm overflow-hidden transition-all duration-300 ease-in-out"
            :class="isDatenschutzOpen ? 'max-h-[1000px] mt-4' : 'max-h-0'"
          >
            <div v-html="$t('footer.datenschutz.content')"></div>
          </div>
        </div>
      </div>

      <!-- Derechos reservados -->
      <div class="mt-12 pt-6 border-t border-gray-600">
        <p class="text-gray-400 text-sm text-center">
          © {{ new Date().getFullYear() }} {{ $t('footer.rights_reserved') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      isImpressumOpen: false,
      isDatenschutzOpen: false
    }
  },
  methods: {
    toggleImpressum() {
      this.isImpressumOpen = !this.isImpressumOpen
    },
    toggleDatenschutz() {
      this.isDatenschutzOpen = !this.isDatenschutzOpen
    }
  }
}
</script>

<style scoped>
#footer {
  font-family: 'Segoe UI', system-ui, sans-serif;
}

:deep(a) {
  color: #93c5fd;
  text-decoration: underline;
}

:deep(a:hover) {
  color: #bfdbfe;
}

:deep(strong) {
  color: white;
  font-weight: 600;
}

@media (max-width: 768px) {
  #footer {
    padding: 2rem 1rem;
  }
  
  /* Mejor espaciado para móviles */
  .space-y-8 > div {
    margin-bottom: 1.5rem;
  }
  
  /* Botones del acordeón más grandes para móviles */
  button[aria-expanded] {
    padding: 0.75rem 0;
  }
}
</style>