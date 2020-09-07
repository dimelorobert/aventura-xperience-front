<template>
  <div class="registro-container">
    <vue-headful title="Registro || Aventura-Xperience" description="Tu aventura empieza aquí" />
    <h1>Nuevo usuario</h1>

    <form @submit.prevent="createUser(user)" class="animate__animated animate__fadeInUp">
      <div class="input-container">
        <label for="name">Nombre</label>
        <input v-model="user.name" type="text" name="name" id="name" autocomplete="on" />
      </div>

      <div class="input-container">
        <label for="surname">Apellidos</label>
        <input
          v-model="user.surname"
          type="text"
          surname="surname"
          name="surname"
          class="input-style"
          id="surname"
          autocomplete="on"
        />
      </div>
      <div class="input-container">
        <input v-model="user.date_birth" type="date" name="date" id="date" />
      </div>
      <div class="input-container">
        <label for="masculino">
          <input v-model="user.genre" type="radio" name="genero" value="Hombre" id="masculino" />
          Hombre
        </label>
        <label for="femenino">
          <input v-model="user.genre" type="radio" name="genero" value="Mujer" id="femenino" />
          Mujer
        </label>
        <label for="otro">
          <input v-model="user.genre" type="radio" name="genero" value="otro" id="otro" checked />
          Otro
        </label>
      </div>

      <div class="input-container">
        <select v-model="user.country" name="country" id="country">
          <option value>Selecciona..</option>
          <option value="España">España</option>
        </select>

        <select v-model="user.city" name="city" id="city">
          <option>Selecciona..</option>
          <optgroup
            v-for="community in communities"
            :key="community.id"
            :label="community.community"
          >
            <option v-for="city in community.cities" :key="city.id" :value="city.name">{{city.name}}</option>
          </optgroup>
        </select>
      </div>

      <div class="input-container">
        <label for="email">Email</label>
        <input
          v-model="user.email"
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
          v-model="user.password"
          type="password"
          name="password"
          class="input-style"
          id="password"
          autocomplete="on"
        />
      </div>
      <div class="input-container">
        <input @change="onFileSelected" type="file" id="image" />
      </div>

      <div class="accept">
        <label for="accept"></label>
        Acepto terminos y condiciones
        <input
          v-model="user.acept_terms"
          type="checkbox"
          name="accept"
          id="accept"
          required
        />
      </div>

      <div class="container-btn">
        <button class="btn-dark">Registrame</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions, createLogger } from "vuex";

export default {
  name: "Registro",
  components: {},
  data() {
    return {
      user: {
        name: null,
        surname: null,
        date_birth: null,
        genre: null,
        country: null,
        city: null,
        email: null,
        password: null,
        image: null,
        acept_terms: null,
      },
    };
  },
  computed: {
    ...mapState("usersMod", ["communities"]),
  },
  methods: {
    ...mapActions("usersMod", ["createUser", "getCities"]),

    onFileSelected(event) {
      this.user.image = event.target.files[0];
    },
  },
  created() {
    this.getCities();
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