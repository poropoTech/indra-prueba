<template>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="">Podcaster</a>
    
    <Mini/>
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
