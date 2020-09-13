<template>
  <div class="info-user">
    <div class="container-data-user">
      <p v-if="null || undefined">Nombre: Sin especifica</p>
      <p v-else>Nombre: {{userLogin.name}}</p>
      <p v-if="null || undefined">Apellido: Sin especificar</p>
      <p v-else>Apellidos: {{userLogin.surname}}</p>
      <p v-if="null || undefined">Fecha de nacimiento: Sin especificar</p>
      <p v-else>Fecha de nacimiento: {{$date(new Date(userLogin.date_birth), 'dd MMMM yyyy') }}</p>
      <p v-if="null || undefined">Ciudad - País: Sin especificar</p>
      <p v-else>Ciudad - País: {{userLogin.city}} - {{userLogin.country}}</p>
      <p v-if="null || undefined">Email: Sin especificar</p>
      <p v-else>Email: {{userLogin.email}}</p>
      <p>Fecha de creación de la cuenta: {{$date(new Date(userLogin.creation_date), 'dd MMMM yyyy HH:mm:ss')}}</p>
      <p>Última actualización de los datos de usuario: {{$date(new Date(userLogin.modify_date), 'dd MMMM yyyy HH:mm:ss')}}</p>
    </div>

    <div class="container-btn">
      <button @click.prevent="deactivateAccount" class="btn-dark">Eliminar cuenta</button>
    </div>
  </div>
</template>

<script>
import { createDateFilter } from "vue-date-fns";
import locale from "date-fns/locale/es";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "UserDetails",
  computed: {
    ...mapState("usersMod", ["userLogin"]),
    now() {
      return this.$date(new Date());
    },
  },
  filters: {
    date: createDateFilter("dd MMMM yyyy", { locale }),
  },
  methods: {
    ...mapActions("usersMod", ["getUser", "deactivateAccount"]),
  },
  created() {
    this.getUser();
  },
};
</script>

<style scoped>
/* RESET */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.container-data-user p {
  margin: 1rem 0;
  padding: 0.5rem 1.5rem;
}
.container-image img {
  border-radius: 50%;
  max-width: 100%;
  width: 150px;
}
.details {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.details form {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}

.container {
  display: flex;
  flex-direction: column;
}
/* STYLING */

.input-data {
  margin: 0 1rem;
}
.input-container {
  display: flex;
  flex-direction: column;
}
.container-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-dark {
  display: inline-flex;
  color: #ffffff;
  background-color: #fe285a;
  margin: 1rem auto;
  padding: 0.5rem 1.5rem;
}
.btn-dark:hover {
  color: #ffffff;
  background-color: #050023;
}

/*style input*/

select {
  border: 1px solid #fe285a;
  background: transparent;
  border-radius: 0.25rem;
}
input {
  background: #ffffff;
  border: 1px solid #fe285a;
  border-radius: 0.25rem;
  height: 2rem;
  color: #484848;
}

label {
  color: #2c3e50;
}
</style>