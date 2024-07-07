<script setup>
// Importiere notwendige Komponenten
import PageLoader from './components/PageLoader.vue';
import CallMail from './components/CallMail.vue';
import Navigation from './components/Navigation.vue';
import VideoAbspann from './components/VideoAbspann.vue';
import Zulassung from './components/Zulassung.vue';
import Dienstleistungen from './components/Dienstleistungen.vue';
import Jobs from './components/Jobs.vue';
import Footer from './components/Footer.vue';
import About from './components/About.vue';
import Formular from './components/Formular.vue';
import { onMounted } from 'vue'; // Importiere onMounted Funktion aus Vue

// onMounted Hook: Führt Code aus, sobald die Komponente gemountet ist
onMounted(() => {
  // Erstellt ein neues Skript-Element für JSON-LD
  const script = document.createElement('script');
  script.type = 'application/ld+json'; // Setzt den Typ des Skripts auf 'application/ld+json'
  script.innerHTML = JSON.stringify({
    "@context": "https://schema.org", // Kontext für Schema.org
    "@type": "Organization", // Typ der Organisation
    "name": "MCEKAT", // Name der Organisation
    "url": "https://www.mcekat.de", // URL der Organisation
    "email": "info@mcekat.de", // E-Mail-Adresse der Organisation
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Heidmühlenweg 48a",
      "addressLocality": "Elmshorn",
      "postalCode": "D-25336",
      "addressCountry": "DE"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+49-4121-579254", // Telefonnummer der Organisation
      "contactType": "customer service" // Art des Kontakts
    }],
    "department": [{
      "@type": "Organization",
      "name": "Zweigstelle", // Name der Zweigstelle
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kaltenhöfer Weg 1c",
        "addressLocality": "Insel Poel",
        "postalCode": "D-23999",
        "addressCountry": "DE"
      },
      "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "+49-38425-42507", // Telefonnummer der Zweigstelle
        "contactType": "customer service" // Art des Kontakts
      }]
    }]
  });
  // Fügt das Skript-Element in den Kopfbereich des Dokuments ein
  document.head.appendChild(script);
});
</script>

<template>
  <div id="app" class="grid-container">
    <PageLoader />
    <navigation />
    <VideoAbspann />
    <Zulassung />
    <Dienstleistungen />
    <Jobs />
    <About />
    <CallMail />
    <Formular />
    <Footer />
  </div>
</template>

<style scoped>
#sec-1 {
  margin-top: -3rem; 
}
* {
  transition: all 0.5s ease-in-out; 
}
</style>
