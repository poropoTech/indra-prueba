<template>
  <div class="">
    <div class="row">
      <div v-if="!this.$store.state.loadingPart" class="col-12 cuadro text-left p-3">
        <h6>{{episode.title}}</h6>
        <p v-html="episode.content"></p>
        <div v-html="episode.media"></div>
        <div id="reproductor" class="">
          <audio class="audio" controls controlsList="noplaybackrate nodownload">
            <source :src="episode.url" type="audio/mpeg">
          </audio>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// import axios  from 'axios';

export default {
  name: 'Episode',
  props: ['episodes'],
  data() {
    return {
      episode: null
    }
  },
  beforeCreate() {
    this.$store.state.loadingPart = true
  },
  created() {
    this.getData()
  },
  methods: {
    // buscamos del store por su id
    getData() {
      if(this.$route.params.episode_id == null)
        this.$store.state.error = true
      this.episodes.forEach((episode) => {
        if(episode.id == this.$route.params.episode_id)
          this.episode = episode
      });
      this.$store.state.loadingPart = false;

    }
  }

}
</script>
