<template>
  <div 
    class="contact-call-mail fixed bottom-0 left-0 right-0 flex justify-around bg-secondary2 py-4 shadow-md md:hidden transition-opacity duration-500"
    :class="{ 'opacity-0 pointer-events-none': !showIcons, 'opacity-100': showIcons }"
  >
    <a href="mailto:info@mcekat.de" class="flex flex-col items-center">
      <img src="../assets/mail.svg" alt="Email" class="h-9 w-9">
      <span class="text-xs text-white">E-Mail</span> 
    </a>
    <a href="tel:+491234567890" class="flex flex-col items-center">
      <img src="../assets/call.svg" alt="Anrufen" class="h-9 w-9">
      <span class="text-xs text-white">Anruf</span>
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showIcons = ref(false)

const handleScroll = () => {
  showIcons.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Nada extra por acá, lo estamos manejando todo con Tailwind */
</style>
