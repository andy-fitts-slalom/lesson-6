import './assets/main.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          background: '#07111f',
          surface: '#0f172a',
          primary: '#60a5fa',
          secondary: '#c084fc',
          accent: '#f9a8d4',
          text: '#e5eefb',
          muted: '#a4b3c8',
        },
      },
      light: {
        colors: {
          background: '#edf4ff',
          surface: '#ffffff',
          primary: '#2563eb',
          secondary: '#7c3aed',
          accent: '#ec4899',
          text: '#0f172a',
          muted: '#475569',
        },
      },
    },
  },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
