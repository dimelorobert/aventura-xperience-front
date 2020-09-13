<template>
  <div class="edit-user-container">
    <form @submit.prevent="editUser(user)" enctype="multipart/form-data" id="form-edit">
      <div class="container-input">
        <label for="name">Nombre:</label>
        <input v-model="user.name" type="text" name="name" id="name" />
        <label for="surname">Apellidos:</label>
        <input v-model="user.surname" type="text" name="surname" id="surname" autocomplete="on" />
        <br>
        <div class="container-genre">
          <label for="hombre">Hombre</label>
          <input v-model="user.genre" type="radio" name="genero" value="Hombre" id="hombre" />
          <label for="mujer">Mujer</label>
          <input v-model="user.genre" type="radio" name="genero" value="Mujer" id="mujer" />
          <label for="otro">Otro</label>
          <input v-model="user.genre" type="radio" name="genero" value="otro" id="otro" checked />
        </div>

        <label for="country">País:</label>
        <select v-model="user.country" name="country" id="country">
          <option disabled selected>Selecciona..</option>
          <option value="España">España</option>
        </select>
        <label for="city">Ciudad:</label>
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
        <label for="image">Avatar</label>
        <input @change="onFileSelected" type="file" id="image" />
      </div>

      <div class="container-btn">
        <button class="btn-dark">Guardar</button>
      </div>
    </form>
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
}
.edit-user-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.input-fullname {
  display: flex;
  flex-direction: row;
}
.genre-container {
  display: flex;
  flex-direction: row;
}
#form-edit {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
}
#hombre,
#mujer,
#otro {
  display: inline-flex;
}
.container-input {
  display: inline-flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;
}
.container-input input,
.container-input label {
  width: 60%;
}
.container-genre {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}
.container-genre input {
  height: 20px;
}
#image {
  width: 100%;
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
  color: #FFFFFF;
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