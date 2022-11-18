import { createApp } from 'vue'
import App from './App.vue'


// store
import { createStore } from 'vuex'




// Store data init
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
      errorMessage: null



      // usuario logeado

      // count: 0
    }
  },
  mutations: {
    // increment (state) {
    //   state.count++
    // }
  }
})

// creamos app
const app = createApp(App)
// que use lo neesario
app.use(store)
// montamos
app.mount('#app')
