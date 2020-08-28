<template>
  <div class="registro-container">
    <h1>Nuevo usuario</h1>
    <form>
      <div class="input-container">
        <label for="name">Nombre</label>
        <input type="text" name="name" id="name" autocomplete="on" />
      </div>

      <div class="input-container">
        <label for="surname">Apellidos</label>
        <input type="text" surname="surname" id="surname" autocomplete="on" />
      </div>

      <div class="input-container">
        <label for="country">País</label>
        <select name="country" id="country"></select>
        <label for="city">Ciudad</label>
        <select name="city" id="city"></select>
      </div>

      <div class="input-container">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" autocomplete="on" />
      </div>

      <div class="input-container">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" autocomplete="on" />
      </div>

      <div class="input-container">
        <input type="file" name="image" id="image" />
      </div>

      <div class="accept">
        <input type="checkbox" name="accept" id="accept" requerid />
        <label for="accept">Acepto terminos y condiciones</label>
      </div>
      <div class="container-btn">
        <button class="btn-dark">Registrame</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>