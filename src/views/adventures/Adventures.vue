<template>
  <div class="container">
    <div class="aventuras-container">
      <adventure
        v-for="(adventure, index) in adventures"
        :key="adventure.id"
        :adventure="adventure"
        :index="index"
      />
      <form>
        <div class="input-search">
          <input type="search" name="search" id="search" />
          <button id="btn-search">
            <i class="fas fa-search" /> Go
          </button>
        </div>
        <br />
        <div class="container-categories">
          <div class="input-search">
            <label for="acuatica">
              Acuáticas
              <input type="radio" name="acuatica" id="acuatica" />
            </label>
          </div>
          <div class="input-search">
            <label for="montana">
              Montaña
              <input type="radio" name="montaña" id="montaña" />
            </label>
          </div>
          <div class="input-search">
            <label for="extremas">
              Extremas
              <input type="radio" name="extremas" id="extremas" />
            </label>
          </div>
          <div class="input-search">
            <label for="relax">
              Relax
              <input type="radio" name="relax" id="relax" />
            </label>
          </div>
        </div>
        <div class="select-city">
          <label for="city">
            Por ciudad
            <select name id>
              <option selected disabled>Seleccionar</option>
            </select>
          </label>
        </div>
        <div class="input-prince">
          <label for="price">
            Aventuras por menos de 100€
            <input
              type="range"
              name="price"
              id="price"
              min="0"
              max="500"
            />
          </label>
        </div>
        <div class="input-date">
          <label for="date">
            Por rango de fecha
            <input type="date" name="date" id="date" />
            <input type="date" name="date" id="date" />
          </label>
        </div>
      </form>
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
.input-search {
  display: inline-flex;
}
#search {
  height: 35px;
}
#btn-search {
  width: 40%;
  text-align: center;
}
</style>
