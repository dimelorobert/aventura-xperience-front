<template>
  <div v-if="adventures.length" class="adventure-list">
    <vue-headful title="Aventuras || Aventura-Xperience" description="Tu aventura empieza aquí" />
    <div class="searcher">
      <searchform/>
      <searchlist/>
    </div>
    

    <paginate name="adventures" :list="adventures" :per="perPage">
      <div class="adventure-for-container">
        <adventure
        v-for="adventure in paginated('adventures')"
        :key="adventure.id"
        :adventure="adventure"
        @addToCart="addAdventureToCart"
      />
      </div>
      
    </paginate>
    <div class="page-links">
      <paginate-links
        for="adventures"
        :classes="{
     'ul': 'pagination',
     'li': 'page-item',
     'li > a':'page-link',
     }"
      ></paginate-links>
    </div>
  </div> 

  <div v-else>
    <p>No hay productos para mostrar</p>
  </div>
</template>
.

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import VuePaginate from "vue-paginate";
import adventure from "@/components/adventures/Adventure";
import searchform from '@/components/forms/search/SearchForm'
import searchlist from '@/components/forms/search/SearchList'
import cart from "@/components/cart/Cart";
import adventureList from '@/components/adventures/AdventureList';

export default {
  name: "AdventureList",
  components: { VuePaginate, adventure, cart, searchform, searchlist, adventureList },
  data() {
    return {
      paginate: ["adventures"],
      perPage: 5,
    };
  },
  
  created() {
    this.getAdventures();
  },
  computed: {
    ...mapState("adventuresMod", ["adventures"]),
  },
  methods: {
    ...mapActions("adventuresMod", ["getAdventures"]),
    ...mapMutations("cartMod", ["addAdventure"]),
    
    addAdventureToCart(adventure) {
      this.addAdventure(adventure);
    },
  },
};
</script>

<style scoped>
.page-links ul {
     display: inline-flex;
     flex-direction: row;
     list-style: none;
}
.adventure-for-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>