<template>
  <div class="login-container">
    <vue-headful title="Login || Aventura-Xperience" description="Tu aventura empieza aquí" />
    <h1>Login</h1>

    <form @submit.prevent="login(user)" class="animate__animated animate__fadeInLeft">
      <!-- CORREO ELECTRONICO -->
      <div class="input-container">
        <i class="fas fa-user" />
        <input
          v-model="user.email"
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
        <i class="fas fa-lock" />
        <input
          v-model="user.password"
          @keyup.enter="login(user)"
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
          <input type="checkbox" name="checkbox" id="checkbox" checked />
        </label>
      </div>

      <!-- LOGIN BOTON -->
      <div class="container-btn">
        <button class="btn-dark">Login</button>
      </div>
    </form>

    <div class="helper-links">
      <!-- CREAR CUENTA -->
      <router-link :to="{name: 'Registro'}">Crear cuenta 📒</router-link>
    </div>

    <!-- RECUPERAR PASSWORD -->
    <!-- MODAL -->
    <div class="modal-vue">
      <!-- button show -->
      <a @click="showModalPass = true">Olvidaste tu contraseña❓🤔</a>

      <!-- overlay -->
      <div class="overlay" v-if="showModalPass" @click="showModal = false"></div>

      <!-- modal -->
    </div>

    <div class="show-window">
      <!-- VENTANA SHOW -->
      <div class="modal" v-if="showModalPass">
        <p class="close" @click="showModalPass = false">
          <i class="far fa-times-circle" />
        </p>
        <form @submit.prevent="recoveryPassword" class="recovery-password">
          <h3>
            <i class="far fa-paper-plane" /> Introduce tu email
          </h3>
          <span class="recovery-text">para recuperar tu contraseña</span>
          <div class="email-recovery-container">
            <i class="fas fa-envelope" />
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
            <button class="btn-dark">Enviar</button>
          </div>
        </form>
      </div>
    </div>

    <!-- //////////////////////////////////////////// -->

    <div class="modal-vue">
      <!-- button show -->
      <a @click="showModal = true">Nuevo codigo de activación</a>

      <!-- overlay -->
      <div class="overlay" v-if="showModal" @click="showModal = false"></div>

      <!-- modal -->
    </div>

    <div class="show-window">
      <!-- VENTANA SHOW -->
      <div class="modal" v-if="showModal">
        <p class="close" @click="showModal = false">
          <i class="far fa-times-circle" />
        </p>
        <form @submit.prevent="sendNewCode" class="recovery-password">
          <h3>
            <i class="fas fa-code"></i> Introduce tu email
          </h3>
          <span class="recovery-text">para reenviarte un nuevo codigo de activación</span>
          <div class="email-recovery-container">
            <i class="fas fa-envelope" />
            <input
              v-model="newCode"
              type="email"
              name="email"
              class="input-style"
              placeholder="email-usuario@email.com"
              autocomplete="on"
            />
          </div>
          <div class="container-btn">
            <button class="btn-dark">Enviar</button>
          </div>
        </form>
      </div>
    </div>

    <!-- <div v-if="message != ''" class="error animate__animated animate__tada">{{ message }}</div> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2/src/sweetalert2.js";
import { IntersectingCirclesSpinner } from "epic-spinners";

export default {
  name: "Login",
  components: {
    IntersectingCirclesSpinner,
  },
  data() {
    return {
      user: { email: null, password: null },

      showModal: false,
      showModalPass: false,
      message: null,
      recoveryMail: null,
      newCode: null,
    };
  },
  computed: {
    ...mapState("usersMod", ["userLogin"]),
  },
  methods: {
    ...mapActions("usersMod", ["login"]),

    // RECUPERAR CONTRASEÑA OLVIDADA
    async recoveryPassword() {
      try {
        const response = await this.axios.post(`users/recovery/password`, {
          email: this.recoveryMail,
        });
        if (response.status === 200) {
          let timerInterval;
          Swal.fire({
            title: "Su cuenta ha sido borrada con éxito",
            html: `${response.data.message}`,
            timer: 2000,
            timerProgressBar: true,
            onBeforeOpen: () => {
              Swal.showLoading();
              timerInterval = setInterval(() => {
                const content = Swal.getContent();
                if (content) {
                  const b = content.querySelector("b");
                  if (b) {
                    b.textContent = Swal.getTimerLeft();
                  }
                }
              }, 100);
            },
            onClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              dispatch("logout");
              router.push({
                name: "Home",
              });
            }
          });
        }
      } catch (error) {
        Swal.fire({
          title: `Error : ${error.response.data.status}`,
          text: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    },
    async sendNewCode() {
      try {
        const response = await this.axios.post(`/users/send-new-code`, {
          email: this.newCode,
        });
        if (response.status === 200) {
          this.showModal = false;
        }
      } catch (error) {
        let errorMessage;
        //errorMessage = error.response.data.error;
        //console.log("Error1:", errorMessage);
        if (!errorMessage) {
          //this.message = error.response.data.message;
          // console.log("errro2:", error.response.data.message);
        } else {
          //this.message = errorMessage;
          //console.log("error3", error.response);
        }
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  height: 100vh;
}
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
  margin-right: 1rem;
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
.modal-vue, .helper-links {
  margin: 0.5rem 0;
}

.recovery-text {
  font-size: 0.9rem;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
}

</style>
