import Vue from 'vue'
import Vuex from 'vuex'
import usersMod from './modules/usersMod'
import adventuresMod from './modules/adventuresMod'
import cartMod from './modules/cartMod'



Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  strict: true,

  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    usersMod,
    adventuresMod,
    cartMod
  }
})