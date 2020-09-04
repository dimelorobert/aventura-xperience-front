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
          createUser: async ({
                    commit
               },
               payload
          ) => {
               try {
                    const response = await axios.post(`adventures/create`, {
                         name: payload.name,
                         surname: payload.surname,
                         email: payload.email,
                         password: payload.password
                    });
                    console.log(response);
                    if (response.status === 200) {

                         router.push({
                              name: 'Login'
                         });
                    }
               } catch (error) {

                    let errorMessage;
                    errorMessage = error.response.data.error;
                    //console.log("Error1:", errorMessage);
                    if (!errorMessage) {
                         error.response.data.message;
                         // console.log("errro2:", error.response.data.message);
                    } else {
                         errorMessage;
                         //console.log("error3", error.response);
                    }
               }

          },

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