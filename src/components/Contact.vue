<template>
    <section id="sec-4" class="bg-secondary2 text-white py-12 w-full">
      <div class="mx-auto max-w-7xl px-10 sm:px-4 text-start">
  
        <h2 class="font-bold text-xl mb-6 text-left">
          {{ $t('contacto.kontakt.title') }}
        </h2>
  
        <p>
          <strong>{{ $t('contacto.kontakt.company') }}</strong><br>
          {{ $t('contacto.kontakt.address1') }}<br>
          {{ $t('contacto.kontakt.phone1') }}<br>
          {{ $t('contacto.kontakt.fax1') }}<br>
          {{ $t('contacto.kontakt.mobile1') }}<br><br>
  
          {{ $t('contacto.kontakt.address2') }}<br>
          {{ $t('contacto.kontakt.phone2') }}<br>
          {{ $t('contacto.kontakt.fax2') }}<br>
          {{ $t('contacto.kontakt.mobile2') }}
        </p>
  
        <p class="mt-4">
          {{ $t('contacto.kontakt.email') }}: 
          <a href="mailto:info@mcekat.de" class="underline">info@mcekat.de</a><br>
          {{ $t('contacto.kontakt.web') }}: 
          <a href="http://www.mcekat.de" target="_blank" rel="noopener noreferrer" class="underline">www.mcekat.de</a>
        </p>
  
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'KontaktSection'
  };
  </script>
  
  <style scoped>
  h2 {
    color: white;
  }
  a {
    color: #ffffff;
  }
  a.underline:hover {
    text-decoration: underline;
  }
  </style>