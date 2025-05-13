<template>
  <div id="sec-3" class="bg-white py-0 pt-20 text-justify">
    <div class="mx-auto max-w-7xl p-10 lg:px-8">
      <div class="mx-auto max-w-2xl">
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Über uns</p>
        <p class="mt-6 text-sm leading-6 text-black">
          Wir bieten umfangreiches Know-how in der zerstörungsfreien Werkstoffprüfung (ZfP/NDT) wie PT, UT, MP, VT und ET, sowie ein breites Spektrum an Dienstleistungen und Technologien im Bereich Verschleißschutz und Reparaturen – speziell für den ON- und OFFSHORE-Bereich. Unsere Kundenbasis reicht von Gewerbe, Industrie, Schifffahrt bis hin zu zahlreichen Dienstleistern wie Werften, Reedereien, Kraftwerken und vielen mehr. Unsere Services richten sich ebenfalls an Branchen wie die Automobilindustrie, Luftfahrt, Forschungseinrichtungen, Handwerk, Behörden, zoologische Gärten, Landwirtschaft, den medizinischen Bereich und weitere.
        </p>
      </div>

      <!-- Fotos de los jefes -->
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 text-center">
          <div>
            <img src="../assets/mathias.png" alt="Foto Mathias Ekat" class="w-64 h-64 object-cover mx-auto rounded-full shadow-md">
            <p class="mt-4 text-lg font-semibold text-gray-900">Mathias Ekat</p>
            <p class="text-sm text-gray-600">Technischer Leiter / Geschäftsführer</p>
          </div>
          <div>
            <img src="../assets/juan.JPG" alt="Foto Christian Ekat" class="w-64 h-64 object-cover mx-auto rounded-full shadow-md">
            <p class="mt-4 text-lg font-semibold text-gray-900">Christian Ekat</p>
            <p class="text-sm text-gray-600">CEO / Geschäftsführer</p>
          </div>
        </div>

        <!-- Sección de artículos -->
        <dl class="grid mb-10 max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <article class="relative pl-4">
            <dt class="text-base font-semibold leading-7 text-gray-900">Philosophie</dt>
            <dd class="mt-2 text-sm leading-6 text-black">
              Unsere Firmenphilosophie umfasst die Bereiche Reparatur und Instandhaltung sowie Werterhalt und -steigerung. Die Leistungen sind individuell auf die jeweilige Unternehmenssituation abgestimmt. Bei Bedarf kommen auch standardisierte, flexibel abrufbare Verfahren zum Einsatz.
            </dd>
          </article>

          <article class="relative pl-4">
            <dt class="text-base font-semibold leading-7 text-gray-900">Garantie</dt>
            <dd class="mt-2 text-sm leading-6 text-black">
              Wir stehen hinter der Qualität unserer Arbeit und garantieren höchste Standards bei der Ausführung aller Dienstleistungen. Unsere langjährige Erfahrung und stetige Weiterbildung sichern Ihnen verlässliche Ergebnisse.
            </dd>
          </article>

          <article class="relative pl-4">
            <dt class="text-base font-semibold leading-7 text-gray-900">Arbeitsweise</dt>
            <dd class="mt-2 text-sm leading-6 text-black">
              Nutzen Sie unser Know-how zur Senkung Ihrer Kosten. Unsere Mission ist es, Kunden mit hochwertigen Produkten und fundiertem Fachwissen zu unterstützen. Wir bieten eine umfassende Situationsanalyse, Vorab-Diagnosen, konstruktive Verbesserungsvorschläge, gezielte Werkstoffauswahl und passende Technologien, um Komponenten effektiv gegen Verschleiß, Korrosion, Hitze und andere Einflüsse zu schützen.
            </dd>
          </article>

          <article class="relative pl-4">
            <dt class="text-base font-semibold leading-7 text-gray-900">Serviceleistung</dt>
            <dd class="mt-2 text-sm leading-6 text-black">
              Weltweit – rund um die Uhr. Wir bieten 24/7 Beratung, Reparatur, Instandsetzung, Vertrieb und Auslieferung. Verlassen Sie sich auf uns – jederzeit und überall.
            </dd>
          </article>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const articles = ref([]);
let observer;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('article-visible');
        entry.target.classList.remove('article-hidden');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  articles.value = document.querySelectorAll('article');
  articles.value.forEach(article => {
    observer.observe(article);
    article.classList.add('article-hidden');
  });
});

onBeforeUnmount(() => {
  if (observer) {
    articles.value.forEach(article => {
      observer.unobserve(article);
    });
  }
});
</script>

<style scoped>
#sec-3 {
  max-width: 95%;
  margin: 0 auto;
}
@media screen and (max-width: 768px) {
  #sec-3 {
    max-width: 100%;
  }
}
article {
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.article-hidden {
  opacity: 0;
  transform: translateX(-100px);
}
.article-visible {
  opacity: 1;
  transform: translateX(0);
}
</style>
