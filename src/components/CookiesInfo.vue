<template>
  <div class="cookie-details-overlay">
    <div class="cookie-details-modal">
      <h2>{{ $t('cookieDetails.detailsTitle') }}</h2>

      <p>{{ $t('cookieDetails.intro') }}</p>

      <h3>{{ $t('cookieDetails.essentialTitle') }}</h3>
      <p>{{ $t('cookieDetails.essentialText') }}</p>

      <h3>{{ $t('cookieDetails.statsTitle') }}</h3>
      <p>{{ $t('cookieDetails.statsText') }}</p>

      <h3>{{ $t('cookieDetails.marketingTitle') }}</h3>
      <p>{{ $t('cookieDetails.marketingText') }}</p>

      <h3>{{ $t('cookieDetails.privacyTitle') }}</h3>
      <p>{{ $t('cookieDetails.privacyText') }}</p>

      <div class="close-btn-container">
        <button @click="$emit('close')">{{ $t('cookieDetails.close') }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookiePopupDetails'
}
</script>

<style scoped>
.cookie-details-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10001;
}

.cookie-details-modal {
  background-color: #fff;
  color: #333;
  max-width: 600px;
  width: 90%;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
  overflow-y: auto;
  max-height: 80vh;
}

.cookie-details-modal h2 {
  margin-bottom: 1rem;
  font-weight: 700;
  color: #0073ff;
}

.cookie-details-modal h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.cookie-details-modal p {
  line-height: 1.5;
  color: #444;
}

.close-btn-container {
  margin-top: 2rem;
  text-align: right;
}

.close-btn-container button {
  background-color: #0073ff;
  border: none;
  padding: 0.5rem 1.5rem;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.close-btn-container button:hover {
  background-color: #005bb5;
}
</style>