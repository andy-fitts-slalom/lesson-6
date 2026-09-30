<script setup lang="ts">
import MainNavigation from '../components/MainNavigation.vue'
import ThemeToggle from '../components/ThemeToggle.vue'
</script>

<template>
  <main class="about-shell">
    <v-card class="about-card" max-width="760" rounded="xl" elevation="16">
      <header class="about-header">
        <ThemeToggle />
        <MainNavigation />
      </header>

      <div class="about-content">
        <p class="eyebrow">About</p>
        <h1>I design enterprise software, then I help build it.</h1>

        <p>
          I'm a product designer who delivers code. At Slalom, I partner with client teams on
          data-heavy internal platforms, where a single screen can hold hundreds of records, a
          dozen filters and a search language most users will never learn. My job is to make that
          power feel approachable without taking any of it away.
        </p>

        <p>
          I don't hand off a spec and walk away. I prototype in the real codebase, test against
          real data and stay in the conversation with engineers until the design ships.
        </p>

        <h2>A few things I believe about the work:</h2>
        <ul>
          <li>Complexity should be earned, not removed. Expert users need power.</li>
          <li>Show options before code. I bring two or three directions and a recommendation.</li>
          <li>Design with realistic data. A mockup with five tidy rows hides what 500 messy ones will expose.</li>
          <li>Separate what's decided from what's preferred and what's still open.</li>
          <li>Small, reviewable changes beat big reveals.</li>
        </ul>

        <p>
          Lately, much of my energy goes into designing with and for AI: natural-language
          interfaces that translate plain questions into precise queries, and agent-based workflows
          that let a small team move like a much bigger one.
        </p>

        <h2>Beyond work</h2>

        <h3>Songwriting</h3>
        <p>
          I write and record songs. Making music has taught me a lot about rhythm, iteration and
          the difference between something that technically works and something that feels right.
        </p>

        <h3>Curious reader and listener</h3>
        <p>
          I'm always in the middle of a podcast or a long read, usually about music, politics,
          faith and consciousness, or parenting. I save the best moments into a personal wiki so
          ideas can connect over time instead of disappearing.
        </p>

        <h3>Cooking, gardening and family</h3>
        <p>
          When I'm not at a keyboard, I'm usually cooking, working in the garden or spending time
          with my family. Being a parent keeps me honest about what “intuitive” really means.
        </p>

        <div class="contact-box">
          <h2>Let's make something complicated feel simple.</h2>
          <p>
            I'm always glad to talk about UX, product strategy, design engineering or putting AI
            to work in real products.
          </p>
          <p>
            <a href="https://linkedin.com/in/andyfitts">Connect on LinkedIn</a>
            <span>·</span>
            <a href="mailto:andyfitts@gmail.com">andyfitts@gmail.com</a>
          </p>
        </div>

        <p class="footer">Andy Fitts · Design, product, AI and the occasional song.</p>
      </div>
    </v-card>
  </main>
</template>

<style scoped>
.about-shell {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.5rem 1rem 3rem;
}

.about-card {
  background: var(--card);
  border: 1px solid var(--card-border);
  box-shadow: 0 25px 70px var(--shadow);
  padding: 1.25rem 1.1rem 1.5rem;
}

.about-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.about-content {
  color: var(--text);
  line-height: 1.75;
}

.about-content h1 {
  margin: 0.2rem 0 1rem;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.06em;
  line-height: 1.1;
}

.about-content h2 {
  margin-top: 2rem;
  font-size: 1.3rem;
  line-height: 1.3;
}

.about-content h3 {
  margin-top: 1.2rem;
  margin-bottom: 0.35rem;
  font-size: 1.1rem;
}

.about-content p,
.about-content li {
  color: var(--muted);
  font-size: 1rem;
}

.about-content ul {
  padding-left: 1.2rem;
  margin: 1rem 0 1.5rem;
}

.contact-box {
  margin-top: 2rem;
  padding: 1.25rem;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 18px;
  background: rgba(148, 163, 184, 0.04);
}

.contact-box h2 {
  margin-top: 0;
}

.contact-box a {
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
}

.footer {
  margin-top: 1.5rem;
  font-size: 0.95rem;
  color: var(--muted);
}

@media (max-width: 520px) {
  .about-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .about-card {
    padding: 1rem 0.9rem 1.2rem;
  }
}
</style>
