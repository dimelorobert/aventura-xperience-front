<template>
  <div class="container">
    <vue-headful
      title="Panel usuario || Aventura-Xperience"
      description="Tu aventura empieza aquí"
    />
    <figure class="container-image">
      <img :src="user_image + '/' + userById.image" alt />
    </figure>
    <span>{{userById.name}} {{userById.surname}}</span>
    <span>Role: {{userById.role}}</span>
    <div class="details">
      <details>
        <details>
          <summary>Información del usuario</summary>
          <p v-if="null || undefined">Nombre: Sin especifica</p>
          <p v-else>Nombre: {{userById.name}}</p>
          <p v-if="null || undefined">Apellido: Sin especificar</p>
          <p v-else>Apellidos: {{userById.surname}}</p>
          <p v-if="null || undefined">Fecha de nacimiento: Sin especificar</p>
          <p v-else>Fecha de nacimiento: {{userById.date_birth}}</p>
          <p v-if="null || undefined">Ciudad - País: Sin especificar</p>
          <p v-else>Ciudad - País: {{userById.city}} - {{userById.country}}</p>
          <p v-if="null || undefined">Email: Sin especificar</p>
          <p v-else>Email: {{userById.email}}</p>
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
        <div class="title">
          <h2>Crea tu aventura</h2>
          <p>compartela con los demas</p>
        </div>
        <div class="input-data">
          <h3>1. Elige el tipo de aventura a crear:</h3>
          <label for="city"></label>
          <select name="category" id="category">
            <option>Seleccionar</option>
            <option
              v-for="category_id in adventures.category_id"
              :key="category_id.id"
              :value="category_id.value"
            >{{category_id.name}}</option>
          </select>
        </div>
        <div class="input-data">
          <h3>2. Dale un nombre molón a tu aventura y cuentanos de que va:</h3>
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
        <div class="input-container">
          <div class="input-data">
            <h3>3. Fecha y Lugar donde sucedera el evento:</h3>
            <label for="date">
              Fecha:
              <input v-model="user.date_birth" type="date" name="date" id="date" />
            </label>

            <label for="country">País:</label>
            <select v-model=" user.country" name="country" id="country">
              <option value="España" selected>España</option>
            </select>
          </div>
          <div class="input-data">
            <label for="city">Ciudad:</label>
            <select v-model=" user.city" name="city" id="city">
              <option>Selecciona..</option>
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
          </div>
        </div>
        <div class="input-data">
          <h3>4. Mmm.. Cuantas plazas tiene tu aventura? :</h3>
          <label for="vacancy">Plazas :</label>

          <select name="vacancies" id="vacancies">
            <option>Seleccionar</option>
            <option
              v-for="vacancy in adventures.vacancies"
              :key="vacancy.id"
              :value="vacancy.value"
            >{{vacancy.value}}</option>
          </select>
        </div>

        <div class="input-data">
          <h3>5. Hora de decir a la gente cuanto vale tu aventura:</h3>
          <label for="price">Precio :</label>

          <input
            v-model="adventures.value"
            type="range"
            min="0"
            max="500"
            step="0.01"
            id="price"
            name="price"
          />
          <input v-model="adventures.value" type="number" id="price" name="price" />
        </div>
        <div class="input-data">
          <h3>6. ...Y por último ponle una imagen que llame la atención para que participe el máximo de gente posible:</h3>
          <label for="image">
            Imagen aventura
            <input @change="onFileSelected" type="file" id="image" />
          </label>
        </div>
        <div class="input-data">
          <label for="image">
            Imagen 1
            <input @change="onFileSelected" type="file" id="image" />
          </label>
        </div>
        <div class="input-data">
          <label for="image">
            imagen 2
            <input @change="onFileSelected" type="file" id="image" />
          </label>
        </div>
        <div class="input-data">
          <label for="image">
            Imagen 3
            <input @change="onFileSelected" type="file" id="image" />
          </label>
        </div>
      </details>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import path from "path";
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
      adventures: {
        category_id: [
          { name: "Acuática", id: 1 },
          { name: "Montaña", id: 2 },
          { name: "Extrema", id: 3 },
          { name: "Relax", id: 4 },
        ],
        name: null,
        description: null,
        country: null,
        city: null,
        vacancies: [
          { id: 1, value: 1 },
          { id: 2, value: 2 },
          { id: 3, value: 3 },
          { id: 4, value: 4 },
          { id: 5, value: 5 },
          { id: 6, value: 6 },
          { id: 7, value: 7 },
          { id: 8, value: 8 },
          { id: 9, value: 9 },
          { id: 10, value: 10 },
        ],
        isAvailable: [{ status: "Disponible" }, { status: "No disponible" }],
        value: 0,
        price: null,
        start_date_event: null,
      },
      activetab: 1,
      user_image: process.env.VUE_APP_URL_API ,
      communities: [],
      cities: [],
    };
  },
  computed: {
    ...mapState("usersMod", ["userById", "userTokenPayload", "userDB"]),

    total: function () {
      return this.value * 10;
    },
    
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