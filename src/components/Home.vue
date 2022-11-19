<template>
  <div class="container">
    <div class="row mt-3">
      <div class="d-flex searcher" >
        <span class="badge badge-info bg-info m-auto ">
          100
        </span>
        <input v-model="search" type="text" class="form-control" id="search" aria-describedby="Buscar" placeholder="Filter Podcasts">
      </div>
    </div>
    <div  class="row | containPodcast">
      <div v-for="podcast in filteredPodcasts()"  :key="podcast" class="col-sm-3">
        <article>
          <img :src="podcast['im:image'][2].label" alt="" />
          <strong>{{podcast['im:name'].label}}</strong>
          <span>Author: {{podcast['im:artist'].label}}</span>
        </article>

      </div>
    </div>
  </div>
</template>

<script>
import axios  from 'axios';

export default {
  name: 'Inicio',
  data() {
    return {
      search: '',
    }
  },
  created() {
    this.$store.state.loadingPart = true
    this.loadData()
  },
  methods: {
    // carga los datos
    loadData() {



      if(!this.hasData() || !this.dataLessDanADay())
        this.requestData()


      // this.$store.state.loadingPart = false

    },
    // Nos dice si hay datos
    hasData() {

    },
    // nos dice si los datos tienen menos de 24 h
    dataLessDanADay() {

    },
    // solicita datos a la api
    requestData() {
      axios
      .get(this.$store.state.apiBase+'toppodcasts/limit=100/genre=1310/json')
      .then(response => {
        console.log(response)
        this.$store.state.podcasts = response.data.feed.entry
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => {
        // this.$store.state.loadingPart = false

      })
    },
    filteredPodcasts() {
      return this.$store.state.podcasts.filter(podcast => {

         return podcast['im:name'].label.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || podcast['im:artist'].label.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    }

  }

}
</script>
