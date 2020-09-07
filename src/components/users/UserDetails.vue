<template>
  <div class="edit-user-container">
    <figure class="container-image">
      <img :src="user_image + '/' + userByLogin.image" alt />
    </figure>
    <p>{{userByLogin.name}} {{userByLogin.surname}}</p>
    <p>Role: {{userByLogin.role}}</p>
    <details>
      <summary>Información del usuario</summary>
      <p v-if="null || undefined">Nombre: Sin especifica</p>
      <!-- <p v-else>Nombre: {{userByLogin.name}}</p> -->
      <p v-if="null || undefined">Apellido: Sin especificar</p>
      <p v-else>Apellidos: {{userByLogin.surname}}</p>
      <p v-if="null || undefined">Fecha de nacimiento: Sin especificar</p>
      <p v-else>Fecha de nacimiento: {{userByLogin.date_birth}}</p>
      <p v-if="null || undefined">Ciudad - País: Sin especificar</p>
      <p v-else>Ciudad - País: {{userByLogin.city}} - {{userByLogin.country}}</p>
      <p v-if="null || undefined">Email: Sin especificar</p>
      <p v-else>Email: {{userByLogin.email}}</p>
      <p>Fecha de creación de la cuenta: {{userByLogin.creation_date}}</p>
      <p>Última actualización de los datos de usuario: {{userByLogin.modify_date}}</p>
    </details>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "UserDetails",
  data() {
    return {
      user_image: process.env.VUE_APP_URL_API,
    };
  },
  computed: {
    ...mapState("usersMod", ["userByLogin"]),
  },
  methods: {
    ...mapActions("usersMod", ["getUser"])
  
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
  padding: 0 1.5rem;
}
.btn-dark:hover {
  color: #000000;
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