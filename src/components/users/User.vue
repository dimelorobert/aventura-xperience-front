<template>
  <div class="user">
    <section>
      <h1>Usuario desde componente:{{ $route.params.id }}</h1>

      <div v-if="userById !== undefined || null">{{userById.name}}</div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import router from "@/router";

export default {
  name: "User",
  data() {
    return {
      user_id: this.$route.params.id,
    };
  },
  created() {
    this.getUser(this.user_id);
  
  },
  computed: {
    ...mapState("usersMod", ["userById"]),
  },
  methods: {
    ...mapActions("usersMod", ["getUser"]),
  },
};
</script>

<style scoped>
/* RESET */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>