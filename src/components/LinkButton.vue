<script setup lang="ts">
defineProps<{
  label: string
  url: string
  icon: string
}>()
</script>

<template>
  <v-btn
    :href="url"
    target="_blank"
    rel="noreferrer"
    size="large"
    variant="tonal"
    color="primary"
    block
  >
    <v-icon :icon="icon" start size="small" />
    {{ label }}
  </v-btn>
</template>