import { createRouter, createWebHistory } from "vue-router";
// Componentes
import Home from '@/components/Home.vue'
import Podcast from '@/components/Podcast.vue'
import Episode from '@/components/Episode.vue'


// rutas
const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Home,
  },
  {
    path: "/podcast/:podcast_id",
    name: "Podcast",
    component: Podcast,
    children: [
      {
        path: 'episode/:episode_id', component: Episode,
        name: "Episode"
      },
    ]
  },
]

// creamos router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});


// Devolvemos

export default router;
