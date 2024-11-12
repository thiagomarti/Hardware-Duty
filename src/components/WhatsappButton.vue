<template>
  <a href="https://wa.me/541123741777?text=Hola%20estoy%20interesado%20en%20uno%20de%20sus%20servicios!" class="whatsapp-button" target="_blank">
    <box-icon type='logo' name='whatsapp' color='#ffffff' size="lg"></box-icon>
  </a>
</template>

<script setup>
import 'boxicons'
</script>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: #25D366;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
  z-index: 1000;
}

.whatsapp-button:hover {
  transform: scale(1.1);
}
</style>