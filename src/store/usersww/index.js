import Vue from 'vue'
import Vuex from 'vuex'
//import users from './modules/users'

import decode from 'jwt-decode';
Vue.use(Vuex);

export default new Vuex.Store({
  //namespaced: true,
  state: {
    token: null,
    userDB: null,
  },
  mutations: {
    getUser(state, payload) {

      state.token = payload;

      if (payload === null) {
        state.userDB === null;
      } else {
        state.userDB = decode(payload);
        router.push({
          name: 'Aventuras'
        });
      }
    }
  },
  actions: {
    // commit es getUser()
    saveUser({
      commit
    }, payload) {
      localStorage.setItem('token', payload);
      commit('getUser', payload);
    },
    logout({
      commit
    }) {
      commit('getUser', null);
      localStorage.removeItem('token');
      router.push({
        name: 'Home'
      });
    }
  },
  getters: {
    isActive: state => !!state.token
  },
  modules: {
    //users
  }
})