<template>
  <div class="container">
    <div class="row mt-3">
      <div class="d-flex searcher" >
        <span class="badge  m-auto ">
          100
        </span>
        <input v-model="search" type="text" class="form-control" id="search" aria-describedby="Buscar" placeholder="Filter Podcasts">
      </div>
    </div>
    <div  class="row | containPodcast">

      <div v-for="podcast in filteredPodcasts()"  :key="podcast" class="col-sm-3">

        <router-link :to="{
            name:'Podcast',
            params: {
              podcast_id: podcast.id.attributes['im:id']
            }
          }">
          <article>
            <img :src="podcast['im:image'][2].label" alt="" />
            <strong>{{podcast['im:name'].label}}</strong>
            <span>Author: {{podcast['im:artist'].label}}</span>
          </article>
        </router-link>

      </div>

      <h4 class="mt-5" v-if="!this.$store.state.loadingPart && filteredPodcasts().length == 0">Parece que no se han encontrado resultados</h4>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Inicio',
  data() {
    return {
      search: '',
    }
  },
  created() {

  },
  methods: {


    filteredPodcasts() {
      if(this.$store.state.podcasts)
        return this.$store.state.podcasts.filter(podcast => {
           return podcast['im:name'].label.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || podcast['im:artist'].label.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        })
      else
        return
    }

  }

}
</script>
