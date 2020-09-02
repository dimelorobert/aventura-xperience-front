<template>
  <div class="best">
    <div class="best-container">
      <div class="best-main-container">
        <div class="slot-card">
          <!-- <iframe
            src="https://www.youtube.com/embed/l9m4cW2yxy0?start=13"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          /> -->
        </div>
        <div class="slot-card">
          <h2>Bungee Jumping</h2>
          <h3>¿Sabes que és?</h3>
          <p>El puenting o la forma inglesa bungee jumping, adaptado al español como puentismo, es una actividad en la cual una persona se lanza desde una altura elevada, con uno de los puntos de la cuerda elástica atada al torso o al tobillo, y el otro extremo sujetado al punto de partida del salto. Cuando la persona salta, la cuerda se extenderá para contrarrestar la inercia provocada por la aceleración de la gravedad en la fase de la caída, entonces el sujeto ascenderá y descenderá hasta que la energía inicial del salto desaparezca.</p>
          <div class="container-button">
            <button class="btn-dark">Me atrevo!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  box-sizing: border-box;
}
.best {
  width: 100%;
  background-color: #050023;
  padding: 0.5rem;
  margin: 1rem 0;
}
.best-container {
  max-width: 1280px;
  margin: 2rem auto;
}
.slot-card h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
}
.slot-card h3 {
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.slot-card p {
  font-size: 1rem;
  color: #ffffff;
}
.slot-card iframe {
  max-width: 100%;
  width: 100%;
  height: 100%;
  margin: auto 0;
}

@media screen and (min-width: 480px) {
  .best-main-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .slot-card {
    flex: 0 1 calc(50% - 1rem);
  }
}
.container-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-dark {
  display: inline-flex;
  color: #ffffff;
  background-color: #fe285a;
  margin: 1rem auto 0 auto;
}
.btn-dark:hover {
  color: #ffffff;
  background-color: transparent;
}
</style>