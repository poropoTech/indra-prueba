<template>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <router-link
      :to="{
        name: 'Inicio'
        }">
    Podcaster
  </router-link>
    <Mini v-if="this.$store.state.loadingPart"/>
  </div>
</nav>
</template>

<script>

import Mini from '@/components/cargador/Mini.vue'

export default {
  name: 'Cabezera Component',
  components: {
    Mini
  },

}
</script>
