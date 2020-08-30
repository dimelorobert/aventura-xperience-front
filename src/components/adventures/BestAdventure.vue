<template>
  <section class="best">
    <div class="container-best">
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/l9m4cW2yxy0?start=13"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="text">
        <h2>Bungee Jumping</h2>
        <h3>¿Sabes que és?</h3>
        <p>El puenting o la forma inglesa bungee jumping, adaptado al español como puentismo, es una actividad en la cual una persona se lanza desde una altura elevada, con uno de los puntos de la cuerda elástica atada al torso o al tobillo, y el otro extremo sujetado al punto de partida del salto. Cuando la persona salta, la cuerda se extenderá para contrarrestar la inercia provocada por la aceleración de la gravedad en la fase de la caída, entonces el sujeto ascenderá y descenderá hasta que la energía inicial del salto desaparezca.</p>
        <div class="container-button">
           <button class="btn-grad">Me atrevo!</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.best {
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ff7072 100%
  );
  padding: 4rem;
}
.container-best {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1366px;
  margin: 0 auto;
}
.text {
  width: 50%;
}
.text h2 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}
.text h3 {
  font-size: 1.5rem;
  margin-bottom: .5rem;
}
.text p {
  font-size: 1rem;
  line-height: 1.5rem;
}
.container-button {
   display: flex;
   justify-content: center ;
}
</style>