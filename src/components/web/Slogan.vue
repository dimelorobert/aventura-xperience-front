<template>
  <div class="slogan-container">
    <div class="slogan-main-container">
      <div class="slot-card">
        <i class="fas fa-tshirt"></i>
        <h3>Equipamiento</h3>
        
        <p>Las actividades cuentan con el equipamiento necesario para garantizar la seguridad del cliente.</p>
      </div>
      <div class="slot-card">
        <i class="fas fa-shield-alt"></i>
        <h3>Seguridad</h3>
        
        <p>Cada actividad cuenta con la supervisión de cuerpos de seguridad.</p>
      </div>
      <div class="slot-card">
        <i id="user-portada" class="fas fa-users"></i>
        <h3>Partners</h3>
        
        <p>Actualmente trabajamos con las principales empresas de turismo a nivel nacional e internacional.</p>
      </div>
      <div class="slot-card">
        <i class="fas fa-smile-beam"></i>
        <h3>Diversión</h3>
        
        <p>En cada una de las actividades te garantizamos una experiencia irrepetible .</p>
      </div>
      <div class="slot-card">
        <i class="fab fa-tripadvisor"></i>
        <h3>Calidad Tripadvisor</h3>
        
        <p>Avalados por las buenas reseñas de todos nuestros clientes en tripadvisor.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slogan",
};
</script>

<style scoped>
body {
  box-sizing: border-box;
}
.slogan-container {
  max-width: 1280px;
  margin: 0 auto;
}

.fa-tshirt,
.fa-shield-alt,
#user-portada,
.fa-smile-beam,
.fa-tripadvisor {
  color: #fe285a;
  margin: 1rem auto;
  font-size: 3.5rem;
}
@media screen and (min-width: 480px) {
  .slogan-main-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .slot-card {
    flex: 0 1 calc(50% - 1rem);
  }
}
@media screen and (min-width: 768px) {
  .slogan-main-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .slot-card {
    flex: 0 1 calc(33% - 1rem);
  }
  @media screen and (min-width: 1024px) {
  .slogan-main-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .slot-card {
    flex: 0 1 calc(20% - 1rem);
  }
}
}
</style>