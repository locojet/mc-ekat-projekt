
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import i18n from './i18n' // 👈 añadimos i18n

AOS.init()

const app = createApp(App)

app.use(i18n) // 👈 activamos i18n
app.mount('#app')




  
