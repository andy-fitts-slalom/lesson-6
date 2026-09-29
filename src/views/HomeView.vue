<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const theme = ref<'dark' | 'light'>('dark')

const themeLabel = computed(() => (theme.value === 'dark' ? 'Light mode' : 'Dark mode'))

const links = [
  { label: 'Portfolio', href: 'https://andyfitts.dev', icon: '↗', accent: 'portfolio' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'in', accent: 'linkedin' },
  { label: 'Email', href: 'mailto:andy@fitts.dev', icon: '✉', accent: 'email' },
]

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

watch(
  theme,
  (value) => {
    document.body.dataset.theme = value
  },
  { immediate: true },
)
</script>

<template>
  <main class="page-shell">
    <div class="card">
      <button class="theme-toggle" type="button" @click="toggleTheme" :aria-label="themeLabel">
        <span class="toggle-icon">{{ theme === 'dark' ? '☀' : '☾' }}</span>
        {{ themeLabel }}
      </button>

      <div class="profile-ring">
        <div class="profile-photo">AF</div>
      </div>

      <div class="intro">
        <p class="eyebrow">Hey, I’m</p>
        <h1>Andy Fitts</h1>
        <p class="tagline">
          Product-minded designer and developer building thoughtful digital experiences.
        </p>
      </div>

      <nav class="link-list" aria-label="Social links">
        <a
          v-for="link in links"
          :key="link.label"
          class="link-button"
          :class="link.accent"
          :href="link.href"
          target="_blank"
          rel="noreferrer"
        >
          <span class="button-icon">{{ link.icon }}</span>
          <span>{{ link.label }}</span>
        </a>
      </nav>
    </div>
  </main>
</template>
