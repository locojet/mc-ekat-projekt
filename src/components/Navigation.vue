<template>
  <div id="nav" class="fixed-nav-container" :style="{ 'background-color': backgroundColor }">
    <Disclosure as="nav">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none hover:scale-105 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6 scale-150" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <a v-for="item in navigation" :key="item.name" @click="scrollToSection(item.href)" class="cursor-pointer text-white hover:bg-secondary2 hover:text-white rounded-md px-2 py-1 text-sm font-medium">
  {{ item.name }}
</a>


              </div>
            </div>
          </div>
          <Menu as="div" class="relative ml-3">
            <a href="index.html">
  <MenuButton>
    <img class="logo" src="../assets/logo.png" alt="Logo" />
  </MenuButton>
</a>

          </Menu>
        </div>
      </div>
      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 pb-3 pt-2">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'text-white' : 'text-white hover:bg-secondary2 hover:text-white', 'block px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">
            {{ item.name }}
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const open = ref(false);

const toggleMenu = () => {
  open.value = !open.value;
};

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ref, onMounted, onUnmounted } from 'vue';

const navigation = ref([
  { name: 'Start', href: '#sec-0', current: false },
  { name: 'Dienstleistung', href: '#sec-1', current: false },
  { name: 'Jobs', href: '#sec-2', current: false },
  { name: 'Über uns', href: '#sec-3', current: false },
  { name: 'Kontakt', href: '#sec-4', current: false },
]);

const backgroundColor = ref('rgba(49, 61, 76, 0)'); // Startfarbe mit Opazität von 50%

const handleScroll = () => {
  const scrolled = window.scrollY;
  backgroundColor.value = `rgba(49, 61, 76, ${scrolled > 50 ? 1 : 0})`; // Ändere die Opazität nach Scrollen über 50 Pixel
}

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
  z-index: 1000; /* Ensure the navigation stays on top */
  
  transition: background-color 0.5s ease; /* Smooth transition for background color changes */
}

.logo {
  width: 190px;
  height: auto;
  margin-top: 1rem;
}

/* Ensure content does not overlap under the navigation */
body {
  padding-top: 4rem;
  transition: all ease-in-out 0.5s;
}
</style>
