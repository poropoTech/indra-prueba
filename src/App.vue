<template>
  <div>
      <CargadorGeneral v-if="this.$store.state.loading"/>

      <Cabezera/>

      <router-view />



  </div>
</template>

<script>

// cabezera
import Cabezera from './components/Cabezera.vue'
// cargador de la app inicial
import CargadorGeneral from './components/cargador/General.vue'
// router

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

      // this.$store.state.loading = true

      if(!this.hasData())
        this.requestData()

      if(!this.dataLessDanADay())
        this.requestData()

    },
    // Nos dice si hay datos
    hasData() {

    },
    // nos dice si los datos tienen menos de 24 h
    dataLessDanADay() {

    },
    // solicita datos a la api
    requestData() {

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
