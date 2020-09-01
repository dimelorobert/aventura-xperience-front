
import router from '@/router'
import axios from 'axios'

export default {

     // VARIABLE QUE SE ACTIVA EN TRUE PARA USAR MODULOS
     namespaced: true,

     // variables a usar
     state: {
          adventures: [],
     },
     mutations: {
          // RELLENADOR DE ARRAYS
          refillArrays(state, payload) {
               state.adventures = payload;
          },
     },

     actions: {

          getAdventures: async ({
               commit
          }, token) => {
               let config = {
                    headers: {
                         authorization: token
                    }
               }
               const adventureListJSON = await axios.get('adventures/list', config);
               const adventureList = adventureListJSON.data.data;
               console.log("FROM GET ADVENTURES:", adventureList);
               commit('refillArrays', adventureList)
          },

     },
     getters: {},
}