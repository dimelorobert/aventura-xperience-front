// decodificar token
import decode from 'jwt-decode';
import router from '@/router'
import axios from 'axios'

export default {
   namespaced: true,

   state: {
      // Registro
      dataFromBody: null,

      // Login
      token: '',
      userDB: '',

   },
   mutations: {

      // Registro 

      setDataFromBody(state, payload) {
         state.dataFromBody = payload;
      },

      // Login
      getUser(state, payload) {
         state.token = payload;
         if (payload === '') {
            state.userDB === '';
         } else {
            state.userDB = decode(payload);
            router.push({
               name: 'Aventuras'
            });
         }
      }
   },
   actions: {
      // Registro

      async createUser({
            commit
         },
         dataFromBody
      ) {
         try {
            const response = await axios.post(`users/create`, dataFromBody.user);
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
               dataFromBody.message = error.response.data.message;
               // console.log("errro2:", error.response.data.message);
            } else {
               dataFromBody.message = errorMessage;
               //console.log("error3", error.response);
            }
         }

      },


      // Login
      saveUser({
         commit
      }, payload) {
         localStorage.setItem('token', payload);
         commit('getUser', payload);
      },
      logout({
         commit
      }) {
         commit('getUser', '');
         localStorage.removeItem('token');
         router.push({
            name: 'Home'
         });
      },
      readToken({
         commit
      }) {
         const token = localStorage.getItem('token');


         if (token) {
            commit('getUser', token);
         } else {
            commit('getUser', '');
         }
      }

   },
   getters: {
      isActive: state => !!state.token
   },
}