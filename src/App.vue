<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <figure class="container-logo">
          <img src="./assets/img/logo-ax.png" class="animate__animated animate__flipInX" />
        </figure>
      </router-link>
      <nav class="main-menu">
        <router-link to="/">Home</router-link>
        <router-link v-if="isActive" :to="{name:'Adventures'}">Aventuras</router-link>

        <router-link :to="{name:'About'}">About</router-link>
        <router-link v-if="!isActive" :to="{name:'Registro'}">Registro</router-link>
        <router-link v-if="!isActive" :to="{name:'Login'}">Login</router-link>
        <router-link v-if="isActive" :to="{name: 'Dashboard'}">Perfil</router-link>
        <a @click="logout()" v-if="isActive">Logout</a>
      </nav>
    </div>

    <vue-snotify></vue-snotify>
    <router-view />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Snotify from "vue-snotify";
import Swal from 'sweetalert2/src/sweetalert2.js'



export default {
  name: "App",
  components: { Snotify },
  methods: {
    ...mapActions("usersMod", ["logout", "readToken"]),
  },
  computed: {
    ...mapGetters("usersMod", ["isActive"]),
  },
  created() {
    this.readToken();
  },
};
</script>

<style>

@import "~vue-snotify/styles/material.css";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* line-height: 2.2rem; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container-logo {
  display: flex;
}
.container-logo img {
  max-width: 100%;
  width: 25rem;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
.main-menu {
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  margin: 2rem 0;
}

#nav a.router-link-exact-active {
  color: #fe285a;
  text-decoration: underline;
}
#nav figure {
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
 input {
  border: none;
  color: #ffffff;
  outline: none;
  background: #fe285a;
  width: 100%;
} 
button {
  outline: none;
  border: 1px solid #fe285a;
  /* margin: 1rem auto; 
  padding: 0 1.5rem;*/
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
}
</style>
