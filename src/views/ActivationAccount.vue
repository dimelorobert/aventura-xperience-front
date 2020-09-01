<template>
  <div class="activation-account">
    <vue-headful
      title="Cuenta Activada || Aventura-Xperience"
      description="Tu aventura empieza aquí"
    />

    <section>
      <h1>Tu cuenta ha sido activada con éxito! ✅</h1>
      <div class="container-info">
        <p>Por favor, espera a ser redireccionado a la web</p>
        <figure>
          <img src="http://localhost:8080/media/escarabajo.gif" alt />
        </figure>
        <router-link class="btn-dark" :to="{name:'Login'}">Login</router-link>
        <div class="container-countdown">
          <countdown :time="3000">
            <template slot-scope="props">Tiempo restante: {{ props.seconds }} segundos.</template>
          </countdown>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import VueCountdown from "@chenfengyuan/vue-countdown";

export default {
  name: "Activation",
  data() {
    return {};
  },
  computed: {
    //MAPSTATE AQUI
    ...mapState("users", ["userList", "adventures"]),
  },
  methods: {
    //MAPACTION AQUI
    ...mapActions("users", ["getUsers", "getAdventures"]),

    pushToLogin() {
      setTimeout(() => {
        window.location.href = "http://localhost:8080/#/login";
      }, 3600);
    },
  },
  created() {
    this.getUsers();
    this.getAdventures();
    this.pushToLogin();
  },
};
</script>

<style>
</style>