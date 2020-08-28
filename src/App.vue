<template>
  <div id="app">
    <div id="nav">
      <figure>
        <img src="./assets/img/logo-ax.png" class="animate__animated animate__flipInX" />
      </figure>
      <router-link to="/">Home</router-link>
      <router-link v-if="isActive" to="/aventuras">Aventuras</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/registro">Registro</router-link>|
      <router-link v-if="!isActive" to="/login">Login</router-link>
      <a @click="logout()" v-if="isActive">Logout</a>
    </div>
    <router-view />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions("users", ["logout", "readToken"]),
  },
  computed: {
    ...mapGetters("users", ["isActive"]),
  },
  created() {
    this.readToken();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 2.2rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #fe285a;
}
#nav figure {
  display: flex;
  justify-content: center;
  align-items: center;
}
#nav figure img {
  width: 18.75rem;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
label {
  color: #ffffff;
  height: min-content;
}
label[for~="checkbox"],
label[for~="accept"] {
  color: #2c3e50;
}
input {
  border: none;
  color: #ffffff;
  outline: none;
  background: #fe285a;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 1px solid #fe285a;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  width: 6rem;
  height: 2.5rem;
  cursor: pointer;
}
</style>
