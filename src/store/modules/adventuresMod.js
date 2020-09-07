import router from '@/router'
import axios from 'axios'
import Swal from 'sweetalert2/src/sweetalert2.js'
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
          createAdventure: async ({
                    commit
               },
               payload
          ) => {
               try {
                    const formData = new FormData();
                    formData.append("name", payload.name, );
                    formData.append("description", payload.description);
                    formData.append("start_date_event", payload.start_date_event);
                    formData.append("country", payload.country);
                    formData.append("city", payload.city);
                    formData.append("vacancy", payload.vacancy);
                    formData.append("price", payload.price);
                    formData.append("image", payload.image);
                    formData.append("image1", payload.image1);
                    formData.append("image2", payload.image2);
                    formData.append("image3", payload.image3);

                    const response = await axios.post(`adventures/create`, formData, config);
                    console.log(response);
                    if (response.status === 200) {


                         router.push({
                              name: 'Adventures'
                         });
                    }
               } catch (error) {
                    Swal.fire({
                         title: `Error : ${error.response.status}`,
                         text: `${error.response.data.message}`,
                         icon: 'error',
                         confirmButtonText: 'Ok'
                    })
               }

          },

          getAdventures: async ({
               commit
          }, ) => {
               let token = localStorage.getItem("token");
               let config = {
                    headers: {
                         authorization: token
                    }
               }
               try {
                    const response = await axios.get('adventures/list', config);
                    const adventureList = response.data.data;
                    console.log("FROM GET ADVENTURES:", adventureList);
                    commit('refillArrays', adventureList);
               } catch (error) {
                    Swal.fire({
                         title: `Error : ${error.response.status}`,
                         text: `${error.response.data.message}`,
                         icon: 'error',
                         confirmButtonText: 'Ok'
                    })

                    console.log(error.response.data.message);
               }

          },


     },
     getters: {},
}