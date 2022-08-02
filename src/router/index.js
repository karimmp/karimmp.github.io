import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Home
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: () => import('../views/Nosotros.vue')
  },
  {
    path: '/diversidad',
    name: 'Diversidad',
    component: () => import('../views/Diversidad.vue')
  },
  {
    path: '/rh',
    name: 'RH',
    component: () => import('../views/Rh.vue')
  },
  {
    path: '/coaching',
    name: 'Coaching',
    component: () => import('../views/Coaching.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import( '../views/Blog.vue')
  },
  {
    path: '/contactanos',
    name: 'Contactanos',
    component: () => import( '../views/Contactanos.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
