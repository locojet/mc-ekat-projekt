<template>
  <div id="about" class="bg-white py-0 pt-20 text-justify">
    <div class="mx-auto max-w-7xl p-10 lg:px-8">
      <div class="mx-auto max-w-2xl">
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {{ $t('about.title') }}
        </p>
        <p class="mt-6 text-sm leading-6 text-black">
          {{ $t('about.description') }}
        </p>
      </div>

      <!-- Fotos de los jefes -->
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 text-center">
          <div>
            <img src="../assets/Verfahren/christian.png" alt="Foto Christian Ekat" class="w-64 h-64 object-cover mx-auto rounded-full shadow-md" />
            <p class="mt-4 text-lg font-semibold text-gray-900">Christian Ekat</p>
            <p class="text-sm text-gray-600">{{ $t('about.christianTitle') }}</p>
          </div>
          <div>
            <img src="../assets/Verfahren/mathias.png" alt="Foto Mathias Ekat" class="w-64 h-64 object-cover mx-auto rounded-full shadow-md" />
            <p class="mt-4 text-lg font-semibold text-gray-900">Mathias Ekat</p>
            <p class="text-sm text-gray-600">{{ $t('about.mathiasTitle') }}</p>
          </div>
        </div>

        <!-- Sección de artículos -->
        <dl class="grid mb-10 max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div class="relative pl-4 article-hidden">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              {{ $t('about.philosophy.title') }}
            </dt>
            <dd class="mt-2 text-sm leading-6 text-black">
              {{ $t('about.philosophy.text') }}
            </dd>
          </div>

          <div class="relative pl-4 article-hidden">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              {{ $t('about.guarantee.title') }}
            </dt>
            <dd class="mt-2 text-sm leading-6 text-black">
              {{ $t('about.guarantee.text') }}
            </dd>
          </div>

          <div class="relative pl-4 article-hidden">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              {{ $t('about.method.title') }}
            </dt>
            <dd class="mt-2 text-sm leading-6 text-black">
              {{ $t('about.method.text') }}
            </dd>
          </div>

          <div class="relative pl-4 article-hidden">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              {{ $t('about.service.title') }}
            </dt>
            <dd class="mt-2 text-sm leading-6 text-black">
              {{ $t('about.service.text') }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const articles = ref([])
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('article-visible')
          entry.target.classList.remove('article-hidden')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 }
  )

  articles.value = document.querySelectorAll('dl > div.article-hidden')
  articles.value.forEach((article) => {
    observer.observe(article)
  })
})

onBeforeUnmount(() => {
  if (observer) {
    articles.value.forEach((article) => {
      observer.unobserve(article)
    })
  }
})
</script>

<style scoped>
#about {
  max-width: 95%;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  #about {
    max-width: 100%;
  }
}

dl > div {
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