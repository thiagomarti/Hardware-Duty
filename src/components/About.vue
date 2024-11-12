<template>
  <section class="about" id="nosotros">
    <div class="about-card">
      <h2>¿Quienes somos?</h2>
      <p>El equipo de Hard Stack se compone de los mejores estudiantes de informática y ciencias de la computacion, contando con altos conocimientos en hardware y software, armados de pc y desarrollo. Estos apasionados jóvenes forman un grupo cohesionado que comparte el objetivo de poder servir a la gente con sus conocimientos en el area de la informatica.</p>
    </div>
  </section>
</template>

<style scoped>
.about {
  min-height: 100vh;
  background-image: url('https://external-content.duckduckgo.com/iu/?u=https://ct101.commons.gc.cuny.edu/wp-content/blogs.dir/13027/files/2020/11/cyberpunk-gif.gif&f=1&nofb=1&ipt=0bcd570c975a4b4ff75a90782eb8dc0fe4e66652d009c7726463eef18eaba2e6&ipo=images');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.about-card {
  background: rgba(27, 6, 59, 0.825);
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 15px;
  max-width: 800px;
  text-align: center;
}

h2 {
  color: white;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
}

p {
  color: #cccccc;
  line-height: 1.8;
  font-size: 1.1rem;
}
</style>