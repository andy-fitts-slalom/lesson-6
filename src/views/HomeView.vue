<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)
const themeLabel = computed(() => (isDark.value ? 'Light mode' : 'Dark mode'))

const links = [
  { label: 'Portfolio', href: 'https://andyfitts.dev', icon: 'mdi-open-in-new', accent: 'portfolio' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andyfitts', icon: 'mdi-linkedin', accent: 'linkedin' },
  { label: 'Email', href: 'mailto:andyfitts@gmail.com', icon: 'mdi-email', accent: 'email' },
]

const toggleTheme = () => {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <main class="page-shell">
    <v-card class="card" max-width="480" rounded="xl" elevation="16">
      <div class="top-row">
        <v-btn color="surface-variant" variant="tonal" @click="toggleTheme" class="theme-toggle">
          <v-icon :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'" start />
          {{ themeLabel }}
        </v-btn>

        <nav class="top-nav" aria-label="Main navigation">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>

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
        <v-btn
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noreferrer"
          size="large"
          class="link-button"
          :class="link.accent"
          variant="tonal"
          block
          :prepend-icon="link.icon"
        >
          {{ link.label }}
        </v-btn>
      </nav>
    </v-card>
  </main>
</template>

<style scoped>
.page-shell {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.5rem 1rem 3rem;
}

.card {
  background: var(--card);
  border: 1px solid var(--card-border);
  backdrop-filter: blur(18px);
  box-shadow: 0 25px 70px var(--shadow);
  padding: 1.25rem 1.1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.top-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
}

.theme-toggle {
  min-width: 0;
  font-weight: 600;
}

.top-nav {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.84rem;
}

.top-nav a {
  color: var(--text);
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.top-nav a:hover,
.top-nav a.router-link-active {
  opacity: 1;
}

.profile-ring {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, #60a5fa, #c084fc, #f9a8d4);
  margin-top: 1.25rem;
  box-shadow: 0 18px 40px rgba(96, 165, 250, 0.28);
}

.profile-photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.78));
  color: #f8fbff;
  display: grid;
  place-items: center;
  font-size: 2rem;
  font-weight: 700;
}

.intro {
  margin-top: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.eyebrow {
  margin: 0;
  font-size: 0.78rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 2.8rem);
  letter-spacing: -0.06em;
  line-height: 1.1;
}

.tagline {
  margin: 0;
  max-width: 30ch;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.6;
}

.link-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  margin-top: 1.6rem;
}

.link-button {
  font-weight: 600;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.link-button:hover {
  transform: translateY(-2px);
}

.link-button.portfolio {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.14), rgba(168, 85, 247, 0.14));
}

.link-button.linkedin {
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.12), rgba(45, 212, 191, 0.12));
}

.link-button.email {
  background: linear-gradient(135deg, rgba(244, 114, 182, 0.12), rgba(251, 191, 36, 0.12));
}

@media (max-width: 520px) {
  .top-row {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
