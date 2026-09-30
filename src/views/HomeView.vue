<script setup lang="ts">
import profilePhoto from '../assets/andy-fitts.jpg'
import LinkButton from '../components/LinkButton.vue'
import MainNavigation from '../components/MainNavigation.vue'
import ProfileHeader from '../components/ProfileHeader.vue'
import ThemeToggle from '../components/ThemeToggle.vue'

const links = [
  { label: 'Portfolio', url: 'https://andyfitts.dev', icon: 'mdi-open-in-new' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/andyfitts', icon: 'mdi-linkedin' },
  { label: 'Email', url: 'mailto:andyfitts@gmail.com', icon: 'mdi-email' },
]

</script>

<template>
  <v-container fluid class="fill-height py-8">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" md="7" lg="5" xl="4">
        <v-card class="mx-auto pa-6 pa-sm-8 text-center" max-width="480" rounded="xl" elevation="8">
          <header class="d-flex align-center justify-space-between ga-2 mb-6">
            <ThemeToggle />
            <MainNavigation />
          </header>

          <ProfileHeader
            initials="AF"
            name="Andy Fitts"
            tagline="Product-minded designer and developer building thoughtful digital experiences."
            :photo-url="profilePhoto"
          />

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
