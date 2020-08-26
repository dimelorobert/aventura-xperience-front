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
    path: '/aventuras',
    name: 'Aventuras',
    component: () => import( /* webpackChunkName: "about" */ '../views/AventurasView.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  const protectedRoute = to.matched.some(record => record.meta.requireAuth);

  if (protectedRoute && store.state.token === null) {
    next({name:'Login'});
  } else {
    next();
  }
  

})

export default router