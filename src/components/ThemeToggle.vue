<script setup lang="ts">
import { computed, watch } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)
const themeLabel = computed(() => (isDark.value ? 'Light mode' : 'Dark mode'))

watch(
  isDark,
  (dark) => {
    document.body.dataset.theme = dark ? 'dark' : 'light'
  },
  { immediate: true },
)

const toggleTheme = () => {
  theme.change(isDark.value ? 'light' : 'dark')
}
</script>

<template>
  <v-btn
    icon
    color="surface-variant"
    variant="tonal"
    :aria-label="themeLabel"
    :title="themeLabel"
    @click="toggleTheme"
  >
    <v-icon :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'" />
  </v-btn>
</template>