import { createRouter, createWebHistory } from "vue-router";
// Componentes
import Home from '@/components/Home.vue'


// rutas
const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Home,
  }
]

// creamos router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});


// Devolvemos

export default router;
