<template>
  <div class="search">
    <div class="container">
      <div class="header">
        <form>
          <div class="group-form">
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
          <br />
          <div class="input-search">
            <div class="label-container">
              <label for="acuatica">Acuáticas</label>
              <input v-model="category" type="radio" name="category" id="acuatica" value="1" />
            </div>

            <div class="label-container">
              <label for="montana">
                Montaña
                <input
                  v-model="category"
                  type="radio"
                  name="category"
                  id="montana"
                  value="2"
                />
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
        </form>
      </div>

      <div class="right">
        <input v-model="from" type="date" name="from" id="from" />
        <input v-model="to" type="date" name="to" id="to" />
      </div>
      <div class="left">
        <input
          v-model="min_price"
          type="number"
          name="min"
          id="min"
          min="0"
          step="0.01"
          autocomplete="0ff"
        />
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

      <!-- CIUDAD ADVENTURE -->
      <div class="create-adventure-container">
        <div class="container-inputs">
          <div class="container-adventure-input">
            <label for="city">
              Ciudad:
              <select v-model="city" name="city" id="city">
                <option>Selecciona..</option>
                <optgroup v-for="item of communities" :key="item.id" :label="item.community">
                  <option
                    v-for="city of item.cities"
                    :key="city.id"
                    :value="city.name"
                  >{{city.name}}</option>
                </optgroup>
              </select>
            </label>
          </div>
        </div>
      </div>
      <br />

      <!-- PLAZAS ADVENTURE -->
      <div class="create-adventure-container">
        <div class="container-inputs">
          <div class="container-adventure-input">
            <label for="vacancy">
              Plazas :
              <select v-model="vacancy" name="vacancy" id="vacancy">
                <option selected disabled>Seleccionar</option>
                <option
                  v-for="vacancy in vacancies"
                  :key="vacancy.id"
                  :value="vacancy.value"
                >{{vacancy.value}} personas</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
//import Datepicker from "vuejs-datepicker";
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import * as store from "@/store";
import * as lang from "vuejs-datepicker/src/locale";
import { dateFilter } from "vue-date-fns";
import locale from "date-fns/locale/es";

export default {
  components: {
    //Datepicker,adventuresMod
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
    ...mapMutations("adventuresMod", ["setFilter"]),

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
.container {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    "header header header"
    "left right right"
    "left right right";
  grid-template-columns: 250px 4fr 1fr;
  grid-template-rows: 160px 1fr 80px;
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