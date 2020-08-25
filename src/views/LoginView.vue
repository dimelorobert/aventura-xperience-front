<template>
  <div class="login">
    <h1>Login</h1>
    <form>
      <div class="user">
        <i class="fas fa-user"></i>
        <input
          type="email"
          name="email"
          id="email"
          class="input-email"
          placeholder="correo electrónico"
        />
      </div>

      <div class="password">
        <i class="fas fa-lock"></i>
        <input
          type="password"
          name="password"
          id="password"
          class="input-password"
          placeholder="password"
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
  </div>
</template>

<script>
export default {
  name: "Login",
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
}
.input-email,
.input-password {
  background-color: #fe285a;
  height: 2.5rem;
  padding-left: 1rem;
}
button {
  outline: none;
  border: 1px solid #fe285a;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  width: 5.5rem;
  height: 3rem;
  cursor: pointer;
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