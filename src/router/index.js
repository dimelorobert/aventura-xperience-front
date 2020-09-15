import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/users/:id',
    name: 'User',
    component: () => import( /* webpackChunkName: "users/:id" */ '@/components/users/User'),
    meta: {
      requireAuth: true,
    }
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import( /* webpackChunkName: "users" */ '@/views/users/Users'),
    meta: {
      requireAuth: true,
    }
  },
  
  {
    path: '/adventures/list',
    name: 'AdventureList',
    component: () => import( /* webpackChunkName: "adventureslist" */ '@/components/adventures/AdventureList.vue'),
    // meta: {
    //   requireAuth: true,
    // }
  },
  {
    path: '/adventures',
    name: 'Adventures',
    component: () => import( /* webpackChunkName: "adventures" */ '../views/adventures/Adventures.vue'),
    meta: {
      requireAuth: false,
    }
  },
  {
    path: '/create-account',
    name: 'Registro',
    component: () => import( /* webpackChunkName: "registro" */ '../views/Registro.vue'),

  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/user-dashboard',
    name: 'Dashboard',
    component: () => import( /* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
  },
  {
    path: '/activation-account',
    name: 'Activation',
    component: () => import( /* webpackChunkName: "activation" */ '../views/ActivationAccount.vue')
  },
  {
    path: '/activation-error-account',
    name: 'ActivationError',
    component: () => import( /* webpackChunkName: "activation-error" */ '../views/ActivationErrorAccount.vue')
  },
  {
    path: '*',
    name: 'ErrorView',
    component: () => import( /* webpackChunkName: "about" */ '../views/ErrorView.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {

  const protectedRoute = to.matched.some(record => record.meta.requireAuth);

  if (protectedRoute && store.state.token === null) {
    next({
      name: 'Registro'
    });
  } else {
    next();
  }


})

export default router