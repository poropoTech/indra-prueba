<template>
  <div class="container">
    <h1>Episode</h1>
  </div>
</template>

<script>
// import axios  from 'axios';

export default {
  name: 'Episode',
  props: ['episode'],
  data() {
    return {
      search: '',
    }
  }
}
</script>
