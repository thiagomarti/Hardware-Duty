<template>
  <section class="hero">
    <div class="hero-content">
      <h1>¿Queres saltar al siguiente nivel?</h1>
      <p>Los mejores servicios en Software y Hardware, a la distancia de un click.</p>
      <a href="#contacto" class="cta-button">
        <span class="button__icon-wrapper">
          <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
            <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
          </svg>
          <svg class="button__icon-svg button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
            <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
          </svg>
        </span>
        Contactanos
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 100vh;
  background-image: url('https://www.gifcen.com/wp-content/uploads/2022/04/wallpaper-gif-4.gif');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.hero-content {
  position: relative;
  color: white;
  max-width: 800px;
  padding: 2rem;
}

h1 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 0.9rem;
  transition: background 0.3s;
}

.button__icon-wrapper {
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  position: relative;
  color: var(--primary-color);
  background-color: #fff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.cta-button:hover {
  background-color:#440574;
  color: #ffffff;
}

.cta-button:hover .button__icon-wrapper {
  color: #000;
}

.button__icon-svg--copy {
  position: absolute;
  transform: translate(-150%, 150%);
}

.cta-button:hover .button__icon-svg:first-child {
  transition: transform .3s ease-in-out;
  transform: translate(150%, -150%);
}

.cta-button:hover .button__icon-svg--copy {
  transition: transform .3s ease-in-out .1s;
  transform: translate(0);
}
</style>