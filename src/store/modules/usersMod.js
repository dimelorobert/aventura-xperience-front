// decodificar token
import decode from 'jwt-decode';
import router from '@/router'
import axios from 'axios'

export default {

   // VARIABLE QUE SE ACTIVA EN TRUE PARA USAR MODULOS
   namespaced: true,

   // variables a usar
   state: {
      user_data: null,
      token: null,
      userDB: null,
      userList: [],
   },
   mutations: {

      // REGISTRO obtiene data enviada por el usuario
      setuserDB(state, payload) {
         state.userDB = payload;
      },

      // COMPROBADOR DE USER TOKEN 
      checkUser(state, payload) {
         state.token = payload;

         if (payload === null) {
            state.userDB === null;
         } else {
            state.userDB = decode(payload);
            localStorage.setItem('USER_ID', state.userDB.id);
            localStorage.setItem('USER_IMAGE', state.userDB.id);
            
            console.log('from localstorage',data);
            console.log('from vuex:', state.userDB.tokenPayload.id);

            router.push({
               name: 'Dashboard'
            });
         }
      },

      // RELLENADOR DE ARRAYS
      refillArrays(state, payload) {
            state.userList = payload;
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
         commit('checkUser', null);
         localStorage.removeItem('token');
         router.push({
            name: 'Home'
         });
      },

      // PETTICIÓN GET USER LIST
      /*getUser: async ({
         commit
      }, userDB) => {
         let config = {
            headers: {
               authorization: userDB.token,
            }
         }
         const userJSON = await axios.get('users/', userDB.tokenPayload.id, config);
         console.log(userJSON);
         if (userJSON.status === 200) {
            router.push({
               name: 'Dashboard'
            });
         }
      },*/

      // LECTOR USER TOKEN LOCALSTORAGE
      readToken({
         commit
      }) {
         const token = localStorage.getItem('token');
         if (token) {
            commit('checkUser', token);
         } else {
            commit('checkUser', null);
         }
      }
   },
   getters: {
      isActive: state => !!state.token,
      userExist(state) {
         if (state.userDB === null) {
            return false;
         } else {
            return true;
         }
      }
   },
}