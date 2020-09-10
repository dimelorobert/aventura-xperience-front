import Vue from 'vue'
import Vuex from 'vuex'
import usersMod from './modules/usersMod'
import adventuresMod from './modules/adventuresMod'
import cartMod from './modules/cartMod'



Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  strict: true,

  state: {

  //   filters: {
  //     query: '',
  //     category_id: '',
  //     city: '',
  //     from: '',
  //     to: '',
  //     min_price: '',
  //     max_price: '',
  //     isAvailable: 'Disponible',
  //     vacancy: '8'
  //   },

  // },
  // mutations: {
  //   setFilter(state, data) {
  //     state.filters[data['filters']] = data.value;
  //   },

  // },
  // actions: {

  // },
  // getters: {

  //   filteredAdventures(state) {
  //     let adventures = state.adventures;

  //     adventures = adventures.filter(adventure => adventure.isAvailable === state.filters.isAvailable);

  //     if (state.filters.query.length >= 1) {
  //       adventures = adventures.filter(adventure => adventure.name.includes(state.filters.query));
  //     }

  //     if (state.filters.city) {
  //       adventures = adventures.filter(adventure => adventure.city === state.filters.city);
  //     }

  //     if (state.filters.category_id) {
  //       adventures = adventures.filter(adventure => adventure.category_id === state.filters.category_id);
  //     }

  //     if (state.filters.from) {
  //       adventures = adventures.filter(adventure => adventure.start_date_event >= state.filters.from);
  //     }

  //     if (state.filters.to) {
  //       adventures = adventures.filter(adventure => adventure.start_date_event <= state.filters.to);
  //     }

  //     if (state.filters.min_price) {
  //       adventures = adventures.filter(adventure => adventure.price >= state.filters.min_price);
  //     }

  //     if (state.filters.max_price) {
  //       adventures = adventures.filter(adventure => adventure.price <= state.filters.max_price);
  //     }

  //     if (state.filters.vacancy) {
  //       adventures = adventures.filter(adventure => adventure.vacancy === state.filters.vacancy);
  //     }

  //     return adventures;
  //   }
  },
  modules: {
    usersMod,
    adventuresMod,
    cartMod
  }
})