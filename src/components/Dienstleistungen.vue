<template>
  <div id="services" class="bg-white py-24 sm:py-32 p-4 -mt-6 max-w-7xl">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight -mt-6 text-gray-900 sm:text-4xl text-center">{{ $t('ndtSection.title') }}</h2>
        <p class="mt-0 text-lg leading-8 text-gray-600 text-center sm:-mb-5">{{ $t('ndtSection.subtitle') }}</p>
      </div>
      <div class="mx-auto mt-0 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-9 lg:mx-0 lg:max-w-none lg:grid-cols-3">

        <!-- Ultraschalldickenmessungen -->
        <article class="flex flex-col text-justify m-5 pt-0">
          <div class="flex items-center justify-center gap-x-4 text-xs">
            <a href="#" class="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ $t('ndtSection.articles.ultraschall.tag') }}</a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6">
              <a href="#">{{ $t('ndtSection.articles.ultraschall.title') }}</a>
            </h3>
            <div class="relative mt-4">
              <img src="../assets/Verfahren/ultraschall.png" alt="Ultraschalldickenmessungen" class="object-cover h-64 w-full rounded-lg bg-primary">
            </div>
            <p class="mt-5 line-clamp-3 text-sm leading-6">{{ $t('ndtSection.articles.ultraschall.description') }}</p>
          </div>
        </article>

        <!-- Schweißnahtprüfungen UT -->
        <article class="flex flex-col text-justify m-5">
          <div class="flex items-center justify-center gap-x-4 text-xs">
            <a href="#" class="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ $t('ndtSection.articles.ut.tag') }}</a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6">
              <a href="#">{{ $t('ndtSection.articles.ut.title') }}</a>
            </h3>
            <div class="relative mt-4">
              <img src="../assets/Verfahren/ut-sp.png" alt="Schweißnahtprüfungen UT" class="object-cover h-64 w-full rounded-lg bg-primary">
            </div>
            <p class="mt-5 line-clamp-3 text-sm leading-6">{{ $t('ndtSection.articles.ut.description') }}</p>
          </div>
        </article>

        <!-- Magnetpulverprüfungen MP -->
        <article class="flex flex-col text-justify m-5">
          <div class="flex items-center justify-center gap-x-4 text-xs">
            <a href="#" class="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ $t('ndtSection.articles.mp.tag') }}</a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6">
              <a href="#">{{ $t('ndtSection.articles.mp.title') }}</a>
            </h3>
            <div class="relative mt-4">
              <img src="../assets/Verfahren/mt.png" alt="Magnetpulverprüfungen MP" class="object-cover h-64 w-full rounded-lg bg-primary">
            </div>
            <p class="mt-5 line-clamp-3 text-sm leading-6">{{ $t('ndtSection.articles.mp.description') }}</p>
          </div>
        </article>

        <!-- Wirbelstromprüfung ET -->
        <article class="flex flex-col text-justify m-5">
          <div class="flex items-center justify-center gap-x-4 text-xs">
            <a href="#" class="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ $t('ndtSection.articles.et.tag') }}</a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6">
              <a href="#">{{ $t('ndtSection.articles.et.title') }}</a>
            </h3>
            <div class="relative mt-4">
              <img src="../assets/Verfahren/et1.png" alt="Wirbelstromprüfung ET" class="object-cover h-64 w-full rounded-lg bg-primary">
            </div>
            <p class="mt-5 line-clamp-3 text-sm leading-6">{{ $t('ndtSection.articles.et.description') }}</p>
          </div>
        </article>

        <!-- Visualisierungsprüfung VT -->
        <article class="flex flex-col text-justify m-5">
          <div class="flex items-center justify-center gap-x-4 text-xs">
            <a href="#" class="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ $t('ndtSection.articles.vt.tag') }}</a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6">
              <a href="#">{{ $t('ndtSection.articles.vt.title') }}</a>
            </h3>
            <div class="relative mt-4">
              <img src="../assets/Verfahren/vt.png" alt="Visualisierungsprüfung VT" class="object-cover h-64 w-full rounded-lg bg-primary">
            </div>
            <p class="mt-5 line-clamp-3 text-sm leading-6">{{ $t('ndtSection.articles.vt.description') }}</p>
          </div>
        </article>

        <!-- Eindringprüfungen PT -->
        <article class="flex flex-col text-justify m-5">
          <div class="flex items-center justify-center gap-x-4 text-xs">
            <a href="#" class="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ $t('ndtSection.articles.pt.tag') }}</a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6">
              <a href="#">{{ $t('ndtSection.articles.pt.title') }}</a>
            </h3>
            <div class="relative mt-4">
              <img src="../assets/Verfahren/pt.png" alt="Eindringprüfungen PT" class="object-cover h-64 w-full rounded-lg bg-primary">
            </div>
            <p class="mt-5 line-clamp-3 text-sm leading-6">{{ $t('ndtSection.articles.pt.description') }}</p>
          </div>
        </article>
      </div>
    </div>
  </div>

  <!-- Zulassung für NDT-Prüfungen im Offshore-Bereich -->
  <article class="flex flex-col items-center justify-center text-start m-5 p10 pb-20">
    <div class="flex items-center justify-center gap-x-4 text-xs mt-[-5rem]">
      <a href="#" class="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-secondary2 hover:bg-gray-100">{{ $t('ndtSection.offshore.tag') }}</a>
    </div>
    <div class="group relative p-6">
      <h3 class="mt-3 text-lg font-semibold leading-6 text-center">
        <a href="#">{{ $t('ndtSection.offshore.title') }}</a>
      </h3>
      <div class="relative mt-4">
        <img src="../assets/Verfahren/offshore.png" alt="Eindringprüfungen PT" class="object-cover h-64 w-full rounded-lg bg-primary">
      </div>
      <p class="mt-5 line-clamp-3 text-sm leading-6">{{ $t('ndtSection.offshore.description') }}</p>
    </div>
  </article>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useI18n } from 'vue-i18n'; // 👈 Importas useI18n

const { t } = useI18n(); // 👈 Te traes la función t

const articles = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('article-visible');
        entry.target.classList.remove('article-hidden');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

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
#services {
  max-width: 75%;
  margin: 0 auto;
}
@media screen and (max-width: 768px) {
  #services {
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