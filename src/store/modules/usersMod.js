// decodificar token
import decode from 'jwt-decode';
import router from '@/router'
import axios from 'axios'

export default {

   // VARIABLE QUE SE ACTIVA EN TRUE PARA USAR MODULOS
   namespaced: true,

   // variables a usar
   state: {
      user_id: '',
      token: '',
      userDB: '',
      userList: [],
      adventureArray: [],
      shoppings: [],
      invoices: [],
   },
   mutations: {

      // REGISTRO obtiene data enviada por el usuario
      setuserDB(state, payload) {
         state.userDB = payload;
      },

      // COMPROBADOR DE USER TOKEN 
      checkUser(state, payload) {
         state.token = payload;

         if (payload === '') {
            state.userDB === '';
         } else {
            state.userDB = decode(payload);
            console.log('from vuex:', state.userDB.tokenPayload);
            router.push({
               name: 'Dashboard'
            });
         }
      },

      // RELLENADOR DE ARRAYS
      refillArrays(state, payload) {
         /*if (state.userList) {
            state.userList = payload;
         } else if (state.adventureArray) {
            state.adventureArray = payload;
         } else if (state.shoppings) {
            state.shoppings = payload;
         } else {
            state.invoices = payload;
         }*/
         state.adventureArray = payload;
      },

   },

   actions: {

      // PETICIÓN POST para crear cuenta usuario
      createUser: async ({
            commit
         },
         userDB
      ) => {
         try {
            const response = await axios.post(`users/create`, userDB.user);
            console.log(response);
            if (response.status === 200) {
               router.push({
                  name: 'Login'
               });
            }
         } catch (error) {
            let errorMessage = error.response.data.error;
            //console.log("Error1:", errorMessage);
            if (!errorMessage) {
               userDB.message = error.response.data.message;
               // console.log("errro2:", error.response.data.message);
            } else {
               userDB.message = errorMessage;
               //console.log("error3", error.response);
            }
         }

      },


      // LOGIN
      saveUser({
         commit
      }, payload) {
         localStorage.setItem('token', payload);
         commit('checkUser', payload);
      },

      // LOGOUT
      logout({
         commit
      }) {
         commit('checkUser', '');
         localStorage.removeItem('token');
         router.push({
            name: 'Home'
         });
      },

      // PETTICIÓN GET USER LIST
      getUsers: async ({
         commit
      }, token) => {
         let config = {
            headers: {
               authorization: token
            }
         }
         const userListJSON = await axios.get('users/list', config);
         const userList = userListJSON.data.data;
         console.log('FROM GET USERS:',userList);
         commit('refillArrays', userList)
      },
      getAdventures: async ({
         commit
      },token) => {
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

      // LECTOR USER TOKEN LOCALSTORAGE
      readToken({
         commit
      }) {
         const token = localStorage.getItem('token');
         if (token) {
            commit('checkUser', token);
         } else {
            commit('checkUser', '');
         }
      }
   },
   getters: {
      isActive: state => !!state.token
   },
}