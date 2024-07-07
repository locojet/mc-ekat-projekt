<template>
  <div id="sec-3" class="bg-white py-0 pt-20 text-justify ">
    <div class="mx-auto max-w-7xl p-10  lg:px-8 ">
      <div class="mx-auto max-w-2xl lg:text-justify">
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Über uns</p>
        <p class="mt-6 text-sm leading-6 text-black">Wir bieten umfangreiches Know-How in zerstörungsfreier Werkstoffprüfung (ZfP/NDT) wie PT, UT, MP, VT und ET, sowie eine breite Palette an Dienstleistungen und Technologien im Bereich Verschleißschutz und Reparaturen, speziell für den ON- und OFFSHORE-Bereich. Unsere Kundenbasis umfasst diverse Branchen und Größen, darunter Gewerbe, Industrie, Schifffahrt sowie zahlreiche Dienstleister wie Werften, Reedereien, Kraftwerke und viele andere. Unsere Services richten sich auch an Sektoren wie die Automobilindustrie, Luftfahrt, Forschungseinrichtungen, Handwerk, Behörden, zoologische Gärten, Landwirtschaft, Medizinbereiche und mehr.</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20  lg:mt-24 lg:max-w-4xl">
        <dl class="grid mb-10 max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <article class="relative pl-4">
            <dt class="text-base font-semibold leading-7 text-gray-900">Philosophie</dt>
            <dd class="mt-2 text-sm leading-6 text-black">Die Firmenphilosophie beinhaltet entsprechend die Bereiche Reparatur und Instandhaltung sowie Werterhalt und –steigerung. Die Leistungen sind auf jeweils spezifische Unternehmens-situation hin individuell ausgerichtet. Je nach Bedarf kommen aber auch standardisierte, flexibel abrufbare Verfahren zum Einsatz.</dd>
          </article>
          <article class="relative pl-4">
            <dt class="text-base font-semibold leading-7 text-gray-900">Garantie</dt>
            <dd class="mt-2 text-sm leading-6 text-black">Leistung Die Firmenphilosophie beinhaltet entsprechend die Bereiche Reparatur und Instandhaltung sowie Werterhalt und –steigerung. Die Leistungen sind auf jeweils spezifische Unternehmens-situation hin individuell ausgerichtet. Je nach Bedarf kommen aber auch standardisierte, flexibel abrufbare Verfahren zum Einsatz.</dd>
          </article>
          <article class="relative pl-4">
            <dt class="text-base font-semibold leading-7 text-gray-900">Arbeitsweise</dt>
            <dd class="mt-2 text-sm leading-6 text-black">Nutzen Sie unser Know How zur Senkung Ihrer Kosten. Unsere Produkte und unser KnowHow unseren Kunden anzubieten, haben wir uns zur Aufgabe gemacht. Umfassende problemorientierte Situationsanalyse, Voraus-Diagnose konstruktive Vorschläge zur Verbesserung der Konstruktion des verschleissgefährdeten Teils gemeinsame Auswahl der optimalen Werkstoffe bzw. der Technologien, damit die entsprechenden Teile gegen Verschleiß, Korrosion, Hitze o.ä. wesentlich langlebiger werden.</dd>
          </article>
          <article class="relative pl-4">
            <dt class="text-base font-semibold leading-7 text-gray-900">Serviceleistung</dt>
            <dd class="mt-2 text-sm leading-6 text-black">Weltweit 24/7. Wir bieten 7 Tage 24 Stunden Beratung, Reparatur, Instandsetzung, Vertrieb und Auslieferung. Wir sind für Sie da, rund um die Uhr.</dd>
          </article>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const articles = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Artikel wird sichtbar und bleibt sichtbar
        entry.target.classList.add('article-visible');
        entry.target.classList.remove('article-hidden');
        // Beobachten einstellen, nachdem der Artikel sichtbar wird
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
  articles.value.forEach(article => {
    observer.unobserve(article);
  });
});
</script>



<style scoped>
#sec-3{
  max-width: 95%;
  margin: 0 auto;
}
@media screen and (max-width: 768px) {
  #sec-3{
    max-width: 100%;
  }
}
/* Grundlegende Transition für alle Artikel */
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



