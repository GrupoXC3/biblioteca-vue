import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DetalleLibro from '../views/DetalleLibro.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/libros/:id',
    name: 'DetalleLibro',
    component: DetalleLibro
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
