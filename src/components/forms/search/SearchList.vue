<template>
  <section class="search-list">
    <div class="conatiner-search-list">
      <h2>
        Aventuras disponibles
        <b>{{filteredAdventures.length}}</b>
      </h2>
    </div>

    <!-- FILTRADO DE LA BUSQUEDA DE AVENTURAS -->
    <div class="adventure-search-list">
      <div v-for="adventure in filteredAdventures" :key="adventure.id" class="adventure-name">
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
              <button class="btn-dark" @click="$emit('addToCart', adventure)">Comprar</button>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import adventure from "@/components/adventures/Adventure.vue";
export default {
  data() {
    return {
      staticFolder: process.env.VUE_APP_STATIC,
    };
  },
  components: {
    adventure,
  },
  created() {
    this.getAdventures();
  },
  computed: {
    ...mapGetters("adventuresMod", ["filteredAdventures"]),
    ...mapState("adventuresMod", ["adventures"]),
  },
  methods: {
    ...mapActions("adventuresMod", ["getAdventures"]),

    available(boolean) {
      return boolean ? "Si" : "No";
    },
    location(city) {
      return `city: ${city}`;
    },
  },
};
</script>

<style scoped>
</style>