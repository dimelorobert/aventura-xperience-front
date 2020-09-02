<template>
  <div class="registro-container">
    <vue-headful title="Registro || Aventura-Xperience" description="Tu aventura empieza aquí" />
    <h1>Nuevo usuario</h1>

    <form @submit.prevent="createUser(dataFromBody)" class="animate__animated animate__fadeInUp">
      <div class="input-container">
        <label for="name">Nombre</label>
        <input v-model="dataFromBody.user.name" type="text" name="name" id="name" autocomplete="on" />
      </div>

      <div class="input-container">
        <label for="surname">Apellidos</label>
        <input
          v-model="dataFromBody.user.surname"
          type="text"
          surname="surname"
          name="surname"
          class="input-style"
          id="surname"
          autocomplete="on"
        />
      </div>


      <div class="input-container">
        <label for="email">Email</label>
        <input
          v-model="dataFromBody.user.email"
          type="email"
          name="email"
          class="input-style"
          id="email"
          autocomplete="on"
        />
      </div>

      <div class="input-container">
        <label for="password">Password</label>
        <input
          v-model="dataFromBody.user.password"
          type="password"
          name="password"
          class="input-style"
          id="password"
          autocomplete="on"
        />
      </div>

      <div class="accept">
        <label for="accept"></label>
        Acepto terminos y condiciones
        <input
        v-model="checked"
          type="checkbox"
          name="accept"
          id="accept"
          requerid
        />
      </div>
      <div class="container-btn">
        <button class="btn-dark">Registrame</button>
      </div>
    </form>

    <div
      v-if="dataFromBody.message != ''"
      class="error animate__animated animate__tada"
    >{{ dataFromBody.message }}</div>

    <!-- <div
      v-
      :style="success"
      class="error animate__animated animate__tada"
    >{{ dataFromBody.message }}</div>-->
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Registro",
  components: {

  },
  data() {
    return {
      checked: false,
      dataFromBody: {
        user: {
          name: "",
          surname: "",
          email: "",
          password: "",
        },
        message: "",
        error: "",
      },
      success: {
        backgroundColor: "green",
      },
    };
  },
  methods: {
    ...mapActions("usersMod", ["createUser"]),
  },
};
</script>

<style scoped>
.registro-container {
  background: url("../assets/img/parachutes.png"),
    url("../assets/img/mountainman.png");
  background-position: 65rem -9rem, -8rem 25rem;
  background-size: auto contain;
  background-repeat: no-repeat;
  height: 100vh;
}
::placeholder {
  color: #ffffff;
}
p {
  font-size: 0.9rem;
}
.input-container {
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fe285a;
  border-radius: 0.3rem;
  margin: 1rem 0;
  width: 18rem;
  height: 2.5rem;
  padding: 1.5rem;
}
.input-style {
  background-color: #fe285a;
  height: max-content;
}

.container-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-dark {
  color: #ffffff;
  background-color: #fe285a;
}
.btn-dark:hover {
  color: #000000;
  background-color: transparent;
}
#image {
  width: 16rem;
}
.error {
  position: absolute;
  top: 0;
  margin: 2rem auto;
  color: #ffffff;
  background-color: red;
  opacity: 75%;
  border-radius: 0.25rem;
  width: 18.75rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}
</style>