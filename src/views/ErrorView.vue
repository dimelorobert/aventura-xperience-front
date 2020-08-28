<template>
  <section class="error">
    <vue-headful title="Pagina No Encontrada || Aventura-Xperience" description="Tu aventura empieza aquí" />
    <div class="flex">
      <section class="page_404">
        <div class="title">
          <h1>404</h1>
        </div>
        <figure class="error-page-bg"></figure>
        <div class="subtitle">
          <h2>Pareces que te has perdido!</h2>
        </div>
        <div class="advice">
          <p>La pagina que estas buscando no esta disponible</p>
          <br />
        </div>
        <br />
        <div class="container-button">
          <a href="/" class="btn-grad">
            <i class="far fa-arrow-alt-circle-left"></i> Volver a Inicio
          </a>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400&display=swap");

.error {
  height: calc(100vh - 270px);
}
.title h1 {
  font-size: 4rem;
  font-family: "Arvo", serif;
  font-weight: 400;
  text-align: center;
}

.subtitle h2 {
  font-family: "Arvo", serif;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
}

.error-page-bg {
  background-image: url("https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif");
  background-repeat: no-repeat;
  background-position: center center;
  height: 280px;
  width: 100%;
}
.advice {
  margin: 1rem 1rem 0 1rem;
  text-align: center;
}
.btn-grad {
  text-decoration: none;
  background-image: linear-gradient(
    to right,
    #f857a6 0%,
    #ff5858 51%,
    #f857a6 100%
  );
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  color: #fff;
  margin-top: 1rem;
  font-weight: 600;
  outline: none;
  border: none;
  font-size: 1.5rem;
}
.btn-grad:hover {
  background-image: linear-gradient(
    to right,
    #ff238d 0%,
    #ff4b4b 51%,
    #ff1586 100%
  );
}
.container-button {
  text-align: center;
}
.fa-arrow-alt-circle-left {
  color: #fff;
}
</style>