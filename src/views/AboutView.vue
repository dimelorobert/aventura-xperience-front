<template>
  <div class="about">
    <vue-headful
      title="Acerca de ... || Aventura-Xperience"
      description="Tu aventura empieza aquí"
    />

    <h1>This is an about page</h1>
    <adventurecreate />
  </div>
</template>
<script>
import adventurecreate from "@/components/adventures/AdventureCreate";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    adventurecreate,
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
