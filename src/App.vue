<template>
  <div>

      <CargadorGeneral v-if="this.$store.state.loading"/>

      <div v-if="this.$store.state.error" class="alert alert-danger">
        <strong> ¡Ep! </strong>
        Parece que hay algun error que no estamos manejando  😅
      </div>

      <Cabezera/>

      <router-view v-if="!this.$store.state.loading" />




  </div>
</template>

<script>

// cabezera
import Cabezera from './components/Cabezera.vue'
// cargador de la app inicial
import CargadorGeneral from './components/cargador/General.vue'
// axios
import axios  from 'axios';
//
import '@/assets/style.css';


export default {
  name: 'App',
  components: {
    Cabezera,
    CargadorGeneral
  },
  mounted() {
    this.loadData()
  },
  methods: {
    // carga los datos
    loadData() {

      if(!this.hasData() || !this.isValid())
        this.requestData()
      else this.validateData()


    },
    // Nos dice si hay datos en cookie
    hasData() {
      return window.localStorage.getItem('podcasts') !== null;
    },
    // nos dice que no esté caducada
    isValid() {
      var fecha = window.localStorage.getItem('podcastsUntil')
      if(fecha == null )
        return false
      if(new Date(fecha) > new Date())
        return false
      return true;

    },
    // vemos que los datos son buenos y los ponemos en store.state
    validateData() {
      this.$store.state.podcasts =   JSON.parse(window.localStorage.getItem('podcasts'));
      this.$store.state.loadingPart = false
      this.$store.state.loading = false
      return true;
    },
    // solicita datos a la api
    requestData() {
      // console.log('REQUERIMOS a la API')
      axios
      .get(this.$store.state.apiBase+'toppodcasts/limit=100/genre=1310/json')
      .then(response => {
        console.log(response)
        this.$store.state.podcasts = response.data.feed.entry
        this.saveInLocal(response.data.feed.entry)
      })
      .catch(error => {
        console.log(error)
        this.error = true
      })
      .finally(() => {
        this.$store.state.loadingPart = false
        this.$store.state.loading = false
      })
    },
    saveInLocal(data) {
      // datos
      localStorage.setItem("podcasts",JSON.stringify(data));
      // caducidad
      var hoy = new Date();
      var caducidad = hoy.setDate(hoy.getDate() + 1);
      localStorage.setItem("podcastsUntil",caducidad);

    }

  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
