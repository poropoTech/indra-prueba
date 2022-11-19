import { createApp } from 'vue'
import App from './App.vue'
// rutas
import router from "./router";
// store
import { createStore } from 'vuex'




// Store Datos iniciales
const store = createStore({
  state () {
    return {
      // loading: indica cuando está cargando toda la página
      loading: false,
      // loadingPart: indica cuando está cargando algun recurso
      loadingPart: true,
      // error: si hubiese algun error mostrar un alert
      error: false,
      // errorMessage: si hubiese mensaje de error
      errorMessage: null,
      // podcasts
      podcasts: [],
      // base de la url api
      apiBase: "https://itunes.apple.com/us/rss/"


    }
  }
})

// creamos app
const app = createApp(App)
// store
app.use(store)
// router
app.use(router);
// montamos
app.mount('#app')
