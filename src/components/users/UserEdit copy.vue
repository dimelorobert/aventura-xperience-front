<template>
  <div class="edit-user-container">
    <details>
      <summary>Editar datos usuario</summary>
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
                v-model="user.surname"
                type="text"
                name="surname"
                id="surname"
                autocomplete="on"
              />
            </label>
          </div>
        </div>
        <div class="input-container">
          <div>
            <label for="hombre">
              <input v-model="user.genre" type="radio" name="genero" value="Hombre" id="hombre" />
              Hombre
            </label>
            <label for="mujer">
              <input v-model="user.genre" type="radio" name="genero" value="Mujer" id="mujer" />
              Mujer
            </label>
            <label for="otro">
              <input v-model="user.genre" type="radio" name="genero" value="otro" id="otro" checked />
              Otro
            </label>
          </div>
        </div>

        <div class="input-container">
          <div class="input-data">
            <label for="country">País:</label>
            <select v-model="user.country" name="country" id="country">
              <option disabled selected>Selecciona..</option>
              <option value="España">España</option>
            </select>
          </div>
          <div class="input-data">
            <label for="city">
              Ciudad:
              <select v-model="user.city" name="city" id="city">
                <option selected disabled>Selecciona..</option>
                <optgroup
                  v-for="community in communities"
                  :key="community.id"
                  :label="community.community"
                >
                  <option v-for="city in community.cities" :key="city.id" :value="city.name">{{city.name}}</option>
                </optgroup>
              </select>
            </label>
          </div>
        </div>
        <div class="input-container">
          <div class="input-data">
            <label for="image">
              Avatar
              <input @change="onFileSelected" type="file" id="image" />
            </label>
          </div>
        </div>

        <div class="container-btn">
          <button class="btn-dark">Guardar</button>
        </div>
      </form>
    </details>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "UserDetails",
  data() {
    return {
      user: {
        name: null,
        surname: null,
        country: null,
        city: null,
        genre: null,
        image: null,
      },
    };
  },

  computed: {
    ...mapState("usersMod", ["communities", "userByLogin"]),
  },
  methods: {
    ...mapActions("usersMod", ["getCities", "editUser", "getUser"]),

    onFileSelected(event) {
      this.user.image = event.target.files[0];
    },
  },
  async created() {
    await this.getUser();
    await this.getCities();
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
.input-container:nth-child(2) {
  display: flex;
  flex-direction: row;
  max-width: 100%;
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