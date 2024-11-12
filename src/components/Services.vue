<template>
  <section class="services" id="servicios">
    <h2>Nuestros Servicios</h2>
    <div class="cards-container">
      <div class="tarjeta" v-for="(service, index) in services" :key="index">
        <div class="circulo-icono">
          <box-icon :name="service.icon" color='#ffffff' size="lg"></box-icon>
        </div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import 'boxicons'

const services = [
  {
    icon: 'building',
    title: 'Sistemas para Negocios',
    description: 'Ofrecemos soluciones completas en sistemas para tu negocio/rubro. Desde la implementación de sistemas de seguridad, gestión de acceso, hasta la integración de soluciones automatizadas para mejorar la eficiencia y seguridad. Adaptamos nuestras soluciones a tus necesidades específicas.'
  },
  {
    icon: 'desktop',
    title: 'Desarrollo de Paginas web',
    description: 'Desarrollamos paginas web de alta calidad, con diseños personalizados a pedido. nos especializamosen servidores y bases de datos, y, por ultimo, nos encargamos que tu pagina rapida y proactiva. Hacemos landing pages, microservicios, paneles de administración, gestion empresarial, etc.'
  },
  {
    icon: 'data',
    title: 'Administración de Bases de Datos',
    description: 'Brindamos servicios especializados en administración de bases de datos. Nos encargamos de la instalación, configuración, optimización y mantenimiento de tus bases de datos para asegurar su rendimiento y disponibilidad. Trabajamos con diversas plataformas y tecnologías para adaptarnos a tus requerimientos específicos.'
  }
]
</script>

<style scoped>
.services {
  padding: 5rem 2rem;
  background: #000000;
  color: white;
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: white;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.tarjeta {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.3s;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tarjeta:hover {
  transform: translateY(-5px);
  border-color: var(--primary-color);
}

.circulo-icono {
  width: 80px;
  height: 80px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

h3 {
  margin-bottom: 1rem;
  color: white;
}

p {
  color: #cccccc;
  line-height: 1.6;
}
</style>