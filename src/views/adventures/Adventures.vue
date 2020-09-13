<template>
  <div class="adventures-view">
    <vue-headful
      title="Buscador Aventuras || Aventura-Xperience"
      description="Tu aventura empieza aquí"
    />
    <searchform />
    <div class="container-cart-ad">
      <div class="adventures-list">
        <searchlist />
      </div>
      <div class="cart-list">
        <cart />
      </div>
    </div>
  </div>
</template>


<script>
import Adventurelist from "@/components/adventures/AdventureList.vue";
import searchform from "@/components/forms/search/SearchForm";
import searchlist from "@/components/forms/search/SearchList";
import cart from "@/components/cart/Cart.vue";

export default {
  name: "Adventures",
  components: { searchform, searchlist, cart },
};
</script>

<style scoped>
.container-cart-ad {
  display: flex;
  flex-direction: row;
}
</style>
