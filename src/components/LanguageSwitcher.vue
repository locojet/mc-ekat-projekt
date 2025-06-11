<template>
  <div class="language-selector " @click="toggleDropdown">
    <img
      v-if="currentFlag"
      :src="currentFlag"
      alt="flag"
      class="h-4 w-6 rounded-sm cursor-pointer"
    />
    <GlobeAltIcon v-else class="h-6 w-6 text-white cursor-pointer" />

    <div v-if="showDropdown" class="dropdown" @click.stop>
      <ul>
        <li @click="selectLanguage('en')">
          <img :src="flags.en" alt="English" class="inline h-2 w-4 mr-2 rounded-sm" />
          English
        </li>
        <li @click="selectLanguage('de')">
          <img :src="flags.de" alt="Deutsch" class="inline h-2 w-4 mr-2 rounded-sm" />
          Deutsch
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { GlobeAltIcon } from '@heroicons/vue/24/outline'


const { locale } = useI18n()

const showDropdown = ref(false)
const flags = {
  en: new URL('../assets/english.png', import.meta.url).href,
  de: new URL('../assets/german.png', import.meta.url).href,
}

const currentFlag = computed(() => flags[locale.value])

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const selectLanguage = (lang) => {
  locale.value = lang
  showDropdown.value = false
  console.log('Idioma cambiado a:', lang)
}
</script>

<style scoped>
.language-selector {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2000;
}

.dropdown {
  position: absolute;
  top: 2.2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #1f2937;
  border-radius: 0.25rem;
  padding: 0.25rem 0;
  min-width: 120px;
  z-index: 60;
}

.dropdown ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dropdown li {
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dropdown li:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>