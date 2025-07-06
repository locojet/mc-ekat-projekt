<template>
  <footer class="modern-footer">
    <div class="footer-container">
      <div class="footer-columns">
        <div class="footer-column" v-for="(column, key) in columns" :key="key">
          <div class="column-header" @click="toggleColumn(key)">
            <h3>{{ $t(`footer.${key}.title`) }}</h3>
            <svg class="toggle-icon" :class="{ 'is-open': openColumn === key }" width="16" height="16" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
            </svg>
          </div>
          <transition name="slide">
            <div 
              v-show="openColumn === key" 
              class="footer-content" 
              v-html="$t(key === 'datenschutz' ? 'footer.datenschutz.privacyPolicy' : 'footer.impressum.content')"
              ref="content">
            </div>
          </transition>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>{{ $t('footer.rights_reserved_short') }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ModernFooter',
  data() {
    return {
      openColumn: null,
      columns: {
        impressum: {},
        datenschutz: {}
      }
    }
  },
  methods: {
    toggleColumn(key) {
      this.openColumn = this.openColumn === key ? null : key
    }
  }
}
</script>

<style scoped>
.modern-footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 30px 0 20px;
  font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.footer-column {
  position: relative;
}

.column-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px 0;
  user-select: none;
}

.column-header h3 {
  color: #3498db;
  margin: 0;
  font-size: 1.2rem;
  position: relative;
}

.toggle-icon {
  transition: transform 0.3s ease;
  color: #3498db;
}

.toggle-icon.is-open {
  transform: rotate(180deg);
}

.footer-content {
  overflow: hidden;
  line-height: 1.6;
  font-size: 0.9rem;
  padding-bottom: 15px;
}

.footer-content a {
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-content a:hover {
  color: #2980b9;
  text-decoration: underline;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
  font-size: 0.8rem;
  color: #bdc3c7;
}

/* Transition effects */
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.5s ease, opacity 0.3s ease;
  max-height: 1000px;
  opacity: 1;
}

.slide-enter,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

@media (max-width: 768px) {
  .footer-columns {
    grid-template-columns: 1fr;
  }
  
  .footer-column {
    margin-bottom: 10px;
  }
}
</style>