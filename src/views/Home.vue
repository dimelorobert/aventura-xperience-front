<template>
  <div class="home">
    <vue-headful title="Home || Aventura-Xperience" description="Tu aventura empieza aquí" />

    <fullwithcontent />
    <slogan />
    <best />
  </div>
</template>

<script>
// @ is an alias to /src
import fullwithcontent from "@/components/web/FullWidthContent";
import slogan from "@/components/web/Slogan";
import best from "@/components/adventures/BestAdventure";

export default {
  name: "Home",
  components: {
    fullwithcontent,
    slogan,
    best,
  },
};
</script>
