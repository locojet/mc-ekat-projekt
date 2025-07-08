<template>
  <footer id="footer" class="bg-[#2c3e50] w-full py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Versión Desktop (3 columnas) -->
      <div class="hidden lg:grid grid-cols-3 gap-8">
        <!-- Columna 1: Contacto -->
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">{{ $t('contacto.kontakt.title') }}</h2>
          <div class="text-gray-200 text-sm space-y-2">
            <p><strong class="text-white">{{ $t('contacto.kontakt.company') }}</strong></p>
            <p>{{ $t('contacto.kontakt.address1') }}</p>
            <p>{{ $t('contacto.kontakt.phone1') }}</p>
            <p>{{ $t('contacto.kontakt.fax1') }}</p>
            <p>{{ $t('contacto.kontakt.mobile1') }}</p>
            <br>
            <p>{{ $t('contacto.kontakt.address2') }}</p>
            <p>{{ $t('contacto.kontakt.phone2') }}</p>
            <p>{{ $t('contacto.kontakt.fax2') }}</p>
            <p>{{ $t('contacto.kontakt.mobile2') }}</p>
            <div class="mt-4">
              <p>{{ $t('contacto.kontakt.email') }}: <a href="mailto:info@mcekat.de" class="text-white underline">info@mcekat.de</a></p>
              <p>{{ $t('contacto.kontakt.web') }}: <a href="https://www.mcekat.de" class="text-white underline">www.mcekat.de</a></p>
            </div>
          </div>
        </div>

        <!-- Columna 2: Impressum -->
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">{{ $t('footer.impressum.title') }}</h2>
          <div class="text-gray-200 text-sm" v-html="$t('footer.impressum.content')"></div>
        </div>

        <!-- Columna 3: Datenschutz -->
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">{{ $t('footer.datenschutz.title') }}</h2>
          <div class="text-gray-200 text-sm" v-html="$t('footer.datenschutz.content')"></div>
        </div>
      </div>

      <!-- Versión Móvil (apilado vertical) -->
      <div class="lg:hidden space-y-8">
        <!-- Sección Contacto -->
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">{{ $t('contacto.kontakt.title') }}</h2>
          <div class="text-gray-200 text-sm space-y-2">
            <p><strong class="text-white">{{ $t('contacto.kontakt.company') }}</strong></p>
            <p>{{ $t('contacto.kontakt.address1') }}</p>
            <p>{{ $t('contacto.kontakt.phone1') }}</p>
            <p>{{ $t('contacto.kontakt.fax1') }}</p>
            <p>{{ $t('contacto.kontakt.mobile1') }}</p>
            <br>
            <p>{{ $t('contacto.kontakt.address2') }}</p>
            <p>{{ $t('contacto.kontakt.phone2') }}</p>
            <p>{{ $t('contacto.kontakt.fax2') }}</p>
            <p>{{ $t('contacto.kontakt.mobile2') }}</p>
            <div class="mt-4">
              <p>{{ $t('contacto.kontakt.email') }}: <a href="mailto:info@mcekat.de" class="text-white underline">info@mcekat.de</a></p>
              <p>{{ $t('contacto.kontakt.web') }}: <a href="https://www.mcekat.de" class="text-white underline">www.mcekat.de</a></p>
            </div>
          </div>
        </div>

        <!-- Sección Impressum -->
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">{{ $t('footer.impressum.title') }}</h2>
          <div class="text-gray-200 text-sm" v-html="$t('footer.impressum.content')"></div>
        </div>

        <!-- Sección Datenschutz -->
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">{{ $t('footer.datenschutz.title') }}</h2>
          <div class="text-gray-200 text-sm" v-html="$t('footer.datenschutz.content')"></div>
        </div>
      </div>

      <!-- Copyright (común a ambos) -->
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
};
</script>

<style scoped>
#footer {
  font-family: 'Segoe UI', system-ui, sans-serif;
}

/* Estilos para enlaces en el contenido HTML */
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