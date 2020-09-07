<template>
  <div class="aventuras-container">
    <article class="card">
      <div class="container-image-card">
        <div class="container-date">
          <p class="date">{{new Date(adventure.start_date_event) | date("dd") }}</p>
          <p class="date">{{new Date(adventure.start_date_event) | date("MMM") }}</p>
        </div>

        <img :src="staticFolder + adventure.image" alt="Imagen de la aventura" />
      </div>

      <div class="info-card">
        <h3>{{adventure.name}}</h3>
        <hr />
        <p
          :class="{ green: adventure.isAvailable ===  'Disponible', red: adventure.isAvailable === 'No disponible' }"
        >
          <strong
            :class="{ disponible: adventure.isAvailable ===  'Disponible', noDisponible: adventure.isAvailable === 'No disponible' }"
          >{{adventure.isAvailable === 'Disponible' ? '🟢' : '🔴' }} {{adventure.isAvailable}}</strong>
        </p>
        <p>{{adventure.description}}</p>
        <p>
          <i class="fas fa-users"></i>
          : {{adventure.vacancy}} /10
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i>
          {{adventure.city}} - {{adventure.country}}
        </p>
        <p>{{adventure.averageAdventure}}</p>
        <p class="price">
          {{adventure.price}} €
          <span>/persona</span>
        </p>
      </div>

      <div class="container-btn">
        <button class="btn-light">Reservar</button>
        <button class="btn-dark">Comprar</button>
      </div>
    </article>
  </div>
</template>

<script>
import { dateFilter } from "vue-date-fns";
//import locale from "date-fns/locale/es";

export default {
  name: "Adventure",
  props: {
    adventure: Object,
    index: Number,
  },
  data() {
    return {
      staticFolder: process.env.VUE_APP_STATIC,
    };
  },
  methods: {},
};
</script>

<style>
.aventuras-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card {
  display: flex;
  flex-direction: column;
  width: 20rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 4rem;
  background: #ffffff;
  border-radius: 0.2rem;
}
.container-image-card {
  width: 100%;
}
.container-date {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #fe285a;
  background-image: linear-gradient(19deg, #fe285a 0%, #ff7e9b 100%);
  height: 5rem;
  width: 4.5rem;
  border-radius: 0.25rem;
}
.container-date .date {
  line-height: 2rem;
  color: #ffffff;
  font-weight: 700;
  font-size: 2.5rem;
}
.container-date :nth-child(2) {
  font-size: 1.8rem;
}
.container-image-card img {
  width: 100%;
  border-top-right-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
}
.info-card {
  padding: 0 1.5rem;
}
.info-card h3 {
  font-size: 2rem;
  margin: 0.5rem auto;
}
hr {
  outline: none;
  border: none;
  background: #2c3e50;
  height: 1pt;
}
.info-card .fa-circle {
  color: green;
  margin-right: 0.5rem;
}
.info-card .price {
  font-size: 2rem;
  font-weight: 600;
}
.info-card .price span {
  font-size: 1rem;
  font-weight: 300;
}
.container-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.btn-light {
  color: #000000;
  background-color: transparent;
}

.btn-light:hover {
  color: #ffffff;
  background-color: #fe285a;
}
.btn-dark {
  color: #ffffff;
  background-color: #fe285a;
}
.btn-dark:hover {
  color: #000000;
  background-color: transparent;
}

/*estilos disponible*/
.green {
  color: rgb(0, 99, 0);
}

.red {
  color: rgb(160, 0, 0);
}
</style>