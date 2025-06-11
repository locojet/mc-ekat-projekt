<template>
    <div>
      <button @click="showDetails = true">{{ $t('cookiePopup.showDetailsButton') }}</button>
      <CookiePopupDetails v-if="showDetails" @close="showDetails = false" />
    </div>
  </template>
  
  <script>
  import CookiePopupDetails from './CookiePopupDetails.vue'
  
  export default {
    components: { CookiePopupDetails },
    data() {
      return {
        showDetails: false
      }
    }
  }
  </script>