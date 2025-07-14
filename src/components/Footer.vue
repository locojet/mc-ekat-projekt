<template>
  <footer id="footer" class="bg-[#2c3e50] w-full py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Versión Desktop (horizontal) -->
      <div class="hidden lg:flex">
        <!-- Contacto (50% ancho) -->
        <div class="w-1/2 pr-8">
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

        <!-- Línea divisoria vertical -->
        <div class="w-px bg-gray-600 mx-4"></div>

        <!-- Sección derecha (50% ancho) -->
        <div class="w-1/2 pl-8 flex flex-col justify-between">
          <!-- Impressum -->
          <div class="mb-8">
            <button 
              @click="openPopup('impressum')"
              class="text-2xl font-bold text-white hover:underline focus:outline-none text-left"
            >
              {{ $t('footer.impressum.title') }}
            </button>
          </div>

          <!-- Línea horizontal solo en Desktop -->
          <div class="hidden lg:block h-px bg-gray-600 mb-8"></div>

          <!-- Datenschutz -->
          <div>
            <button 
              @click="openPopup('datenschutz')"
              class="text-2xl font-bold text-white hover:underline focus:outline-none text-left"
            >
              {{ $t('footer.datenschutz.title') }}
            </button>
          </div>
        </div>
      </div>

      <!-- Versión Móvil (vertical) -->
      <div class="lg:hidden space-y-8">
        <!-- Contacto -->
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

        <!-- Línea divisoria horizontal -->
        <div class="h-px w-full bg-gray-600"></div>

        <!-- Impressum -->
        <div>
          <button 
            @click="openPopup('impressum')"
            class="text-2xl font-bold text-white hover:underline focus:outline-none text-left"
          >
            {{ $t('footer.impressum.title') }}
          </button>
        </div>

        <!-- Línea divisoria horizontal -->
        <div class="h-px w-full bg-gray-600"></div>

        <!-- Datenschutz -->
        <div>
          <button 
            @click="openPopup('datenschutz')"
            class="text-2xl font-bold text-white hover:underline focus:outline-none text-left"
          >
            {{ $t('footer.datenschutz.title') }}
          </button>
        </div>
      </div>

      <!-- Derechos reservados -->
      <div class="mt-12 pt-6 border-t border-gray-600">
        <p class="text-gray-400 text-sm text-center">
          © {{ new Date().getFullYear() }} {{ $t('footer.rights_reserved') }}
        </p>
      </div>
    </div>

    <!-- Popup -->
    <div v-if="activePopup" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-16 lg:pt-16 px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Fondo oscuro -->
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-black bg-opacity-75" @click="closePopup"></div>
        </div>

        <!-- Contenido del popup -->
        <div class="inline-block align-bottom bg-[#2c3e50] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div class="px-6 py-4 sm:px-8 sm:py-6">
            <div class="flex justify-between items-start">
              <h2 class="text-3xl font-bold text-white">
                {{ activePopup === 'impressum' ? $t('footer.impressum.title') : $t('footer.datenschutz.title') }}
              </h2>
              <button @click="closePopup" class="text-gray-300 hover:text-white focus:outline-none">
                <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="mt-6 text-gray-200 text-sm max-h-[70vh] overflow-y-auto pr-2">
              <div v-html="activePopup === 'impressum' ? $t('footer.impressum.content') : $t('footer.datenschutz.content')"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      activePopup: null
    }
  },
  methods: {
    openPopup(type) {
      this.activePopup = type
      document.body.style.overflow = 'hidden'
    },
    closePopup() {
      this.activePopup = null
      document.body.style.overflow = ''
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

/* Scrollbar del popup */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #2c3e50;
}
::-webkit-scrollbar-thumb {
  background: #4a5c6d;
  border-radius: 4px;
}

@media (max-width: 768px) {
  #footer {
    padding: 2rem 1rem;
  }
}
</style>