import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/templates'
  },
  {
    path: '/templates',
    name: 'templates',
    component: () => import('../views/Templates')
  },
  {
    path: '/datasets',
    name: 'datasets',
    component: () => import('../views/Datasets')
  }
]

const router = new VueRouter({
  routes
})

export default router
