<template>
    <div v-if="showPopup" class="cookie-popup">
      <div class="cookie-box">
        <h2>🍪 Cookies & Datenschutz</h2>
        <p>
          Diese Seite verwendet Cookies, um deine Erfahrung zu verbessern. Akzeptierst du sie? 
          <a href="#sec-cookies" target="_blank" class="cookie-link">Mehr Informationen</a>
        </p>
        <div class="buttons">
          <button @click="acceptCookies">Akzeptieren</button>
          <button @click="rejectCookies">Ablehnen</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CookiePopup',
  data() {
    return {
      showPopup: false
    }
  },
  mounted() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      this.showPopup = true;
    }
  },
  methods: {
    acceptCookies() {
      localStorage.setItem('cookieConsent', JSON.stringify({
        accepted: true,
        timestamp: new Date().toISOString()
      }));
      this.showPopup = false;
    },
    rejectCookies() {
      localStorage.setItem('cookieConsent', JSON.stringify({
        accepted: false,
        timestamp: new Date().toISOString()
      }));
      this.showPopup = false;
    }
  }
}
</script>

<style scoped>
.cookie-popup {
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background-color: #313d4c;
  color: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cookie-box {
  max-width: 600px;
  text-align: center;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 1rem;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
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
  font-weight: normal;
  cursor: pointer;
}

.cookie-link:hover {
  color: #0073ff; /* Hover-Farbe */
}
</style>
