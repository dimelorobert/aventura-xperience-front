<template>
  <div class="dashboard">
    <vue-headful
      title="Panel usuario || Aventura-Xperience"
      description="Tu aventura empieza aquí"
    />

    <div class="dashboard-container">
      <div class="dashboard-nav-user">
        <nav class="nav-user">
          <figure class="container-user-image">
            <img :src="apiHost + '/' + userLogin.image" alt="Imagen del usuario" />
            <h3>{{userLogin.name}} {{userLogin.surname}}</h3>
            <p class="p-img">{{userLogin.role}}</p>
          </figure>
          <ul>
            <li @click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">
              <a href="#">Información usuario</a>
            </li>
            <li @click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">
              <a href="#">Editar datos usuario</a>
            </li>
            <li @click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">
              <a href="#">Cambiar password</a>
            </li>
            <li @click="activetab=4" v-bind:class="[ activetab === 4 ? 'active' : '' ]">
              <a href="#">Aventuras</a>
            </li>
            <li @click="activetab=5" v-bind:class="[ activetab === 5 ? 'active' : '' ]">
              <a href="#">Aventuras reservadas</a>
            </li>
            <li @click="activetab=6" v-bind:class="[ activetab === 6 ? 'active' : '' ]">
              <a href="#">Aventuras compradas</a>
            </li>
            <li @click="activetab=7" v-bind:class="[ activetab === 7 ? 'active' : '' ]">
              <a href="#">Panel carrito</a>
            </li>
            <li @click="activetab=8" v-bind:class="[ activetab === 8 ? 'active' : '' ]">
              <a href="#">Panel usuario</a>
            </li>
          </ul>
        </nav>
      </div>
      <div v-show="activetab === 1" class="dashboard-wrapper-data-user">
        <div class="title-tabcontent">
          <h2>Información del usuario</h2>
        </div>
        <userdetails></userdetails>
      </div>
      <div v-show="activetab === 2" class="dashboard-wrapper-data-user active">
        <div class="title-tabcontent">
          <h2>Editar datos del usuario</h2>
        </div>
        <useredit></useredit>
      </div>
      <div v-show="activetab === 3" class="dashboard-wrapper-data-user active">
        <div class="title-tabcontent">
          <h2>Cambiar password</h2>
        </div>
        <changepassword></changepassword>
      </div>
      <div v-show="activetab === 4" class="dashboard-wrapper-data-user">
        <div class="title-tabcontent">
          <h2>Aventuras</h2>
        </div>
      </div>
      <div v-show="activetab === 5" class="dashboard-wrapper-data-user active">
        <div class="title-tabcontent">
          <h2>Aventuras reservadas</h2>
        </div>
      </div>
      <div v-show="activetab === 6" class="dashboard-wrapper-data-user active">
        <div class="title-tabcontent">
          <h2>Aventuras compradas</h2>
        </div>
      </div>
      <div v-show="activetab === 7" class="dashboard-wrapper-data-user active">
        <div class="title-tabcontent">
          <h2>Panel carrito</h2>
        </div>
      </div>
      <div v-show="activetab === 8" class="dashboard-wrapper-data-user active">
        <div class="title-tabcontent">
          <h2>Panel usuario</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import userdetails from "@/components/users/UserDetails";
import useredit from "@/components/users/UserEdit";
import adventurecreate from "@/components/adventures/AdventureCreate.vue";
import changepassword from '@/components/users/ChangePassword.vue'

export default {
  name: "Dashboard",
  components: { userdetails, useredit, adventurecreate, changepassword },
  data() {
    return {
      apiHost: process.env.VUE_APP_URL_API,
      activetab: 1,
    };
  },
  computed: {
    ...mapState("usersMod", ["userLogin", "userByLogin"]),
  },
  methods: {
    ...mapActions("usersMod", ["getUser", "deactivateAccount"]),
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
.dashboard {
  margin: 0 5rem;
  border: 1px solid;
}
.dashboard-container {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.container-user-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  padding: .5rem 1rem;
}
.container-user-image h3 {
  font-size: 1.6rem;
}
.container-user-image img {
  width: 150px;
  border-radius: 50%;
  margin: 1rem;
  max-width: 100%;
}
.container-user-image .p-img {
  margin: 0.3rem 0 0.3rem 0;
  background-color: #fe285a;
  color: #ffffff;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
}
.dashboard-nav-user {
  width: calc(100% - 70%);
}
.nav-user {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #2c3e50;
  background-color: #eeeeee;
  width: 100%;
}
.nav-user ul {
  display: flex;
  flex-direction: column;
  list-style: none;
}
.nav-user ul li {
  margin-bottom: 1rem;
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-user ul li:hover {
  border-bottom: 2px solid #fe285a;
}
.nav-user ul li a {
  text-decoration: none;

  margin: 0 2rem;
}
.nav-user ul li a:hover {
  color: #ffffff;
}
.nav-user ul li a:visited {
  color: #2c3e50;
}
.dashboard-wrapper-data-user {
  width: 70%;
}
.title-tabcontent {
  margin: 2rem;
}
</style>