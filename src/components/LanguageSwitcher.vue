<template>
  <div class="language-selector" @click="toggleDropdown">
    <img
      v-if="currentFlag"
      :src="currentFlag"
      alt="flag"
      class="h-4 w-6 rounded-sm cursor-pointer"
    />
    <GlobeAltIcon v-else class="h-6 w-6 text-white cursor-pointer" />
    
    <!-- Flecha hacia abajo -->
    <ChevronDownIcon class="h-4 w-4 ml-1 text-white cursor-pointer" />

    <div v-if="showDropdown" class="dropdown" @click.stop>
      <ul>
        <li @click="selectLanguage('en')" class="lang-item">
          <img :src="flags.en" alt="English" class="inline h-2 w-4 mr-2 rounded-sm" />
          English
          <span class="vertical-line"></span>
        </li>

        <div class="horizontal-line"></div>

        <li @click="selectLanguage('de')" class="lang-item">
          <img :src="flags.de" alt="Deutsch" class="inline h-2 w-4 mr-2 rounded-sm" />
          Deutsch
          <span class="vertical-line"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { GlobeAltIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const { locale } = useI18n()

const showDropdown = ref(false)
const flags = {
  de: new URL('../assets/german.png', import.meta.url).href,
  en: new URL('../assets/english.png', import.meta.url).href,
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

onMounted(() => {
  locale.value = 'de'
})
</script>

<style scoped>
.language-selector {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2000;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.dropdown {
  position: absolute;
  top: 2.2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(31, 41, 55, 0.60); /* fondo oscuro con opacidad suave */
  border-radius: 0.25rem;
  padding: 0.25rem 0;
  min-width: 140px;
  z-index: 60;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  backdrop-filter: blur(6px); /* efecto de desenfoque para que sea más suave */
}

.dropdown ul {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}

.dropdown li {
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: 500;
}

.dropdown li:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Línea horizontal entre los idiomas */
.horizontal-line {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0.25rem 1rem;
}

/* Estilo para los items para que tengan línea vertical al final */
.lang-item {
  justify-content: center;
  position: relative;
  padding-right: 1.5rem; /* espacio para la línea vertical */
}

/* Línea vertical al final de cada palabra */
.vertical-line {
  position: absolute;
  right: 0.75rem;
  height: 16px;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  top: 50%;
  transform: translateY(-50%);
}
</style>