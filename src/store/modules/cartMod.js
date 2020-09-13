import router from '@/router'
import axios from 'axios'
import Swal from 'sweetalert2/src/sweetalert2.js'
import {
     find,
     filter
} from 'lodash';

export default {


     namespaced: true,
     strict: true,

     state: {
          cart: [],

     },
     mutations: {
          addAdventure(state, adventure) {
               const adventuresInCart = find(state.cart, {
                    id: adventure.id
               });
               if (!adventuresInCart) {
                    const copy = Object.assign({}, adventure);
                    copy.quantity = 1;
                    state.cart.push(copy);
               } else {
                    adventuresInCart.quantity += 1;
               }
          },
          removeAdventureFromCart(state, adventure) {
               /*state.cart = filter(state.cart, (
                     _adventure
               ) => _adventure.id !== adventure.id);*/
               if (removeAdventuresInCart) {
                    state.cart = filter(state.cart, ({
                         id
                    }) => id !== cart.id);
               }


          },

     },

     actions: {


     },
     getters: {

          totalCost(state) {
               return state.cart.reduce((sum, adventure) => {
                    return (parseFloat(adventure.price) * adventure.quantity) + sum
               }, 0).toFixed(2);
          }
     },
}