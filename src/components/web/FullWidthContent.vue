<template>
  <section class="full-content">
   <img src="http://localhost:8080/media/parallax-image.jpg" alt="Parallax Imagen">
   
  </section>
</template>

<script>
export default {
  name: "FullWidthContent",
};
</script>

<style scoped>

.full-content img {
  max-width: 100%;
  min-height: inherit;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  font-family: "object-fit: cover;";
  background-repeat: no-repeat;
}




</style>