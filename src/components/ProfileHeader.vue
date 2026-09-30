<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  initials: string
  name: string
  tagline: string
  photoUrl?: string
}>()

const imageFailed = ref(false)

watch(() => props.photoUrl, () => {
  imageFailed.value = false
})
</script>

<template>
  <v-avatar color="primary" size="112" class="mb-4">
    <v-img
      v-if="props.photoUrl && !imageFailed"
      :src="props.photoUrl"
      :alt="`${props.name} profile photo`"
      cover
      @error="imageFailed = true"
    />
    <span v-else class="text-h4 font-weight-bold">{{ props.initials }}</span>
  </v-avatar>

  <p class="text-overline text-medium-emphasis mb-1">Hey, I’m</p>
  <h1 class="text-h3 font-weight-bold mb-3">{{ props.name }}</h1>
  <p class="text-body-1 text-medium-emphasis mx-auto">
    {{ props.tagline }}
  </p>
</template>