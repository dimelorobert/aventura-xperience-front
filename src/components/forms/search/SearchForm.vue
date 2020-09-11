<template>
  <form class="form-search">
    <div class="container">
      <!-- DISPONIBILIDAD -->
      <div class="by-availability">
        <label for="available">¿Disponible?:</label>
        <select v-model="available" name="available" id="available">
          <option value="Disponible" selected>Si</option>
          <option value="No disponible">No</option>
        </select>
      </div>

      <!-- BUSQUEDA + BOTON -->
      <div class="searcher-input">
        <label class="search-label-style" for="query"></label>
        <input
          v-model="query"
          id="query"
          type="search"
          name="query"
          class="query"
          autocomplete="off"
        />
        <input class="query" type="button" value="Buscar aventura" />
      </div>

      <!-- CIUDAD -->
      <div class="by-city">
        <label for="city">Ciudad:</label>
        <select v-model="city" name="city" id="city">
          <option selected>Selecciona..</option>
          <optgroup v-for="item of communities" :key="item.id" :label="item.community">
            <option v-for="city of item.cities" :key="city.id" :value="city.name">{{city.name}}</option>
          </optgroup>
        </select>
      </div>

      <!-- PRECIO MINIMO -->
      <div class="by-price">
        <label for="min">Precio desde:</label>
        <input
          v-model="min_price"
          type="number"
          name="min"
          id="min"
          min="0"
          step="0.01"
          autocomplete="0ff"
        />

        <label for>Precio hasta:</label>
        <input
          v-model="max_price"
          type="number"
          name="max"
          id="max"
          max="500"
          step="0.01"
          autocomplete="off"
        />
      </div>

      <!-- CATEGORIA -->
      <div class="by-category">
        <div class="category-container">
          <div class="label-container">
            <label for="acuatica">Acuáticas</label>
            <input v-model="category" type="radio" name="category" id="acuatica" value="1" />
          </div>

          <div class="label-container">
            <label for="montana">
              Montaña
              <input v-model="category" type="radio" name="category" id="montana" value="2" />
            </label>
          </div>

          <div class="label-container">
            <label for="extremas">
              Extremas
              <input
                v-model="category"
                type="radio"
                name="category"
                id="extremas"
                value="3"
              />
            </label>
          </div>

          <div class="label-container">
            <label for="relax">
              Relax
              <input v-model="category" type="radio" name="category" id="relax" value="4" />
            </label>
          </div>
        </div>
      </div>
      <div class="by-vacancy">
        <label for="vacancy">
          Plazas :
          <select v-model="vacancy" name="vacancy" id="vacancy">
            <option selected disabled>Seleccionar</option>
            <option
              v-for="vacancy in vacancies"
              :key="vacancy.id"
              :value="vacancy.value"
            >{{vacancy.value}} personas o más</option>
          </select>
        </label>
      </div>
      <div class="nothing-0"></div>
      <div class="date">
        <label for="from">Fecha desde:</label>
        <input v-model="from" type="date" name="from" id="from" />
        <label for="from">Fecha hasta:</label>
        <input v-model="to" type="date" name="to" id="to" />
      </div>
      <!-- BOTON DE RESET FILTROS -->
      <div class="container-reset-button">
        <div class="container-btn">
          <button @click.prevent="resetFilter" class="btn-dark">Reiniciar filtros</button>
        </div>
      </div>
    </div>

  </form>
</template>

<script>
//import Datepicker from "vuejs-datepicker";
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import * as store from "@/store";
import * as lang from "vuejs-datepicker/src/locale";
import { dateFilter } from "vue-date-fns";
import locale from "date-fns/locale/es";
import searchlist from "@/components/forms/search/SearchList";

export default {
  components: {
    searchlist,
  },
  filters: {
    date: dateFilter,
  },
  data() {
    return {
      options: [
        {
          text: "Si",
          value: true,
        },
        {
          text: "No",
          value: false,
        },
      ],
      languages: lang,
      lang: "es",
    };
  },
  computed: {
    ...mapState("adventuresMod", ["filters", "communities", "vacancies"]),

    query: {
      get() {
        return this.filters.query;
      },
      set(value) {
        this.setFilter({
          filters: "query",
          value,
        });
      },
    },
    category: {
      get() {
        return this.filters.category_id;
      },
      set(value) {
        this.setFilter({
          filters: "category_id",
          value,
        });
      },
    },
    available: {
      get() {
        return this.filters.isAvailable;
      },
      set(value) {
        this.setFilter({
          filters: "isAvailable",
          value,
        });
      },
    },
    city: {
      get() {
        return this.filters.city;
      },
      set(value) {
        this.setFilter({
          filters: "city",
          value,
        });
      },
    },
    vacancy: {
      get() {
        return this.filters.vacancy;
      },
      set(value) {
        this.setFilter({
          filters: "vacancy",
          value,
        });
      },
    },
    from: {
      get() {
        console.log(this.filters.from);
        return this.filters.from;
      },
      set(value) {
        this.setFilter({ filters: "from", value: value });
      },
    },
    to: {
      get() {
        console.log(this.filters.to);
        return this.filters.to;
      },
      set(value) {
        this.setFilter({
          filters: "to",
          value: value,
        });
      },
    },
    min_price: {
      get() {
        return this.filters.min_price;
      },
      set(value) {
        this.setFilter({
          filters: "min_price",
          value: Number(value),
        });
      },
    },
    max_price: {
      get() {
        return this.filters.max_price;
      },
      set(value) {
        this.setFilter({
          filters: "max_price",
          value: Number(value),
        });
      },
    },
    isAvailable: {
      get() {
        return this.filters.isAvailable;
      },
      set(value) {
        this.setFilter({
          filters: "isAvailable",
          value,
        });
      },
    },
  },
  methods: {
    ...mapMutations("adventuresMod", ["setFilter", "resetFilter"]),

    convertDateTime(str) {
      let date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      return [date.getFullYear(), mnth, day].join("-");
    },
  },
};
</script>

<style scoped>
/* LAYOUT */
.container {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    "by-availability by-availability searcher-input searcher-input searcher-input by-city by-city"
    "by-price by-price by-category by-category by-category by-vacancy by-vacancy-to"
    "nothing-0 nothing-0 date date date container-reset-button container-reset-button";
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 120px 80px 80px;
}
/* .container > div {
  border: 1px dashed #888;
} */

.by-availability {
  grid-area: "by-availability";
}
.searcher-input {
  grid-area: "searcher-input";
}
.by-city {
  grid-area: "by-city";
}
.by-price {
  grid-area: "by-price";
}
.by-category {
  grid-area: "by-category";
}
.by-vacancy {
  grid-area: "by-vacancy";
}
.by-vacancy-to {
  grid-area: "by-vacancy-to";
}
.nothing-0 {
  grid-area: "nothing-0";
}
.date {
  grid-area: "date";
}
.container-reset-button {
  grid-area: "container-reset-button";
}

.by-availability,
.searcher-input,
.by-city,
.by-price,
.by-category,
.by-vacancy, 
.nothing-0, .date,
.container-reset-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #050023;
}
.by-availability label,
.by-city label,
.by-price label,
.by-category label, .by-vacancy label, .date label {
  color: #ffffff;
}
.searcher-input .query {
  width: 50%;
  height: 45px;
}
.by-city select {
  width: 60%;
}
.by-price input {
  width: 40%;
  height: 35px;
  border-radius: 0.25rem;
  margin: 0 0 0 1rem;
  text-align: center;
  font-weight: 700;
  font-size: 1.2rem;
}
.date {
  justify-content: space-evenly;
}
.date input {
  width: 20%;
}
.by-category {
  display: flex;
  justify-content: space-around;
}
.category-container {
  display: flex;
  flex-direction: row;
}

.category-container .label-container {
  margin: 0 1rem 0 1rem;
}
.container-reset-button button {
  padding: 0.6rem 0.5rem;
}

.container {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    "header header header"
    "left right right"
    "left right right";
  grid-template-columns: 250px 4fr 1fr;
  grid-template-rows: 100px 1fr 80px;
}

.header {
  grid-area: header;
  background: #050023;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header form {
  width: 100%;
}
.group-form {
  display: inline-flex;
  width: 50%;
}
.search-label-style {
  color: #ffffff;
}
#query {
  text-align: center;
}
.query {
  border-radius: 0.25rem 0 0 0.25rem;
  background: #ffffff;
  color: #2c3e50;
}
.query:nth-child(3) {
  background: #fe285a;
  color: #ffffff;
  border-radius: 0 0.25rem 0.25rem 0;
  width: 25%;
  height: 45px;
  font-size: 0.9rem;
  cursor: pointer;
}
.input-search {
  display: flex;
  flex-direction: row;
}
.input-search {
  margin-right: 1rem;
}
.input-search .label-container {
  color: #ffffff;
  margin: 0 1rem 0 0;
}

.left {
  grid-area: left;
}
.right {
  grid-area: right;
}
</style>