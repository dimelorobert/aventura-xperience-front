<template>
  <div class="activation-account">
    <vue-headful
      title="Cuenta Activada || Aventura-Xperience"
      description="Tu aventura empieza aquí"
    />

    <section>
      <h1>Codigo de Activación caducado ❌</h1>
      <br>
      <div class="container-info">
        <p>Por favor, espera a ser redireccionado a la web para que solicites un nuevo codigo</p>

        <figure class="container-mistake">
          <img src="http://localhost:8080/media/mistake.png" alt />
        </figure>
        <router-link class="btn-dark" :to="{name:'Login'}">Login</router-link>
        <div class="container-countdown">
          <countdown :time="5000">
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
  name: "ActivationError",

  methods: {
    pushToLogin() {
      setTimeout(() => {
        window.location.href = "http://localhost:8080/#/login";
      }, 4000);
      clearTimeout(setTimeout);
    },
  },
  created() {
    this.pushToLogin();
  },
};
</script>

<style scoped>
.container-mistake {
display: flex;
justify-content: center;
align-items: center;
}
.container-mistake img {
  max-width: 100%;
  width: 300px;
}
</style>