<template>
  <div id="nav" class="fixed-nav-container" :class="{ 'bg-visible': isScrolled }">
    <Disclosure as="nav" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <!-- Botón móvil -->
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none hover:scale-105 focus:ring-inset focus:ring-white"
            >
              <span class="sr-only">{{ $t('nav.openMenu') }}</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6 scale-150" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          <!-- Navegación principal -->
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  @click.prevent="scrollToSection(item.href)"
                  class="cursor-pointer text-white hover:bg-secondary2 hover:text-white rounded-md px-2 py-1 text-sm font-medium"
                >
                  {{ item.name }}
                </a>
              </div>
            </div>
          </div>

          <!-- Logo y selector de idioma -->
          <Menu as="div" class="relative ml-3 flex items-center gap-4">
            <a @click.prevent="scrollToSection('#start')" class="cursor-pointer">
              <MenuButton>
                <img class="logo" src="../assets/logo.png" alt="Logo" />
              </MenuButton>
            </a>
            <!-- Selector de idioma visible solo en pantallas grandes -->
            <div class="hidden sm:block">
              <LanguageSwitcher />
            </div>
          </Menu>
        </div>
      </div>

      <!-- Menú móvil -->
      <Transition
        enter-active-class="transition-all duration-1000 ease-in-out"
        enter-from-class="opacity-0 -translate-y-6 max-h-0"
        enter-to-class="opacity-100 translate-y-0 max-h-[600px]"
        leave-active-class="transition-all duration-800 ease-in-out"
        leave-from-class="opacity-100 translate-y-0 max-h-[600px]"
        leave-to-class="opacity-0 -translate-y-6 max-h-0"
      >
        <DisclosurePanel class="sm:hidden overflow-hidden mt-20">
          <div class="pb-3 pt-4 flex flex-col items-center text-white space-y-4">
            <div class="flex w-full justify-center">
              <div class="flex w-4/5 justify-between items-start relative">
                <!-- Izquierda -->
                <div class="flex flex-col space-y-2 items-start">
                  <DisclosureButton 
                    as="a" 
                    @click.prevent="scrollToSection('#start')" 
                    class="text-base font-medium cursor-pointer"
                  >
                    {{ $t('nav.start') }}
                  </DisclosureButton>
                  <div class="w-3/4 h-px bg-white/30 ml-1"></div>
                  <DisclosureButton 
                    as="a" 
                    @click.prevent="scrollToSection('#services')" 
                    class="text-base font-medium cursor-pointer"
                  >
                    {{ $t('nav.service') }}
                  </DisclosureButton>
                </div>

                <!-- Línea vertical -->
                <div class="w-px bg-white/30 h-16 self-center"></div>

                <!-- Derecha -->
                <div class="flex flex-col space-y-2 items-end">
                  <DisclosureButton 
                    as="a" 
                    @click.prevent="scrollToSection('#jobs')" 
                    class="text-base font-medium cursor-pointer"
                  >
                    {{ $t('nav.jobs') }}
                  </DisclosureButton>
                  <div class="w-3/4 h-px bg-white/30 mr-1 self-end"></div>
                  <DisclosureButton 
                    as="a" 
                    @click.prevent="scrollToSection('#about')" 
                    class="text-base font-medium cursor-pointer"
                  >
                    {{ $t('nav.about') }}
                  </DisclosureButton>
                </div>
              </div>
            </div>

            <!-- Línea horizontal -->
            <div class="h-px bg-white/30 w-2/3 my-2"></div>

            <!-- Kontakt -->
            <DisclosureButton 
              as="a" 
              @click.prevent="scrollToSection('#footer')" 
              class="text-base font-medium cursor-pointer"
            >
              {{ $t('nav.contact') }}
            </DisclosureButton>
          </div>
        </DisclosurePanel>
      </Transition>
    </Disclosure>
  </div>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton
} from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()

const navigation = computed(() => [
  { name: t('nav.start'), href: '#start' },
  { name: t('nav.service'), href: '#services' },
  { name: t('nav.jobs'), href: '#jobs' },
  { name: t('nav.about'), href: '#about' },
  { name: t('nav.contact'), href: '#footer' }
])

const isScrolled = ref(false)
const headerHeight = 70 // Altura aproximada de tu header

// Función mejorada de scroll suave
const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId)
  if (section) {
    // Calcular posición con offset para el header
    const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = sectionPosition - headerHeight

    // Animación personalizada para mayor suavidad
    const startPosition = window.pageYOffset
    const distance = offsetPosition - startPosition
    const duration = 800 // Duración en ms
    let startTime = null

    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    }

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const easeProgress = easeInOutQuad(progress)
      
      window.scrollTo(0, startPosition + distance * easeProgress)
      
      if (timeElapsed < duration) {
        window.requestAnimationFrame(animation)
      } else {
        // Actualizar el hash después de completar el scroll
        history.pushState(null, null, sectionId)
      }
    }

    window.requestAnimationFrame(animation)
  }
}

// Manejar navegación inicial si hay hash en la URL
const handleInitialHash = () => {
  if (window.location.hash) {
    setTimeout(() => {
      scrollToSection(window.location.hash)
    }, 100) // Pequeño delay para asegurar que el DOM está listo
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleInitialHash()
  
  // Escuchar cambios de hash (navegación manual)
  window.addEventListener('hashchange', () => {
    if (window.location.hash) {
      scrollToSection(window.location.hash)
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('hashchange', handleInitialHash)
})
</script>

<style scoped>
.fixed-nav-container {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background-color: rgba(49, 61, 76, 0);
  transition: background-color 0.8s ease-in-out;
}

.bg-visible {
  background-color: rgba(49, 61, 76, 0.8); /* mismo color pero con menos opacidad */
  backdrop-filter: blur(6px); /* desenfoque tipo glassmorphism */
  -webkit-backdrop-filter: blur(6px); /* soporte para Safari */
}

.logo {
  width: 80px;
  height: auto;
  margin-top: 1rem;
  transition: transform 0.3s ease;
  outline: none !important;
  -webkit-tap-highlight-color: transparent !important;
}
.logo:focus {
  outline: none !important;
}

.logo:hover {
  transform: scale(1.05);
}

.cursor-pointer {
  cursor: pointer;
}
</style>