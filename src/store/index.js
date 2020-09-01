import Vue from 'vue'
import Vuex from 'vuex'
import usersMod from './modules/usersMod'
import adventuresMod from './modules/adventuresMod'



Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    
  },
  mutations: {
    
  },
  actions: {

  },
  getters: {
    
  },
  modules: {
    usersMod, adventuresMod
  }
})