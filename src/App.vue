<template>
  <div class="">
      <Cabezera/>
      <CargadorGeneral v-if="false"/>
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
  data(){
    return {
      name: 'alex'
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
