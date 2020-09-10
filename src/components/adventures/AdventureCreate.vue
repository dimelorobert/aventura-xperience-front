<template>
  <div class="container">
    <vue-headful
      title="Crear Aventura || Aventura-Xperience"
      description="Tu aventura empieza aquí"
    />

    <h1>Crea tu aventura</h1>
    <br />
    <form
      @submit.prevent="createAdventure({
        category_id: Number(createAd.category_id),
        name: createAd.name, 
        description: createAd.description,
        start_date_event: createAd.star_date_event,
        vacancy: createAd.vacancy,
        isAvailable: createAd.isAvailable,
        country: createAd.country,
        city: createAd.city,
        price: createAd.price,
        image: createAd.image

    })"
      class="create-adventure"
    >
      <!-- TIPO ADVENTURE -->
      <div class="create-adventure-container">
        <div class="container-inputs">
          <div class="container-adventure-input">
            <label for="category">
              Elige el tipo de aventura
              <select
                v-model="createAd.category_id"
                name="category"
                id="category"
              >
                <option disabled selected>Seleccionar</option>
                <option value="1">Acuatica</option>
                <option value="2">Montaña</option>
                <option value="3">Extrema</option>
                <option value="4">Relax</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <br />

      <!-- NOMBRE ADVENTURE -->
      <div class="create-adventure-container">
        <div class="container-inputs">
          <div class="container-adventure-input">
            <label for="adventure-name">
              Nombre de la aventura
              <input
                v-model="createAd.name"
                type="text"
                name="adventure-name"
                id="adventure-name"
                autocomplete="off"
              />
            </label>
          </div>
        </div>
      </div>
      <br />

      <!-- DESCRIPCION ADVENTURE -->
      <div class="create-adventure-container">
        <div class="container-inputs">
          <div class="container-adventure-input">
            <label for="description">
              Descripción:
              <textarea
                v-model="createAd.description"
                name="description"
                id="description"
                rows="4"
                cols="35"
              />
            </label>
          </div>
        </div>
      </div>
      <br />

      <!-- FECHA ADVENTURE -->
      <div class="create-adventure-container">
        <div class="container-inputs">
          <div class="container-adventure-input">
            <label for="date">
              Fecha:
              <input v-model="createAd.star_date_event" type="date" name="date" id="date" />
            </label>
          </div>
        </div>
      </div>
      <br />

      <!-- PLAZAS ADVENTURE -->
      <div class="create-adventure-container">
        <div class="container-inputs">
          <div class="container-adventure-input">
            <label for="vacancy">
              Plazas :
              <select v-model="createAd.vacancy" name="vacancy" id="vacancy">
                <option selected disabled>Seleccionar</option>
                <option
                  v-for="vacancy in vacancies"
                  :key="vacancy.id"
                  :value="vacancy.value"
                >{{vacancy.value}} personas</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <br />

      <!-- ESTA DISPONIBLE ADVENTURE -->
      <div class="create-adventure-container">
        <div class="container-inputs">
          <div class="container-adventure-input">
            <label for="vacancy">
              Estado :
              <select v-model="createAd.isAvailable" name="vacancies" id="vacancies">
                <option selected disabled>Seleccionar</option>
                <option value="Disponible">Disponible</option>
                <option value="No disponible">No disponible</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <br />

      <!-- PAIS ADVENTURE -->
      <div class="create-adventure-container">
        <div class="container-inputs">
          <div class="container-adventure-input">
            <label for="country">
              País :
              <select v-model="createAd.country" name="country" id="country">
                <option value="España" selected>España</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <br />

      <!-- CIUDAD ADVENTURE -->
      <div class="create-adventure-container">
        <div class="container-inputs">
          <div class="container-adventure-input">
            <label for="city">
              Ciudad:
              <select v-model="createAd.city" name="city" id="city">
                <option>Selecciona..</option>
                <optgroup v-for="item of communities" :key="item.id" :label="item.community">
                  <option
                    v-for="city of item.cities"
                    :key="city.id"
                    :value="city.name"
                  >{{city.name}}</option>
                </optgroup>
              </select>
            </label>
          </div>
        </div>
      </div>
      <br />

      <!-- PRECIO ADVENTURE -->
      <div class="create-adventure-container">
        <div class="container-inputs">
          <div class="container-adventure-input">
            <label for="price">
              Precio :
              <input v-model="createAd.price" type="number" id="price" name="price" step="0.01" />
            </label>
          </div>
        </div>
      </div>
      <br />

      <!-- IMAGEN ADVENTURE -->
      <div class="create-adventure-container">
        <div class="container-inputs">
          <div class="container-adventure-input">
            <label for="image">
              Imagen de la aventura
              <br />
              <input @change="onFileSelected" type="file" id="image" />
            </label>
          </div>
        </div>
      </div>
      <br />

      <!-- BOTON CREAR ADVENTURE -->
      <div class="container-btn">
        <button class="btn-dark">Crear aventura</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "AdeventureCreate",

  data() {
    return {
      createAd: {
        category_id: null,
        name: null,
        description: null,
        start_date_event: null,
        vacancy: null,
        isAvailable: null,
        country: null,
        city: null,
        price: null,
        image: null,
      },
      vacancies: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
        {
          value: 8,
        },
        {
          value: 9,
        },
        {
          value: 10,
        },
      ],
    };
  },
  computed: {
    ...mapState("adventuresMod", ["communities"]),
  },
  methods: {
    ...mapActions("adventuresMod", ["createAdventure"]),

    onFileSelected(event) {
      this.createAd.image = event.target.files[0];
    },
  },
  created() {},
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
.container-adventure-input {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-adventure-input input {
  width: 90%;
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