<template>
  <nav class="navbar">
    <div class="logo">
      <img src="../assets/HardStack.png" alt="Hardstack Logo" />
    </div>
    <div class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="nav-links" :class="{ active: isMenuOpen }">
      <a href="#inicio" @click="closeMenu">Inicio</a>
      <a href="#servicios" @click="closeMenu">Servicios</a>
      <a href="#nosotros" @click="closeMenu">Nosotros</a>
      <a href="https://www.instagram.com/hardstack.arg" target="_blank" class="social-icon">
        <box-icon type='logo' name='instagram' color='#ffffff'></box-icon>
      </a>
      <a href="mailto:hardstack.arg@gmail.com" class="social-icon">
        <box-icon name='envelope' color='#ffffff'></box-icon>
      </a>
    </div>
  </nav>
</template>

<script setup>
import 'boxicons'
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
}

.logo img {
  height: 5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--primary-color);
}

.social-icon {
  display: flex;
  align-items: center;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 2px;
  background-color: white;
  transition: all 0.3s ease-in-out;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }

  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(8px, -8px);
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.95);
    flex-direction: column;
    justify-content: center;
    transition: right 0.3s ease-in-out;
    padding: 2rem;
  }

  .nav-links.active {
    right: 0;
  }

  .nav-links a {
    font-size: 1.2rem;
    padding: 1rem 0;
  }
}
</style>