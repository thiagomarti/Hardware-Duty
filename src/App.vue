<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import About from './components/About.vue'
import WhatsappButton from './components/WhatsappButton.vue'
</script>

<template>
  <div class="app">
    <Navbar />
    <Hero />
    <Services />
    <About />
    <WhatsappButton />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  font-family: Inter, system-ui, sans-serif;
}
</style>