<template>
  <div id="nav" class="fixed-nav-container" :style="{ 'background-color': backgroundColor }">
    <Disclosure as="nav" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <!-- Botón móvil -->
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none hover:scale-105 focus:ring-inset focus:ring-white"
            >
              <span class="sr-only">Open main menu</span>
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
                  @click="scrollToSection(item.href)"
                  class="cursor-pointer text-white hover:bg-secondary2 hover:text-white rounded-md px-2 py-1 text-sm font-medium"
                >
                  {{ item.name }}
                </a>
              </div>
            </div>
          </div>

          <!-- Logo -->
          <Menu as="div" class="relative ml-3">
            <a href="index.html">
              <MenuButton>
                <img class="logo" src="../assets/logo.png" alt="Logo" />
              </MenuButton>
            </a>
          </Menu>
        </div>
      </div>

      <!-- Menú móvil con nueva estructura -->
      <Transition
        enter-active-class="transition-all duration-500 ease-in-out"
        enter-from-class="max-h-0 opacity-0"
        enter-to-class="max-h-96 opacity-100"
        leave-active-class="transition-all duration-300 ease-in-out"
        leave-from-class="max-h-96 opacity-100"
        leave-to-class="max-h-0 opacity-0"
      >
        <DisclosurePanel class="sm:hidden overflow-hidden mt-20">
          <div class="pb-3 pt-4 flex flex-col items-center text-white space-y-4">
            <!-- Línea superior -->
            <div class="flex w-full justify-center">
              <div class="flex w-4/5 justify-between items-start relative">
                <!-- Columna izquierda -->
                <div class="flex flex-col space-y-2 items-start">
                  <DisclosureButton as="a" href="#sec-0" class="text-base font-medium">Start</DisclosureButton>
                  <div class="w-3/4 h-px bg-white/30 ml-1"></div>
                  <DisclosureButton as="a" href="#sec-1" class="text-base font-medium">Dienstleistung</DisclosureButton>
                </div>

                <!-- Línea vertical centrada -->
                <div class="w-px bg-white/30 h-16 self-center"></div>

                <!-- Columna derecha -->
                <div class="flex flex-col space-y-2 items-end">
                  <DisclosureButton as="a" href="#sec-2" class="text-base font-medium">Jobs</DisclosureButton>
                  <div class="w-3/4 h-px bg-white/30 mr-1 self-end"></div>
                  <DisclosureButton as="a" href="#sec-3" class="text-base font-medium">Über uns</DisclosureButton>
                </div>
              </div>
            </div>

            <!-- Línea horizontal corta -->
            <div class="h-px bg-white/30 w-2/3 my-2"></div>

            <!-- Kontakt abajo -->
            <DisclosureButton as="a" href="#sec-4" class="text-base font-medium">
              Kontakt
            </DisclosureButton>
          </div>
        </DisclosurePanel>
      </Transition>
    </Disclosure>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { ref, onMounted, onUnmounted } from 'vue';

const navigation = ref([
  { name: 'Start', href: '#sec-0', current: false },
  { name: 'Dienstleistung', href: '#sec-1', current: false },
  { name: 'Jobs', href: '#sec-2', current: false },
  { name: 'Über uns', href: '#sec-3', current: false },
  { name: 'Kontakt', href: '#sec-4', current: false },
]);

const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const backgroundColor = ref('rgba(49, 61, 76, 0)');

const handleScroll = () => {
  const scrolled = window.scrollY;
  backgroundColor.value = `rgba(49, 61, 76, ${scrolled > 50 ? 1 : 0})`;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.fixed-nav-container {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: background-color 0.5s ease;
}

.logo {
  width: 80px;
  height: auto;
  margin-top: 1rem;
}
</style>