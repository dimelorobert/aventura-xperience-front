import router from '@/router'
import axios from 'axios'
import Swal from 'sweetalert2/src/sweetalert2.js'

const filtersRST = () => {
     return {

          query: '',
          category_id: '',
          city: '',
          from: '',
          to: '',
          min_price: '',
          max_price: '',
          isAvailable: "Disponible",
          vacancy: '',
     }
}

export default {

     // VARIABLE QUE SE ACTIVA EN TRUE PARA USAR MODULOS
     namespaced: true,
     strict: true,


     // variables a usar
     state: {
          communities: [{
                    "id": "01",

                    "community": "Andalucia",
                    "cities": [{
                         "name": "Almeria"
                    }, {
                         "name": "Cadiz"
                    }, {
                         "name": "Cordoba"
                    }, {
                         "name": "Granada"
                    }, {
                         "name": "Huelva"
                    }, {
                         "name": "Jaen"
                    }, {
                         "name": "Malaga"
                    }, {
                         "name": "Sevilla"
                    }]
               },
               {
                    "id": "02",
                    "country": "España",
                    "community": "Aragon",
                    "cities": [{
                         "name": "Huesca"
                    }, {
                         "name": "Teruel"
                    }, {
                         "name": "Zaragoza"
                    }]
               },
               {
                    "id": "03",
                    "country": "España",
                    "community": "Principado de Asturias",
                    "cities": [{
                         "name": "Gijón"
                    }, {
                         "name": "Oviedo"
                    }]
               },
               {
                    "id": "04",
                    "country": "España",
                    "community": "Islas Baleares",
                    "cities": [{
                         "name": "Mallorca"
                    }, {
                         "name": "Menorca"
                    }]
               },
               {
                    "id": "05",
                    "country": "España",
                    "community": "Islas Canarias",
                    "cities": [{
                         "name": "Las Palmas de Gran Canaria"
                    }, {
                         "name": "Santa Crúz de Tenerife"
                    }]
               },
               {
                    "id": "06",
                    "country": "España",
                    "community": "Cantabria",
                    "cities": [{
                         "name": "Santander"
                    }]
               },
               {
                    "id": "07",
                    "country": "España",
                    "community": "Castilla La Mancha",
                    "cities": [{
                         "name": "Albacete"
                    }, {
                         "name": "Ciudad Real"
                    }, {
                         "name": "Cuenca"
                    }, {
                         "name": "Guadalajara"
                    }, {
                         "name": "Toledo"
                    }]
               },
               {
                    "id": "08",
                    "country": "España",
                    "community": "Castilla y León",
                    "cities": [{
                              "name": "Avila"
                         }, {
                              "name": "Burgos"
                         }, {
                              "name": "León"
                         },
                         {
                              "name": "Palencia"
                         }, {
                              "name": "Salamanca"
                         }, {
                              "name": "Segovia"
                         }, {
                              "name": "Soria"
                         }, {
                              "name": "Valladolid"
                         }, {
                              "name": "Zamora"
                         }
                    ]
               },
               {
                    "id": "09",
                    "country": "España",
                    "community": "Cataluña",
                    "cities": [{
                         "name": "Barcelona"
                    }, {
                         "name": "Gerona"
                    }, {
                         "name": "Lerida"
                    }, {
                         "name": "Tarragona"
                    }]
               },
               {
                    "id": "010",
                    "country": "España",
                    "community": "Comunidad Valenciana",
                    "cities": [{
                         "name": "Alicante"
                    }, {
                         "name": "Castellón"
                    }, {
                         "name": "Valencia"
                    }]
               },
               {
                    "id": "11",
                    "country": "España",
                    "community": "Extremadura",
                    "cities": [{
                         "name": "Badajoz"
                    }, {
                         "name": "Caceres"
                    }]
               },
               {
                    "id": "012",
                    "country": "España",
                    "community": "Galicia",
                    "cities": [{
                         "name": "A Coruña"
                    }, {
                         "name": "Lugo"
                    }, {
                         "name": "Orense"
                    }, {
                         "name": "Pontevedra"
                    }, {
                         "name": "Santiago de Compostela"
                    }]
               },
               {
                    "id": "13",
                    "country": "España",
                    "community": "La Rioja",
                    "cities": [{
                         "name": "La Rioja"
                    }]
               },
               {
                    "id": "14",
                    "country": "España",
                    "community": "Comunidad de Madrid",
                    "cities": [{
                         "name": "Madrid"
                    }]
               },
               {
                    "id": "15",
                    "country": "España",
                    "community": "Comunidad de Navarra",
                    "cities": [{
                         "name": "Navarra"
                    }]
               },
               {
                    "id": "16",
                    "country": "España",
                    "community": "País Vasco",
                    "cities": [{
                         "name": "Bilbao"
                    }, {
                         "name": "Vitoria"
                    }, {
                         "name": "San Sebastian"
                    }]
               },
               {
                    "id": "17",
                    "country": "España",
                    "community": "Region de Murcia",
                    "cities": [{
                         "name": "Murcia"
                    }]
               },
               {
                    "id": "18",
                    "country": "España",
                    "community": "Ceuta",
                    "cities": [{
                         "name": "Ceuta"
                    }]
               },
               {
                    "id": "19",
                    "country": "España",
                    "community": "Melilla",
                    "cities": [{
                         "name": "Melilla"
                    }]
               }
          ],
          vacancies: [{
                    value: 1,
               },
               {
                    value: 2,
               },
               {
                    value: 3,
               },
               {
                    value: 4,
               },
               {
                    value: 5,
               },
               {
                    value: 6,
               },
               {
                    value: 7,
               },
               {
                    value: 8,
               },
               {
                    value: 9,
               },
               {
                    value: 10,
               },
          ],
          adventures: [],
          filters: filtersRST(),
     },

     mutations: {
          // RELLENADOR DE ARRAYS
          setAdventures(state, adventures) {
               state.adventures = adventures;
          },

          setFilter(state, data) {
               state.filters[data['filters']] = data.value;
               console.log('from setfilter', data.value);
          },
          resetFilter(state) {
               state.filters = filtersRST();
          }

     },

     actions: {
          createAdventure: async ({
                    commit
               },
               payload
          ) => {
               let token = localStorage.getItem("token");
               let id_user = localStorage.getItem("user_id");
               let config = {
                    headers: {
                         authorization: token, //localStorage.getItem('token'),
                    }
               }

               const formData = new FormData();
               formData.append("category_id", payload.category_id);
               formData.append("name", payload.name);
               formData.append("description", payload.description);
               formData.append("start_date_event", payload.start_date_event);
               formData.append("country", payload.country);
               formData.append("city", payload.city);
               formData.append("vacancy", payload.vacancy);
               formData.append("isAvailable", payload.isAvailable);
               formData.append("price", payload.price);
               formData.append("image", payload.image);


               try {
                    let response = await axios.post(`/adventures/create`, formData, config);

                    if (response.status === 200) {

                         let timerInterval
                         Swal.fire({
                              title: 'Tu cuenta ha sido creada con exito!',
                              html: `${response.data.message}
                              
                              `,
                              timer: 2000,
                              timerProgressBar: true,
                              onBeforeOpen: () => {
                                   Swal.showLoading()
                                   timerInterval = setInterval(() => {
                                        const content = Swal.getContent()
                                        if (content) {
                                             const b = content.querySelector('b')
                                             if (b) {
                                                  b.textContent = Swal.getTimerLeft()
                                             }
                                        }
                                   }, 100)
                              },
                              onClose: () => {
                                   clearInterval(timerInterval)
                              }
                         }).then((result) => {
                              /* Read more about handling dismissals below */
                              if (result.dismiss === Swal.DismissReason.timer) {
                                   router.push({
                                        name: "Login"
                                   });
                              }
                         })
                    }

               } catch (error) {
                    console.log("FROM ADVENTURE", error.response);
                    Swal.fire({
                         title: `Error : ${error.response.data.status}`,
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
                    const adventureList = await response.data.data;
                    console.log("FROM GET ADVENTURES:", adventureList);
                    commit('setAdventures', adventureList);
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
     getters: {
          filteredAdventures(state) {
               let adventures = state.adventures;

               adventures = adventures.filter(adventure => adventure.isAvailable === state.filters.isAvailable);

               if (state.filters.query.length >= 1) {
                    adventures = adventures.filter(adventure => adventure.name.includes(state.filters.query.toLowerCase()) || adventure.name == state.filters.query.toLowerCase());
               }

               if (state.filters.city) {
                    adventures = adventures.filter(adventure => adventure.city === state.filters.city);
               }

               if (state.filters.category_id) {
                    adventures = adventures.filter(adventure => adventure.category_id === Number(state.filters.category_id));
               }

               if (state.filters.from) {
                    adventures = adventures.filter(adventure => adventure.start_date_event >= state.filters.from);
               }

               if (state.filters.to) {
                    adventures = adventures.filter(adventure => adventure.start_date_event <= state.filters.to);
               }

               if (state.filters.min_price) {
                    adventures = adventures.filter(adventure => adventure.price >= state.filters.min_price);
               }

               if (state.filters.max_price) {
                    adventures = adventures.filter(adventure => adventure.price <= state.filters.max_price);
               }

               if (state.filters.vacancy) {
                    adventures = adventures.filter(adventure => adventure.vacancy >= state.filters.vacancy);
               }

               return adventures;
          }
     },
}