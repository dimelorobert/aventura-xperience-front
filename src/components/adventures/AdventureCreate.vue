<template>
  <div class="container">
    <vue-headful
      title="Panel usuario || Aventura-Xperience"
      description="Tu aventura empieza aquí"
    />

    <details>
      <summary>Crear aventura</summary>
      <form @submit.prevent="createAdventure(adventures)">
        <div class="title">
          <h2>Crea tu aventura</h2>
          <p>compartela con los demas</p>
        </div>
        <div class="input-data">
          <h3>1. Elige el tipo de aventura a crear:</h3>
          <label for="category">
            <select v-model="adventures.category_id" name="category" id="category">
              <option selected disabled>Seleccionar</option>
              <option
                v-for="category_id in adventures.category_id"
                :key="category_id.id"
                :value="category_id.value"
              >{{category_id.name}}</option>
            </select>
          </label>
        </div>
        <div class="input-data">
          <h3>2. Dale un nombre molón a tu aventura y cuentanos de que va:</h3>
          <label for="adventure-name">
            Nombre de la aventura:
            <input
              v-model="adventures.name"
              type="text"
              name="adventure-name"
              id="adventure-name"
            />
          </label>
        </div>
        <div class="input-data">
          <label for="description">
            Descripción:
            <textarea v-model="adventures.description" name="description" id="description" rows="4" cols="35" />
          </label>
        </div>
        <div class="input-container">
          <div class="input-data">
            <h3>3. Fecha y Lugar donde sucedera el evento:</h3>
            <label for="date">
              Fecha:
              <input v-model="adventures.start_date_event" type="date" name="date" id="date" />
            </label>

            <label for="country">País:
            <select v-model="adventures.country" name="country" id="country">
              <option value="España" selected>España</option>
            </select></label>
          </div>
          <div class="input-data">
            <label for="city">Ciudad:
            <select v-model="adventures.city" name="city" id="city">
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
            </select></label>
          </div>
        </div>
        <div class="input-data">
          <h3>4. Mmm.. Cuantas plazas tiene tu aventura? :</h3>
          <label for="vacancy">Plazas :

          <select v-model="adventures.vacancy" name="vacancies" id="vacancies">
            <option>Seleccionar</option>
            <option
              v-for="vacancy in adventures.vacancies"
              :key="vacancy.id"
              :value="vacancy.value"
            >{{vacancy.value}} personas</option>
          </select></label>
        </div>

        <div class="input-data">
          <h3>5. Hora de decir a la gente cuanto vale tu aventura:</h3>
          <label for="price">Precio :

          <input
            v-model="adventures.price"
            type="range"
            min="0"
            max="500"
            step="0.01"
            id="price"
            name="price"
          />
          <input v-model="adventures.price" type="number" id="price" name="price" /></label>
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
        <div class="container-btn">
        <button class="btn-dark">Crear aventura</button>
      </div>
      </form>
    </details>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";


export default {
  name: "AdeventureCreate",
  components: { },
  data() {
    return {
      adventures: {
        category_id: [
          { name: "Acuática", id: 1 },
          { name: "Montaña", id: 2 },
          { name: "Extrema", id: 3 },
          { name: "Relax", id: 4 },
        ],
        name: null,
        description: null,
        image: null,
        image1: null,
        image2: null,
        image3: null,
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
        price: 0,
        start_date_event: null,
      },
    };
  },
  computed: {
    ...mapState("usersMod", ["userById", "communities"]),
  },
  methods: {
    ...mapActions("usersMod", ["getUser", "getCities", "editUser"]),
    ...mapActions("adventuresMod", ["createAdventure"]),


    onFileSelected(event) {
      this.adventures.image = event.target.files[0];
      this.adventures.image1 = event.target.files[1];
      this.adventures.image2 = event.target.files[2];
      this.adventures.image3 = event.target.files[3];
    },
  },
  created() {
    this.getCities();
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