<template>
  <div class="container">
    <vue-headful
      title="Panel usuario || Aventura-Xperience"
      description="Tu aventura empieza aquí"
    />
    <figure class="container-image">
      <img :src="'http://localhost:3000/uploads/users/' + `${userById.image}`" alt />
    </figure>
    <span>{{userById.name}} {{userById.surname}}</span>
    <span>Role: {{userById.role}}</span>
    <div class="details">
      <details>
        <details>
          <summary>Información del usuario</summary>
          <p v-if="null || undefined">Nombre: {{userById.name}}</p>
          <p v-else>Nombre: Sin especificar</p>
          <p v-if="null || undefined">Apellido: {{userById.surname}}</p>
          <p v-else>Apellidos: Sin especificar</p>
          <p v-if="null || undefined">Fecha de nacimiento: {{userById.date_birth}}</p>
          <p v-else>Fecha de nacimiento: Sin especificar</p>
          <p v-if="null || undefined">Ciudad - País: {{userById.city}} - {{userById.country}}</p>
          <p v-else>Ciudad - País: Sin especificar</p>
          <p v-if="null || undefined">Email: {{userById.email}}</p>
          <p v-else>Email: Sin especificar</p>
        </details>
        <summary>Datos usuario</summary>
        <form @submit.prevent="editUser(user)" enctype="multipart/form-data">
          <div class="input-container">
            <div class="input-data">
              <label for="name">
                Nombre:
                <input v-model="user.name" type="text" name="name" id="name" />
              </label>
            </div>
            <div class="input-data">
              <label for="surname">
                Apellidos:
                <input
                  v-model=" user.surname"
                  type="text"
                  name="surname"
                  id="surname"
                  autocomplete="on"
                  :placeholder="user.surname"
                />
              </label>
            </div>
          </div>

          <div class="input-container">
            <label for="date">
              Fecha de nacimiento:
              <input
                v-model="user.date_birth"
                type="date"
                name="date"
                id="date"
              />
            </label>
          </div>
          <div class="input-container">
            <div class="input-data">
              <label for="country">País:</label>
              <select v-model=" user.country" name="country" id="country">
                <option>Selecciona..</option>
                <option value="España">España</option>
              </select>
            </div>
            <div class="input-data">
              <label for="city">
                Ciudad:
                <select v-model=" user.city" name="city" id="city">
                  <option selected>Selecciona..</option>
                  <optgroup
                    v-for="community in communities"
                    :key="community.id"
                    :label="community.community"
                  >
                    <option
                      v-for="city in community.cities"
                      :key="city.id"
                      :value="city.name"
                    >{{city.name}}</option>
                  </optgroup>
                </select>
              </label>
            </div>
          </div>
          <div class="input-container">
            <div class="input-data">
              <label for="email">Email:</label>
              <input v-model=" user.email" type="email" name="email" id="email" autocomplete="on" />
            </div>
            <div class="input-data">
              <label for="password">Password:</label>
              <input
                v-model=" user.password"
                type="password"
                name="password"
                id="password"
                autocomplete="off"
                value="******"
              />
            </div>
            <div class="input-data">
              <label for="image">
                Avatar
                <input @change="onFileSelected" type="file" id="image" />
              </label>
            </div>
          </div>

          <div class="container-btn">
            <button @click="reload" class="btn-dark">Guardar</button>
          </div>
        </form>
      </details>

      <details>
        <summary>Crear aventura</summary>
        <div class="input-data">
          <label for="city">
            Selecciona el tipo de aventura a crear:
            <select name="category" id="category">
              <option>Selecciona..</option>
              <option value="1">Acuática</option>
              <option value="2">Montaña</option>
              <option value="3">Extrema</option>
              <option value="4">Relax</option>
            </select>
          </label>
        </div>
        <div class="input-data">
          <label for="adventure-name">
            Nombre de la aventura:
            <input type="text" name="adventure-name" id="adventure-name" />
          </label>
        </div>
        <div class="input-data">
          <p>
            <label for="description">Descripción:</label>
          </p>
          <textarea name="description" id="description" rows="4" cols="35"></textarea>
        </div>
      </details>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import urljoin from "url-join";
import axios from "axios";

export default {
  name: "Dashboard",
  components: {},
  data() {
    return {
      user: {
        name: null,
        surname: null,
        date_birth: null,
        country: null,
        city: null,
        email: null,
        password: null,
        image: null,
      },
      activetab: 1,
      staticFolder: process.env.VUE_APP_STATIC_USERS,
      communities: [],
      cities: [],
    };
  },
  computed: {
    ...mapState("usersMod", ["userById", "userTokenPayload", "userDB"]),
  },
  methods: {
    ...mapActions("usersMod", ["getUser"]),
    ...mapActions("usersMod", ["editUser"]),

    onFileSelected(event) {
      this.user.image = event.target.files[0];
    },

    reload() {
      this.$forceUpdate();
    },
    async getCities(index) {
      try {
        const response = await axios.get(
          `uploads/json/spanish-communities.json`
        );
        this.communities = await response.data.data;

        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getUrlImage(image) {
      const urlimg = await urljoin(
        `${process.env.VUE_APP_STATIC_USERS}`,
        `${this.image}`
      );
      return urlimg;
    },
  },
  async created() {
    await this.getCities();
    await this.getUser();
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
  background-color: transparent;
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