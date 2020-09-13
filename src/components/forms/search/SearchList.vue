<template>
  <section class="search-list">
    <div class="container-search-list">
      <h2>
        Busqueda con
        <b>{{filteredAdventures.length}}</b>
        resultado(s)
      </h2>
    </div>

    

    <!-- FILTRADO DE LA BUSQUEDA DE AVENTURAS -->
    <div class="adventure-search-list">
      <div v-for="adventure in filteredAdventures" :key="adventure.id" class="adventure-name">
        <adventure :adventure="adventure" @addToCart="addAdventureToCart" />
      </div>

      <!-- PAGINADO -->

      <!-- <paginate name="filteredAdventures" :list="filteredAdventures" :per="perPage">
        <div class="adventure-for-container">
          <adventure
            class="animate__animated animate__pulse"
            v-for="adventure in paginated('filteredAdventures')"
            :key="adventure.id"
            :adventure="adventure"
            @addToCart="addAdventureToCart"
          />
        </div>
      </paginate>
      <div class="page-links">
        <paginate-links
          for="filteredAdventures"
          :classes="{
     'ul': 'pagination',
     'li': 'page-item',
     'li > a':'page-link',
     }"
        ></paginate-links> 
      </div>-->
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
import adventure from "@/components/adventures/Adventure.vue";
import VuePaginate from "vue-paginate";
export default {
  data() {
    return {
      paginate: ["filteredAdventures"],
      perPage: 10,
      staticFolder: process.env.VUE_APP_STATIC,
    };
  },
  components: {
    adventure,
    VuePaginate,
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
    ...mapMutations("cartMod", ["addAdventure"]),

    addAdventureToCart(adventure) {
      this.addAdventure(adventure);
    },
  },
};
</script>

<style scoped>
.search-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 1rem;
}
.adventure-search-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.adventure-search-list ul .adventure-for-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.container-search-list {
  margin: 3rem;
}
.container-search-list h2 {
  font-size: 2rem;
}
</style>