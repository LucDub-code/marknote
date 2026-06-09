import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.scss'

// Roboto : light, regular, medium
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'

// Roboto Slab : light, regular, bold
import '@fontsource/roboto-slab/300.css'
import '@fontsource/roboto-slab/400.css'
import '@fontsource/roboto-slab/700.css'

// Roboto Mono : regular
import '@fontsource/roboto-mono/400.css'

createApp(App).use(createPinia()).mount('#app')