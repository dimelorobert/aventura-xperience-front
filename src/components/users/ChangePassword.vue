<template>
  <div class="change-password-container">
    <form @submit.prevent="changePassword(passwordChange)" class="animate__animated animate__fadeInLeft">
      <!-- OLD PASSWORD -->
      <div class="input-container">
        <i class="fas fa-user" />
        <input
          v-model="passwordChange.oldPassword"
          type="password"
          name="old-password"
          placeholder="antigua password"
          required
          autocomplete="off"
        />
      </div>
      <!-- PASSWORD -->
      <div class="input-container">
        <i class="fas fa-user" />
        <input
          v-model="passwordChange.newPassword"
          type="password"
          name="new-password"
          placeholder="nueva password"
          required
          autocomplete="off"
        />
      </div>

      <!-- PASSWORD -->
      <div class="input-container">
        <i class="fas fa-lock" />
        <input
          v-model="passwordChange.newPasswordRepeat"
          @keyup.enter="changePassword(passwordChange)"
          type="password"
          name="repeat-password"
          placeholder="new password"
          required
          autocomplete="off"
        />
      </div>

      <!-- BOTON -->
      <div class="container-btn">
        <button class="btn-dark">Cambiar password</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2/src/sweetalert2.js";
import { IntersectingCirclesSpinner } from "epic-spinners";

export default {
  name: "ChangePassword",
  components: {
    IntersectingCirclesSpinner,
  },
  data() {
    return {
      passwordChange: { oldPassword: "", newPassword: "", newPasswordRepeat: "" },
    };
  },
 
  methods: {
    ...mapActions("usersMod", ["changePassword"]),
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
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}
</style>
