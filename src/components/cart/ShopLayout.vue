<template>
  <div class="shop">
    <div class="parent">
      <div class="div1"></div>
      <div class="div2"></div>
      <div class="div3"></div>
      <div class="div4"></div>
      <div class="div5"></div>
      <div class="div6"></div>
      <div class="div7"></div>
      <div class="div8"></div>
      <div class="div9"></div>
      <div class="div10"></div>
      <div class="div11"></div>
      <div class="div12"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 {
  grid-area: 1 / 1 / 2 / 2;
}
.div2 {
  grid-area: 1 / 2 / 2 / 3;
}
.div3 {
  grid-area: 1 / 3 / 2 / 4;
}
.div4 {
  grid-area: 2 / 1 / 3 / 2;
}
.div5 {
  grid-area: 2 / 2 / 3 / 3;
}
.div6 {
  grid-area: 2 / 3 / 3 / 4;
}
.div7 {
  grid-area: 3 / 1 / 4 / 2;
}
.div8 {
  grid-area: 3 / 2 / 4 / 3;
}
.div9 {
  grid-area: 3 / 3 / 4 / 4;
}
.div10 {
  grid-area: 4 / 1 / 5 / 2;
}
.div11 {
  grid-area: 4 / 2 / 5 / 3;
}
.div12 {
  grid-area: 4 / 3 / 5 / 4;
}
</style>