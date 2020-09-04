<template>
  <div class="container">
    <div class="aventuras-container">
      <adventure
        v-for="(adventure, index) in adventures"
        :key="adventure.id"
        :adventure="adventure"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import { dateFilter } from "vue-date-fns";
import locale from "date-fns/locale/es";
import { mapState, mapActions } from "vuex";
import Adventure from "@/components/adventures/Adventure";

export default {
  name: "Adventures",
  components: { Adventure },
  data() {
    return {
      //adventures: [],
    };
  },
  computed: {
    ...mapState("usersMod", ["token"]),
    ...mapState("adventuresMod", ["adventures"]),
    refrehsData: () => {
      return this.getAdventures();
    },
  },
  created() {
    this.getAdventures();
  },
  filters: {
    date: dateFilter,
  },
  methods: {
    ...mapActions("adventuresMod", ["getAdventures"]),
  },
};
</script>

<style scoped>
.container {
  background: url("http://localhost:8080/media/sand.png");
  background-position: 60rem 60rem;
  background-repeat: no-repeat, no-repeat;
}
.aventuras-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 1rem;
}
</style>
