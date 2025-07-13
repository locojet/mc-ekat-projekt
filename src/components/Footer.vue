<template>
  <footer id="footer" class="bg-[#2c3e50] w-full py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Versión Desktop -->
      <div class="hidden lg:grid grid-cols-3 gap-8">
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
              <p>{{ $t('contacto.kontakt.web') }}:
                <a href="https://www.mcekat.de" class="text-white underline" target="_blank">www.mcekat.de</a>
              </p>
            </div>
          </div>
        </div>

        <!-- Impressum -->
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">{{ $t('footer.impressum.title') }}</h2>
          <div class="text-gray-200 text-sm" v-html="$t('footer.impressum.content')"></div>
        </div>

        <!-- Datenschutz -->
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">{{ $t('footer.datenschutz.title') }}</h2>
          <div class="text-gray-200 text-sm" v-html="$t('footer.datenschutz.content')"></div>
        </div>
      </div>

      <!-- Versión Móvil -->
      <div class="lg:hidden space-y-8">
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
              <p>{{ $t('contacto.kontakt.web') }}:
                <a href="https://www.mcekat.de" class="text-white underline" target="_blank">www.mcekat.de</a>
              </p>
            </div>
          </div>
        </div>

        <!-- Impressum -->
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">{{ $t('footer.impressum.title') }}</h2>
          <div class="text-gray-200 text-sm" v-html="$t('footer.impressum.content')"></div>
        </div>

        <!-- Datenschutz -->
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">{{ $t('footer.datenschutz.title') }}</h2>
          <div class="text-gray-200 text-sm" v-html="$t('footer.datenschutz.content')"></div>
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
  name: 'Footer'
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
}
</style>