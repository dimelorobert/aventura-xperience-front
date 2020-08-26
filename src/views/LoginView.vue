<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="user">
        <i class="fas fa-user"></i>
        <input
          v-model="usuario.email"
          type="email"
          name="email"
          id="email"
          class="input-email"
          placeholder="correo electrónico"
          autocomplete="on"
        />
      </div>

      <div class="password">
        <i class="fas fa-lock"></i>
        <input
          v-model="usuario.password"
          @keyup.enter="login"
          type="password"
          name="password"
          id="password"
          class="input-password"
          placeholder="password"
          autocomplete="on"
        />
      </div>
      <div class="container-checkbox">
        <input type="checkbox" name="keeplogin" id="keeplogin" />
        <label for="keeplogin">Mantener la sesión iniciada</label>
      </div>

      <p>
        <a href="#" target="_blank" rel="noopener noreferrer">¿Olvidaste tu contraseña?</a>
        <a href="#" target="_blank" rel="noopener noreferrer">¿Aún no estas registrado?</a>
      </p>
      <div class="container-btn">
        <button class="btn-dark">Log in</button>
      </div>
    </form>
    <div v-if="message!= null">
      <p>{{message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      usuario: {
        email: null,
        password: null,
      },
      message: null,
    };
  },
  methods: {
    async login() {
      let response;
      try {
        response = await this.axios.post("/users/login", this.usuario);
        //console.log(response.data);
      } catch (error) {
        let errorMessage = error.response.data.error;
        if (!errorMessage) {
					this.message = error.response.data.message;
        }else {
					this.message = errorMessage;
				}
      }
    },
  },
};
</script>

<style>
input {
  border: none;
  color: #ffffff;
  outline: none;
}
::placeholder {
  color: #ffffff;
}
form {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fa-user,
.fa-lock {
  color: #ffffff;
}
.user,
.password {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #fe285a;
  border-radius: 0.3rem;
  margin: 1rem 0;
  width: 18rem;
}
.input-email,
.input-password {
  background-color: #fe285a;
  height: 2.5rem;
  padding-left: 1rem;
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
</style>