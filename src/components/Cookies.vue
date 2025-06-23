<template>
  <div v-if="showPopup" class="cookie-popup">
    <div class="cookie-box">
      <h2>{{ $t('cookiePopup.title') }}</h2>
      <p>
        {{ $t('cookiePopup.message') }}
        <a href="#" @click.prevent="showCookiePolicy = true" class="cookie-link">
          {{ $t('cookiePopup.moreInfo') }}
        </a>
      </p>
      <div class="buttons">
        <button @click="acceptCookies">{{ $t('cookiePopup.accept') }}</button>
        <button @click="rejectCookies">{{ $t('cookiePopup.reject') }}</button>
      </div>
    </div>

    <!-- Popup de política -->
    <div v-if="showCookiePolicy" class="cookie-policy-popup">
      <div class="policy-content">
        <button @click="showCookiePolicy = false" class="close-policy">×</button>
        <h3>{{ $t('cookiePopup.policy.title') }}</h3>
        <div class="policy-text">
          <p>{{ $t('cookiePopup.policy.intro') }}</p>
          
          <h4>{{ $t('cookiePopup.policy.typesTitle') }}</h4>
          <ul>
            <li>{{ $t('cookiePopup.policy.types.necessary') }}</li>
            <li>{{ $t('cookiePopup.policy.types.analytics') }}</li>
            <li>{{ $t('cookiePopup.policy.types.marketing') }}</li>
          </ul>

          <h4>{{ $t('cookiePopup.policy.controlTitle') }}</h4>
          <p>{{ $t('cookiePopup.policy.control') }}</p>

          <h4>{{ $t('cookiePopup.policy.privacyTitle') }}</h4>
          <p>{{ $t('cookiePopup.policy.privacyText') }}</p>
          <p>{{ $t('cookiePopup.policy.contactText') }} info@mcekat.de</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookiePopup',
  data() {
    return {
      showPopup: false,
      showCookiePolicy: false
    }
  },
  mounted() {
    if (!localStorage.getItem('cookieConsent')) {
      this.showPopup = true;
    }
  },
  methods: {
    acceptCookies() {
      localStorage.setItem('cookieConsent', 'accepted');
      this.showPopup = false;
    },
    rejectCookies() {
      localStorage.setItem('cookieConsent', 'rejected');
      this.showPopup = false;
    }
  }
}
</script>

<style scoped>

h3{
  margin-top: 3rem;
}
.cookie-popup {
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background-color: #313d4c;
  color: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 10000;
  max-width: 95%;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  font-family: system-ui, sans-serif;
}

.cookie-box {
  max-width: 600px;
  text-align: center;
  margin: 0 auto;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  min-width: 120px;
}

button:first-child {
  background-color: #ffffff;
  color: #313d4c;
}

button:last-child {
  background-color: #f9f9f9;
  color: #313d4c;
}

.cookie-link {
  color: #ffffff;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s;
}

.cookie-link:hover {
  color: #0073ff;
}

.cookie-policy-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.7);
  z-index: 10001;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.policy-content {
  background-color: #313d4c;
  padding: 30px;
  border-radius: 8px;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  color: white;
  box-shadow: 0 4px 20px rgba(0,0,0,0.25);
  
}

.close-policy {
  position: absolute;
  top: 20px; /* Aumentado de 15px a 20px */
  left: 25px; /* Aumentado de 20px a 25px */
  font-size: 24px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  z-index: 2;
  width:1px;
}

.policy-text {
  text-align: left;
  line-height: 1.6;
}

.policy-text h4 {
  margin: 20px 0 10px;
  color: #fff;
  font-size: 18px;
}

.policy-text ul {
  padding-left: 20px;
  margin: 10px 0;
}

.policy-text li {
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .cookie-popup {
    left: 10px;
    right: 10px;
    padding: 15px;
  }
  .buttons {
    flex-direction: column;
    gap: 10px;
  }
  button {
    width: 100%;
  }
}
</style>