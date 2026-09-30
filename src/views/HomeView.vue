<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import LinkButton from '../components/LinkButton.vue'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)
const themeLabel = computed(() => (isDark.value ? 'Light mode' : 'Dark mode'))

const links = [
  { label: 'Portfolio', url: 'https://andyfitts.dev', icon: 'mdi-open-in-new' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/andyfitts', icon: 'mdi-linkedin' },
  { label: 'Email', url: 'mailto:andyfitts@gmail.com', icon: 'mdi-email' },
]

const toggleTheme = () => {
  theme.change(isDark.value ? 'light' : 'dark')
}
</script>

<template>
  <v-container fluid class="fill-height py-8">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" md="7" lg="5" xl="4">
        <v-card class="mx-auto pa-6 pa-sm-8 text-center" max-width="480" rounded="xl" elevation="8">
          <header class="d-flex align-center justify-space-between ga-2 mb-6">
            <v-btn color="surface-variant" variant="tonal" @click="toggleTheme">
              <v-icon :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'" start />
              {{ themeLabel }}
            </v-btn>

            <nav aria-label="Main navigation">
              <v-btn to="/" variant="text">Home</v-btn>
              <v-btn to="/about" variant="text">About</v-btn>
            </nav>
          </header>

          <v-avatar color="primary" size="112" class="mb-4">
            <span class="text-h4 font-weight-bold">AF</span>
          </v-avatar>

          <p class="text-overline text-medium-emphasis mb-1">Hey, I’m</p>
          <h1 class="text-h3 font-weight-bold mb-3">Andy Fitts</h1>
          <p class="text-body-1 text-medium-emphasis mx-auto">
            Product-minded designer and developer building thoughtful digital experiences.
          </p>

          <nav class="d-flex flex-column ga-3 mt-6" aria-label="Social links">
            <LinkButton
              v-for="link in links"
              :key="link.label"
              :label="link.label"
              :url="link.url"
              :icon="link.icon"
            />
          </nav>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
