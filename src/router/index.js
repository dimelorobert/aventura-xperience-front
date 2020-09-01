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
    path: '/adventures',
    name: 'Aventuras',
    component: () => import( /* webpackChunkName: "about" */ '../components/adventures/Adventures.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/create-account',
    name: 'Registro',
    component: () => import( /* webpackChunkName: "about" */ '../views/Registro.vue'),

  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/user-dashboard',
    name: 'Dashboard',
    component: () => import( /* webpackChunkName: "about" */ '../views/UserDashboard.vue')
  }, {
    path: '/edit-user/:id',
    name: 'EditUser',
    component: () => import( /* webpackChunkName: "about" */ '../views/UserDashboard.vue')
  },
  {
    path: '/activation-account',
    name: 'Activation',
    component: () => import( /* webpackChunkName: "about" */ '../views/ActivationAccount.vue')
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
      name: 'Login'
    });
  } else {
    next();
  }


})

export default router