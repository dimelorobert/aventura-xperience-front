<template>
  <div class="edit-user-container">
    <form @submit.prevent="getUser">
      <div class="input-container">
        <div class="input-data">
          <label for="name">
            Nombre:
            <input v-model="user.name" type="text" name="name" id="name" autocomplete="on" :placeholder="user.name" />
          </label>
        </div>
        <div class="input-data">
          <label for="surname">
            Apellidos:
            <input v-model="user.surname" type="text" name="surname" id="surname" autocomplete="on" />
          </label>
        </div>
      </div>

      <div class="input-container">
        <label for="date">
          Fecha de nacimiento:
          <input v-model="user.date_birth" type="date" name="date" id="date" />
        </label>
      </div>
      <div class="input-container">
        <div class="input-data">
          <label for="country">
            País:
            <select v-model="user.country" name="country" id="country">
              <option value>Selecciona..</option>
              <option>españa</option>
            </select>
          </label>
        </div>
        <div class="input-data">
          <label for="city">
            Ciudad:
            <select v-model="user.city" name="city" id="city" required>
              <option value>Selecciona..</option>
              <option>a coruña</option>
            </select>
          </label>
        </div>
      </div>
      <div class="input-container">
        <div class="input-data">
          <label for="email">Email:</label>
          <input v-model="user.email" type="text" name="email" id="email" autocomplete="on" />
        </div>
        <div class="input-data">
          <label for="password">Password:</label>
          <input v-model="user.password" type="text" name="password" id="password" autocomplete="on" />
        </div>
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
  name: "EditUser22",
  data() {
    return {
      user: {
           id: this.$route.params.id,
        name: null,
        surname: null,
        country: null,
        city: null,
        email: null,
        password: null,
      },
    };
  },
  computed: {
       ...mapState("usersMod", ["user_data"]),
  },
  methods: {


  },
  created() {
      // this.getUser();
  },
};
</script>

<style>
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