<template>
  <div v-if="!cart.length" class="cart">

  </div>
  <div v-else>
       <p>Carrito vacio</p>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";
export default {
     data() {
          return {
               fields: ['name', 'qty', 'price', 'actions']
          }
     },
     computed: {
          ...mapState("cartMod", ["cart"]),
          ...mapGetters("cartMod", ["totalCost"]),
     },
     methods: {
          ...mapMutations("cartMod", ["removeProductFromCart"]),
     },

}
</script>

<style>

</style>