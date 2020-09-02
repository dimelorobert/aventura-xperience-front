<template>
  <section class="full-content">
    <div class="title">
      
      <blockquote cite="https://psicologiaymente.com/reflexiones/frases-experiencia"><p>La experiencia no es lo que te sucede, sino lo que haces con lo que te sucede</p> </blockquote><br><h1>¡ Vive tu aventura!</h1>
      <br>
      <div class="container-btn">
            <button class="btn-dark">Buscar mi aventura</button>
          </div>
    </div>
    <img src="http://localhost:8080/media/parallax-image.jpg" alt="Parallax Imagen" />
  </section>
</template>

<script>
export default {
  name: "FullWidthContent",
};
</script>

<style scoped>
.full-content img {
  max-width: 100%;
  min-height: inherit;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  font-family: "object-fit: cover;";
  background-repeat: no-repeat;
}
.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  color: white;
  height: 550px;
  padding-bottom: 5rem;
  padding-left: 10rem;
}
.title h1 {
  font-size: 3rem;
  color: #050023 ;
  cursor: pointer;
}
.title h1:hover {
  color: #FE285A;
}
.title p {
  font-size: 1.2rem;
  color: #050023;
}
/*boton*/

ç.container-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-dark {
  display: inline-flex;
  color: #ffffff;
  background-color: #fe285a;
  margin: 1rem auto;
  padding: 0 1.5rem;
}
.btn-dark:hover {
  color: #000000;
  background-color: transparent;
}
</style>