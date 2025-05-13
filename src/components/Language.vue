<template>
    <div class="language-selector" @click="toggleDropdown">
      <GlobeAltIcon class="h-6 w-6 text-white cursor-pointer" />
  
      <div v-if="showDropdown" class="dropdown">
        <ul>
          <li @click.stop="selectLanguage('en')">English</li>
          <li @click.stop="selectLanguage('de')">Deutsch</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { GlobeAltIcon } from '@heroicons/vue/24/outline'
  
  const showDropdown = ref(false)
  
  const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value
  }
  
  const selectLanguage = (lang) => {
    console.log('Idioma seleccionado:', lang)
    showDropdown.value = false
    // Aquí podrías hacer algo como cambiar el idioma en i18n
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
    background-color: #1f2937; /* gris oscuro */
    border-radius: 0.25rem;
    padding: 0.25rem 0;
    min-width: 100px;
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
  }
  
  .dropdown li:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  </style>