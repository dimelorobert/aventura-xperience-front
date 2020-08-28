// decodificar token
import decode from 'jwt-decode';
import router from '@/router'

export default {
   namespaced: true,

   state: {
      token: '',
      userDB: '',
   },
   mutations: {
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
      readToken({commit}) {
         const token = localStorage.getItem('token');
         if(token) {
            commit('getUser',token);
         } else  {
            commit('getUser', '');
         }
      }
      
   },
   getters: {
      isActive: state => !!state.token
   },
}