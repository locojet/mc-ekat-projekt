<template>
  <div id="contact" class="bg-secondary2 py-0 pt-20 text-justify">
    <div class="mx-auto max-w-7xl p-10 lg:px-8">
      <div class="mx-auto max-w-2xl">
        <!-- Sección de Contacto -->
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {{ $t('contacto.kontakt.title') }}
        </p>

        <div class="mt-6 text-sm leading-6 text-gray-200">
          <p>
            <strong class="text-white">{{ $t('contacto.kontakt.company') }}</strong><br>
            {{ $t('contacto.kontakt.address1') }}<br>
            {{ $t('contacto.kontakt.phone1') }}<br>
            {{ $t('contacto.kontakt.fax1') }}<br>
            {{ $t('contacto.kontakt.mobile1') }}<br><br>

            {{ $t('contacto.kontakt.address2') }}<br>
            {{ $t('contacto.kontakt.phone2') }}<br>
            {{ $t('contacto.kontakt.fax2') }}<br>
            {{ $t('contacto.kontakt.mobile2') }}
          </p>

          <p class="mt-6">
            {{ $t('contacto.kontakt.email') }}: 
            <a href="mailto:info@mcekat.de" class="text-white underline hover:no-underline">info@mcekat.de</a><br>
            {{ $t('contacto.kontakt.web') }}: 
            <a href="http://www.mcekat.de" target="_blank" rel="noopener noreferrer" class="text-white underline hover:no-underline">www.mcekat.de</a>
          </p>
        </div>

        <!-- Sección Impressum -->
        <p class="mt-16 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {{ $t('footer.impressum.title') }}
        </p>
        <div v-html="$t('footer.impressum.content')" class="mt-6 text-sm leading-6 text-gray-200 footer-content"></div>

        <!-- Sección Datenschutz -->
        <p class="mt-16 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {{ $t('footer.datenschutz.title') }}
        </p>
        <div v-html="$t('footer.datenschutz.privacyPolicy')" class="mt-6 text-sm leading-6 text-gray-200 footer-content"></div>

        <!-- Derechos reservados -->
        <div class="mt-16 pt-6 border-t border-gray-600">
          <p class="text-sm text-gray-400">
            © {{ new Date().getFullYear() }} {{ $t('footer.rights_reserved_short') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CombinedContactLegalConsistent'
};
</script>

<style scoped>
#contact {
  max-width: 95%;
  margin: 0 auto;
  background-color: #2c3e50;
  font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
}

:deep(.footer-content a) {
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s;
}

:deep(.footer-content a:hover) {
  color: #2980b9;
  text-decoration: underline;
}

:deep(.footer-content strong) {
  color: #ffffff;
  font-weight: 600;
}

:deep(.footer-content br) {
  margin-bottom: 0.5rem;
  display: block;
  content: "";
}

@media screen and (max-width: 768px) {
  #contact {
    max-width: 100%;
    padding-top: 16px;
  }

  .footer-content {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  p.text-3xl {
    font-size: 1.8rem;
  }
}
</style>