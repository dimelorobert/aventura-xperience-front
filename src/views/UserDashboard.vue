<template>
  <div id="tabs" class="container">
    <vue-headful
      title="Panel usuario || Aventura-Xperience"
      description="Tu aventura empieza aquí"
    />
    <div class="tabs">
      <figure
        @click="activetab=1"
        id="user-avatar"
        v-bind:class="[ activetab === 1 ? 'active' : '' ]"
      >Role:</figure>
      <a @click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Datos Usuario</a>
      <a @click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">Avatar</a>
      <a @click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">Crear Aventura</a>
      <a @click="activetab=4" v-bind:class="[ activetab === 4 ? 'active' : '' ]">Lista Aventuras</a>
      <a @click="activetab=5" v-bind:class="[ activetab === 5 ? 'active' : '' ]">Reservas</a>
      <a @click="activetab=6" v-bind:class="[ activetab === 6 ? 'active' : '' ]">Compras</a>
    </div>

    <div class="content">
      <div v-show="activetab === 1" class="tabcontent">
        <h2>Datos Usuario</h2>

        <form>
          <div class="input-container">
            <div class="input-data">
              <label for="name">
                Nombre:
                <input type="text" name="name" id="name" autocomplete="on" value />
              </label>
            </div>
            <div class="input-data">
              <label for="surname">
                Apellidos:
                <input type="text" name="surname" id="surname" autocomplete="on" />
              </label>
            </div>
          </div>

          <div class="input-container">
            <label for="date">
              Fecha de nacimiento:
              <input type="date" name="date" id="date" />
            </label>
          </div>
          <div class="input-container">
            <div class="input-data">
              <label for="country">
                País:
                <select name="country" id="country">
                  <option value>Selecciona..</option>
                  <option></option>
                </select>
              </label>
            </div>
            <div class="input-data">
              <label for="city">
                Ciudad:
                <select name="city" id="city" required>
                  <option value>Selecciona..</option>
                  <option></option>
                </select>
              </label>
            </div>
          </div>
          <div class="input-container">
            <div class="input-data">
              <label for="email">Email:</label>
              <input type="text" name="email" id="email" autocomplete="on" />
            </div>
            <div class="input-data">
              <label for="password">Password:</label>
              <input type="text" name="password" id="password" autocomplete="on" />
            </div>
          </div>

          <div class="container-btn">
            <button class="btn-dark">Guardar</button>
          </div>
        </form>
      </div>
      <div v-show="activetab === 2" class="tabcontent">
        <edituser />
      </div>
      <div v-show="activetab === 3" class="tabcontent">Open your eyes, look up to the skies and see</div>
      <div v-show="activetab === 4" class="tabcontent">Caught in a landslide, no escape from reality</div>
      <div v-show="activetab === 5" class="tabcontent">Open your eyes, look up to the skies and see</div>
      <div v-show="activetab === 6" class="tabcontent">Open your eyes, look up to the skies and see</div>
    </div>
  </div>
</template>

<script>
import edituser from "@/components/users/EditUser";

export default {
  name: "UserDashboard",
  components: {
    edituser,
  },
  data() {
    return {
      activetab: 1,
    };
  },
  methods: {},
  created() {},
};
</script>

<style scoped>
/* RESET */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* STYLING */
.container {
  display: flex;
  max-width: 768px;
  min-width: 420px;
  margin: 40px auto;
  font-family: "Nunito Sans", Arial, Helvetica, sans-serif;
  color: #888;
}

/* Style the tabs */
.tabs {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  margin-left: 20px;
  margin-bottom: -1px;
  z-index: 0;
}
#user-avatar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#user-avatar img {
  max-width: 100%;
  border-radius: 50%;
  width: 65%;
}
.tabs ul {
  list-style-type: none;
  margin-left: 20px;
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #f1f1f1;
  border-radius: 0.25rem 0 0 0.25rem;
  font-weight: bold;
}
/*.tabs a:last-child {
  border-right: 1px solid #ccc;
}*/

/* Change background color of tabs on hover */
.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}

/* Styling for active tab */
.tabs a.active {
  background-color: #fff;
  color: #484848;
  cursor: default;
}

/* Style the tab content */
.tabcontent {
  width: 35rem;
  height: 35rem;
  padding: 30px;
  border: 1px solid #ccc;
  margin-left: -2px;
  border-radius: 0 0.25rem 0.25rem 0;
  box-shadow: 3px 3px 6px #e1e1e1;
  z-index: -1;
}
.tabcontent h2 {
  color: #2c3e50;
}
.tabcontent form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 85%;
}
.input-data {
  margin: 0 1rem;
}
.input-container {
  display: flex;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transition: opacity 0.15s;
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