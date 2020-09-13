<template>
  <div class="about">
    <vue-headful
      title="Acerca de ... || Aventura-Xperience"
      description="Tu aventura empieza aquí"
    />

    <h1>This is an about page</h1>

  </div>
</template>
<script>
import adventurecreate from "@/components/adventures/AdventureCreate";
import { mapState, mapActions } from "vuex";
import cart from '@/components/cart/Cart.vue'

export default {
  components: {
    adventurecreate,cart
  },
  computed: {
    ...mapState("usersMod", ["communities"]),
  },
  methods: {
    ...mapActions("adventuresMod", ["createAdventure"]),

    onFileSelected(event) {
      this.adventureCreate.image = event.target.files[0];
    },
  },
};
</script>
