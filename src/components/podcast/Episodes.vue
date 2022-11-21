<template>
  <div>

    <!-- TITULO -->
    <div class="row">
      <div class="col-12 cuadro text-left p-3">
        <h6>Episodes: {{episodes.length}}</h6>
      </div>
    </div>

    <!-- EPISODIOS -->
    <div class="row mt-4">
      <div class="col-12 cuadro">
        <table class="table table-striped text-left " id="listEpisodes">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="episode in this.episodes"  :key="episode.id">
              <td>
                <router-link
                  :to="{
                    name: 'Episode',
                    params: {
                      episode_id: episode.id+'',
                      podcast_id: this.$route.params.podcast_id
                    }
                  }" class="episodeLink"
>

                  {{episode.title}}

                </router-link>
              </td>
              <td>{{this.adaptData(episode.pubDate)}}</td>
              <td>{{episode.duration}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Episodes',
  props: ['episodes'],
  beforeMount() {
    this.adaptData()
  },
  methods: {
    adaptData(date) {
      return this.formatDate(new Date(date))
    },
    formatDate(date) {
      return date.getDate() + "-"+ date.getMonth()+ "-" +date.getFullYear();
    }
  }

}
</script>
