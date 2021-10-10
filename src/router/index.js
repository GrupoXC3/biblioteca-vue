import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DetalleLibro from '../views/DetalleLibro.vue'
import Login from '../views/Login.vue';
import Registro from '../views/Registro.vue';
import Busqueda from '../views/Busqueda.vue';

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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/busqueda',
    name: 'busqueda',
    component: Busqueda
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
