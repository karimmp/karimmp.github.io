import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Inicio.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Addition | Inicio',
    component: Home
  },
  {
    path: '/nosotros',
    name: 'Addition | Nosotros',
    component: () => import('../views/Nosotros.vue')
  },
  {
    path: '/diversidad',
    name: 'Addition | Diversidad',
    component: () => import('../views/Diversidad.vue')
  },
  {
    path: '/rh',
    name: 'RH',
    component: () => import('../views/Rh.vue')
  },
  {
    path: '/coaching',
    name: 'Addition | Coaching',
    component: () => import('../views/Coaching.vue')
  },
  {
    path: '/blog',
    name: 'Addition | Blog',
    component: () => import( '../views/Blog.vue')
  },
  {
    path: '/2021/diciembre',
    name: 'Addition | Diciembre',
    component: () => import( '../views/2021/Diciembre.vue')
  },
  {
    path: '/contactanos',
    name: 'Addition | Contactanos',
    component: () => import( '../views/Contactanos.vue')
  },
  {
    path: '/alianzas',
    name: 'Addition | Alianzas Comerciales',
    component: () => import( '../views/Alianzas.vue')
  },
  {
    path: '/NMX025',
    name: 'Addition | NMX025',
    component: () => import( '../views/NMX025.vue')
  },
  {
    path: '/NOM035',
    name: 'Addition | NOM035',
    component: () => import( '../views/NOM035.vue')
  },
  {
    path: '/NOM037',
    name: 'Addition | NOM037',
    component: () => import( '../views/NOM037.vue')
  },
  {
    path: '/ServiciosAdicionales',
    name: 'Addition | ServiciosAdicionales',
    component: () => import( '../views/ServiciosAdicionales.vue')
  },

]

const router = new VueRouter({
  routes,

  scrollBehavior () {
    return { x: 0, y: 0 };
  }
})


router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
}); 

export default router
