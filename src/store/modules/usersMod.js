// decodificar token
import decode from 'jwt-decode';
import router from '@/router'
import axios from 'axios'



export default {

   // VARIABLE QUE SE ACTIVA EN TRUE PARA USAR MODULOS
   namespaced: true,

   // variables a usar
   state: {
      token: null,
      userDB: {},
      userById: {},
      userList: [],
      userEdit: {},

   },
   mutations: {

      // REGISTRO obtiene data enviada por el usuario
      setUser(state, payload) {
         state.userDB = payload;
         state.userTokenPayload = payload;
      },

      // COMPROBADOR DE USER TOKEN 
      checkUser(state, payload) {
         state.token = payload;

         if (payload === null) {
            state.userDB === null;
         } else {
            state.userDB = decode(payload);

            /*router.push({
               name: 'Dashboard'
            });*/
         }
      },

      // RELLENADOR DE ARRAYS
      refillArrays(state, payload) {
         state.userList = payload;
         state.userById = payload;

      },
      saveDataInLocal(state, payload) {
         state.token = localStorage.setItem('token', payload.token);
         state.user_id = localStorage.setItem('user_id', payload.tokenPayload.id);
      },


   },

   actions: {

      // PETICIÓN POST para crear cuenta usuario
      createUser: async ({
            commit
         },
         payload
      ) => {
         try {
            const response = await axios.post(`users/create`, {
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

      // LIST USERS
      getUserList: async ({
         commit
      }) => {
         let token = localStorage.getItem("token");
         let config = {
            headers: {
               authorization: token, //localStorage.getItem('token'),
            }
         }
         const userListJSON = await axios.get('users/list', config);
         const userList = userListJSON.data.data;
         console.log("FROM GET USERS:", userList);
         commit('refillArrays', userList)
      },

      // GET USER BY ID
      getUser: async ({
         commit
      }) => {
         let token = localStorage.getItem("token");
         let user_id = localStorage.getItem("user_id");
         let config = {
            headers: {
               authorization: token, //localStorage.getItem('token'),
            }
         }
         const userListJSON = await axios.get(`users/${user_id}`, config);
         const userData = userListJSON.data.data;
         console.log("FROM GET USERS:", userData);
         commit('refillArrays', userData)
      },

      // LOGIN
      login: async ({
         commit
      }, userLogin) => {
         try {
            const response = await axios.post(
               `users/login`, userLogin);
            //console.log(userDB.email);
            if (response.status === 200) {
               router.push({
                  name: "Adventures"
               });
            }
            const loginData = response.data.data;
            commit('saveDataInLocal', loginData)
            commit('checkUser', loginData.token)
            commit('setUser', response.data.data.tokenPayload)

            //console.log(response.data.data.tokenPayload);

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
      // PETICIÓN PUT para editar cuenta usuario
      editUser: async ({
            commit
         },
         payload
      ) => {
         let token = localStorage.getItem("token");
         let user_id = localStorage.getItem("user_id");
         let config = {
            headers: {
               authorization: token, //localStorage.getItem('token'),
            }
         }

         const formData = new FormData();
         formData.append("name", payload.name, );
         formData.append("surname", payload.surname);
         formData.append("date_birth", payload.date_birth);
         formData.append("country", payload.country);
         formData.append("city", payload.city);
         formData.append("email", payload.email);
         formData.append("password", payload.password);
         formData.append("image", payload.image);

         try {
            const response = await axios.put(`users/update/${user_id}`, formData, config);

            console.log(response);
            if (response.status === 200) {
               location.reload();
            }
         } catch (error) {

            console.log(error);
         }
      },




      // LOGOUT
      logout({
         commit
      }) {
         commit('checkUser', null);
         localStorage.removeItem('token');
         localStorage.removeItem('user_id');
         router.push({
            name: 'Home'
         });
      },


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