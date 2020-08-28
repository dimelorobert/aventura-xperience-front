<template>
  <div class="login-container">
    <h1>Login</h1>

    <form @submit.prevent="login" class="animate__animated animate__fadeInLeft">
      <!-- CORREO ELECTRONICO -->
      <div class="input-container">
        <i class="fas fa-user"></i>
        <input
          v-model="userFromBody.email"
          type="email"
          name="email"
          class="input-style"
          placeholder="correo electrónico"
          autocomplete="on"
          required
        />
      </div>

      <!-- PASSWORD -->
      <div class="input-container">
        <i class="fas fa-lock"></i>
        <input
          v-model="userFromBody.password"
          @keyup.enter="login"
          type="password"
          name="password"
          class="input-style"
          placeholder="password"
          autocomplete="on"
          required
        />
      </div>

      <!-- CHECKBOX -->
      <div class="container-checkbox">
        <label for="checkbox">
          Mantener la sesión iniciada
          <input type="checkbox" value="1" name="checkbox" id="checkbox" />
        </label>
      </div>

      <!-- LOGIN BOTON -->
      <div class="container-btn">
        <button class="btn-dark">Login</button>
      </div>
    </form>

    <div class="helper-links">
      <!-- CREAR CUENTA -->
      <router-link to="/registro">Crear cuenta 📒</router-link>

      <!-- RECUPERAR PASSWORD -->
      <!-- MODAL -->
      <div id="app" class="modal-vue">
        <!-- button show -->
        <a @click="showModal = true">Olvidaste tu contraseña❓🤔</a>

        <!-- overlay -->
        <div class="overlay" v-if="showModal" @click="showModal = false"></div>

        <!-- modal -->
      </div>
    </div>
    <div class="show-window">
      <!-- VENTANA SHOW -->
      <div class="modal" v-if="showModal">
        <p class="close" @click="showModal = false">
          <i class="far fa-times-circle"></i>
        </p>
        <div @submit="recoveryPassword" class="recovery-password">
          <h3>Introduce tu email</h3>
          <span class="recovery-text">de usuario para recuperar tu contraseña</span>
          <div class="email-recovery-container">
            <i class="fas fa-envelope"></i>
            <input
              v-model="recoveryMail"
              type="email"
              name="email"
              class="input-style"
              placeholder="email-usuario@email.com"
              autocomplete="on"
            />
          </div>
          <div class="container-btn">
            <button @click="recoveryPassword" class="btn-dark">Enviar</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="message != ''" class="error animate__animated animate__tada">{{ message }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      userFromBody: {
        email: "",
        password: "",
      },
      showModal: false,
      message: "",
      recoveryMail: "",
    };
  },

  methods: {
    ...mapActions("users", ["saveUser"]),

    // INICIAR SESIÓN
    async login() {
      try {
        const response = await this.axios.post(
          `users/login`,
          this.userFromBody
        );
        const token = response.data.data.token;
        this.saveUser(token);

        console.log(response.data);
      } catch (error) {
        let errorMessage = error.response.data.error;
        //console.log("Error1:", errorMessage);
        if (!errorMessage) {
          this.message = error.response.data.message;
          // console.log("errro2:", error.response.data.message);
        } else {
          this.message = errorMessage;
          //console.log("error3", error.response);
        }
      }
    },

    // RECUPERAR CONTRASEÑA OLVIDADA
    async recoveryPassword() {
      try {
        response = await this.axios.post(`/users/recovery/password`, {
          email: this.recoveryMail,
        });
      } catch (error) {
        let errorMessage = await error.response.data.error;
        //console.log("Error1:", errorMessage);
        if (!errorMessage) {
          this.message = await error.response.data.message;
          // console.log("errro2:", error.response.data.message);
        } else {
          this.message = errorMessage;
          //console.log("error3", error.response);
        }
      }
    },
  },
};
</script>

<style>
::placeholder {
  color: #ffffff;
}
p {
  font-size: 0.9rem;
}
.input-container {
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fe285a;
  border-radius: 0.3rem;
  margin: 1rem 0;
  width: 18rem;
  height: 2.5rem;
  padding: 1.5rem;
}
.email-recovery-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fe285a;
  border-radius: 0.3rem;
  margin: 1rem 0;
  width: 100%;
  height: 2.5rem;
  padding: 1.5rem;
}
.fa-user,
.fa-lock,
.fa-envelope {
  color: #ffffff;
  width: max-content;
}
.fa-times-circle {
  font-size: 1.2rem;
  cursor: pointer;
}
.fa-times-circle:hover {
  color: #fe285a;
}

.input-style {
  background-color: #fe285a;
  height: max-content;
}

.container-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-dark {
  color: #ffffff;
  background-color: #fe285a;
}
.btn-dark:hover {
  color: #000000;
  background-color: transparent;
}
/* modal */

a {
  outline: none;
  border: none;
  border-radius: 0.25rem;
  background-color: transparent;
  color: #000000;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: underline;
}
.overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.show-window {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.modal {
  position: relative;
  width: 20rem;
  z-index: 9999;
  margin: 0 auto;
  bottom: 50vh;
  padding: 20px 30px;
  background-color: #fff;
}

.recovery-text {
  font-size: 0.9rem;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
}
.error {
  margin: 2rem auto;
  color: #ffffff;
  background-color: red;
  opacity: 75%;
  border-radius: 0.25rem;
  width: 18.75rem;
}
</style>
