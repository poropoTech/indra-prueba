import { createRouter, createWebHistory } from "vue-router";
// Componentes
import Home from '@/components/Home.vue'
import Podcast from '@/components/podcast/Podcast.vue'
import Episode from '@/components/podcast/Episode.vue'
import Episodes from '@/components/podcast/Episodes.vue'


// rutas
const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Home,
  },
  {
    path: "/podcast",
    name: "Podcast",
    component: Podcast,
    children: [
      {
        path: ':podcast_id', component: Episodes,
        name: "Episodes"
      },
      {
        path: ':podcast_id/episode/:episode_id', component: Episode,
        name: "Episode"
      }
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
