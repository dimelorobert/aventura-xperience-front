// decodificar token
import decode from 'jwt-decode';
import router from '@/router'
import axios from 'axios'
import Swal from 'sweetalert2/src/sweetalert2.js'



export default {

     // VARIABLE QUE SE ACTIVA EN TRUE PARA USAR MODULOS
     namespaced: true,
     strict: true,

     // variables a usar
     state: {
          selectedUser: null,
          error: false,
          errorMessage: '',
          user_id: {},
          users: [],
          userLogin: {},
          token: '',
          passwordChange: {
               oldPassword: '',
               newPassword: '',
               newPasswordRepeat: ''
          },
          tokenPayload: {},
          userList: '',
          userEdit: '',
          communities: [],
          activateCodeQuery: null,

     },
     mutations: {
          // REGISTRO obtiene data enviada por el usuario
          // setUsers(state, payload) {
          //      state.users = payload;
          // },
          setUsers(state, users) {
               state.users = users;
          },
          setUser(state, user) {
               state.selectedUser = user;
          },
          updateUserStatus(state, payload) {
               // u = user
               const user = state.users.find(u => u.id === payload.id);
               if (user) {
                    user.isAdmin = !user.isUser
               }
          },
          usersError(state, payload) {
               state.error = true;
               state.errorMessage = payload
               state.users = []
          },

          // COMPROBADOR DE USER TOKEN LOGIN USER
          checkUserToken(state, payload) {
               state.token = payload;

               if (payload === '') {
                    state.userLogin = '';
               } else {
                    state.userLogin = decode(payload);
                    state.tokenPayload = state.userLogin.tokenPayload;
                    console.log('FROM CHECK USER', state.tokenPayload);
               }
          },
          saveUserId(state, payload) {
               state.user_id = payload;
          },

          // RELLENADOR DE ARRAYS
          saveUserDataLogin(state, payload) {
               state.userLogin = payload;
               console.log("from refill dta user login", state.userLogin);
               //state.communities = payload;
          },
          saveCommunities(state, payload) {
               state.communities = payload;
               console.log("from refill communities", state.communities);
          }

     },

     actions: {
          /*async getUsers({
               commit
          }) {
               let token = localStorage.getItem("token");
               let config = {
                    headers: {
                         authorization: token, //localStorage.getItem('token'),
                    }
               };
               try {
                    const {
                         data
                    } = await axios.get(`/users/list`, config);
                    commit('setUsers', data)
               } catch (e) {
                    commit('usersError', e.message );
               } finally {
                    console.log('La petición GET users ha finalizado');
               }
          },*/



          // PETICIÓN POST para crear cuenta usuario
          createUser: async ({
                    commit,
                    dispatch
               },
               payload
          ) => {
               const formData = new FormData();
               formData.append("name", payload.name, );
               formData.append("surname", payload.surname);
               formData.append("date_birth", payload.date_birth);
               formData.append("genre", payload.genre);
               formData.append("country", payload.country);
               formData.append("city", payload.city);
               formData.append("email", payload.email);
               formData.append("password", payload.password);
               formData.append("image", payload.image);
               formData.append("acept_terms", payload.acept_terms);

               try {
                    const response = await axios.post(`/users/create`, formData);
                    console.log(response);
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
                              //Read more about handling dismissals below 
                              if (result.dismiss === Swal.DismissReason.timer) {
                                   router.push({
                                        name: "Login"
                                   });
                                   dispatch('getUsers');
                              };
                         });
                    };
               } catch (error) {
                    Swal.fire({
                         title: `Error : ${error.response.data.status}`,
                         text: `${error.response.data.message}`,
                         icon: 'error',
                         confirmButtonText: 'Ok'
                    })
               }

          },

          // LIST USERS
          getUsers: async ({
               commit
          }) => {
               try {
                    let userList = [];

                    let token = localStorage.getItem("token");
                    let config = {
                         headers: {
                              authorization: token, //localStorage.getItem('token'),
                         }
                    }

                    const users = await axios.get('/users/list', config);
                    userList = users.data.data;

                    console.log("FROM GET USERS:", userList);
                    commit('setUsers', userList)
               } catch (error) {
                    Swal.fire({
                         title: `Error : ${error.response.status}`,
                         text: `${error.response.data.message}`,
                         icon: 'error',
                         confirmButtonText: 'Ok'
                    })
               }

          },

          // GET USER BY ID
          getUser: async ({
               commit
          }) => {
               try {
                    let token = localStorage.getItem("token");
                    let user_id = localStorage.getItem("user_id");
                    let config = {
                         headers: {
                              authorization: token,
                         }
                    }
                    const userListJSON = await axios.get(`/users/${user_id}`, config);
                    const userData = await userListJSON.data.data;
                    console.log("FROM GET USERS:", userData);
                    await commit('saveUserDataLogin', userData)
               } catch (error) {
                    console.log(error);
                    Swal.fire({
                         title: `Error : ${error.response.data.status}`,
                         text: `${error.response.data.message}`,
                         icon: 'error',
                         confirmButtonText: 'Ok'
                    })
               }

          },

          // EDesactivar cuenta usuario cuenta
          deactivateAccount: async ({
               commit,
               dispatch
          }) => {
               try {
                    let token = localStorage.getItem("token");
                    let user_id = localStorage.getItem("user_id");
                    let config = {
                         headers: {
                              authorization: token,
                         }
                    }
                    const response = await axios.get(`/users/${user_id}/deactivate`, config);
                    if (response.status === 200) {
                         Swal.fire({
                              title: 'Estas seguro?',
                              text: "con esta acción tu cuenta se desactivará, podras volver a activarla pidiendo un nuevo codigo de activación en la sección de Login",
                              icon: 'warning',
                              showCancelButton: true,
                              confirmButtonColor: '#3085d6',
                              cancelButtonColor: '#d33',
                              confirmButtonText: 'Si, desactivar cuenta!'
                         }).then((result) => {
                              if (result.isConfirmed) {
                                   Swal.fire(
                                        'Desactivada!',
                                        'Tu cuenta ha sido desactivada con éxito',
                                        'success'
                                   )
                                   router.push({
                                        name: "Home"
                                   });
                                   localStorage.removeItem('token');
                                   localStorage.removeItem('user_id');
                                   dispatch('logout')
                              }
                         })



                    }
               } catch (error) {
                    console.log(error);
                    Swal.fire({
                         title: `Error : ${error.response.data.status}`,
                         text: `${error.response.data.message}`,
                         icon: 'error',
                         confirmButtonText: 'Ok'
                    })
               }

          },
          // CITIES 
          async getCities({
               commit
          }) {

               try {
                    const response = await axios.get(
                         `/uploads/json/spanish-communities.json`
                    );
                    const communitiesList = response.data.data;

                    commit('saveCommunities', communitiesList)

                    console.log('FROM COMMUNITIES', response.data.data);
               } catch (error) {
                    console.log("FROM error GETCITIES", await error.response.data);
                    Swal.fire({
                         title: `Error : ${error.response.status}`,
                         text: `${error.response.data.message}`,
                         icon: 'error',
                         confirmButtonText: 'Ok'
                    })
               }
          },

          // LOGIN
          login: async ({
               commit
          }, payload) => {
               try {
                    const response = await axios.post(
                         `/users/login`, payload);
                    console.log('FROM LOGIN', response.data.data);

                    const loginData = response.data.data;
                    localStorage.setItem('token', loginData.token);
                    localStorage.setItem('user_id', loginData.tokenPayload.id);

                    commit('checkUserToken', loginData.token);
                    commit('saveUserId', loginData.tokenPayload.id);
                    commit('saveUserDataLogin', loginData.tokenPayload);



                    if (response.status === 200) {
                         let timerInterval
                         Swal.fire({
                              title: 'Has iniciado sesión con éxito!',
                              html: `${response.data.message}`,
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
                                        name: "Dashboard"
                                   });
                              }
                         })
                    }

                    //console.log(response.data.data.tokenPayload);

               } catch (error) {
                    Swal.fire({
                         title: `Error : ${error.response.status}`,
                         text: `${error.response.data.message}`,
                         icon: 'error',
                         confirmButtonText: 'Ok'
                    })
               }
          },

          // PETICIÓN PUT para editar cuenta usuario
          editUser: async ({
                    commit,
                    dispatch
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
               formData.append("country", payload.country);
               formData.append("city", payload.city);
               formData.append("genre", payload.genre);
               formData.append("image", payload.image);

               try {
                    const response = await axios.put(`users/update/${user_id}`, formData, config);

                    console.log(response);
                    if (response.status === 200) {
                         let timerInterval
                         Swal.fire({
                              title: 'Los datos se han actualizado con éxito',
                              icon: 'success',
                              html: `${response.data.message}`,
                              timer: 2000,
                              confirmButtonText: 'Ok',
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
                                   dispatch('getUser');
                              }
                         })
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

          changePassword: async ({
                    commit,
                    dispatch
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
               try {
                    const response = await axios.put(`users/${user_id}/password`, payload, config);

                    console.log('FROM CHANGE PASSWORD', response);
                    if (response.status === 200) {
                         let timerInterval
                         Swal.fire({
                              title: 'Los datos se han actualizado con éxito',
                              icon: 'success',
                              html: `${response.data.message}`,
                              timer: 2000,
                              confirmButtonText: 'Ok',
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
                                        name: "Home"
                                   });
                                   localStorage.removeItem('token');
                                   localStorage.removeItem('user_id');
                                   dispatch('logout')
                              }
                         })
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

          // LOGOUT
          logout({
               commit
          }) {
               commit('checkUserToken', null);
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
                    commit('checkUserToken', token);
               } else {
                    commit('checkUserToken', '');
               }
          }
     },
     getters: {
          isActive: state => !!state.token,
          userExist(state) {
               if (state.userLogin === null) {
                    return false;
               } else {
                    return true;
               }
          },
          isAdmin(state) {
               return state.users.filter(user => !user.role === 'user')
          },
          isUser(state) {
               return state.users.filter(user => user.role === 'user')
          }

     },
}