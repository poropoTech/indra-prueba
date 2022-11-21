<template>
  <div class="container">
    <div class="row mt-3">
      <!-- Esta columna carga info de local -->
      <div class="col-sm-3 cuadro lateralDetail">
        <router-link
            :to="{
              name: 'Episodes',
              params: {
                podcast_id: this.$route.params.podcast_id
              }
            }">
            <div class="containeriMG">
              <img :src="podcast['im:image'][2].label" alt="" />
            </div>
            <hr>
            <strong>{{podcast['im:name'].label}}</strong> <br>
            <span>by {{podcast['im:artist'].label}}</span>
        </router-link>
        <hr>
        <div class="text-left description">
          <b>Description</b>
          <p>{{podcast['summary']['label']}}</p>
        </div>
      </div>
      <!-- Esta columna carga info consultada -->
      <div class="col-sm-9 ">
        <router-view
          class="detailedEpisodes"
          v-if="!this.$store.state.loadingPart"
          :episodes="this.episodes"
          />
      </div>
    </div>
  </div>
</template>

<script>




export default {
  name: 'Podcast',
  data() {
    return {
      podcast: null,
      podcast_id:null,
      episodes: null
    }
  },
  beforeCreate() {
    this.$store.state.loadingPart = true;
  },
  created() {
    this.getData()
  },
  methods: {
    // carga la info en general
    getData() {
      // param
      this.podcast_id = this.$route.params.podcast_id;
      if(this.podcast_id == null || this.podcast_id === undefined)
        this.$store.state.error = true;
      // datos locales info general
      if(!this.searchFromData(this.podcast_id))
        this.$store.state.error = true
      // consulta episodios
      this.getEpisodes();



    },
    // nos da el podcast del store array guardado en local
    searchFromData(podcast_id) {
      var found = false
      this.$store.state.podcasts.forEach((podcast) => {
        if(podcast.id.attributes['im:id'] == podcast_id) {
          this.podcast = podcast;
          found = true

        }
      });
      return found

    },
    // obtiene los episodios
    getEpisodes() {
      if(!this.hasData() || !this.isValid())
        this.requestData()
      else this.validateData()
    },
    // Nos dice si hay datos en cookie
    hasData() {
      return window.localStorage.getItem("episode-"+this.podcast_id) !== null;
    },
    // nos dice que no esté caducada
    isValid() {
      var fecha = window.localStorage.getItem("episode-"+this.podcast_id+'-Until')
      if(fecha == null )
        return false
      if(new Date(fecha) > new Date())
        return false
      return true;

    },
    // vemos que los datos son buenos y los guardamos
    validateData() {
      this.episodes =   JSON.parse(window.localStorage.getItem("episode-"+this.podcast_id));
      this.$store.state.loadingPart = false
      return true;
    },
    // pide los detalles del podcast - Solución propuesta en documentación
    requestData() {
      console.log('SOLICITA DATOS')
      var route ='https://itunes.apple.com/lookup?id='+this.podcast_id
      fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(route)}`)
      .then(response => {
        if (response.ok) return response.json()
          this.$store.state.error = true
      })
      .then(data => {
        data = JSON.parse(data.contents)
        if(data.resultCount>0)
          this.requestDataDetailedPodcast(data.results[0].feedUrl)
        else
          this.$store.state.error = true;
      })


    },
    // obtiene los episodios del podcast a partir de los datos obtenidos del recurso anterior
    requestDataDetailedPodcast(url) {
      fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
      .then(response => {
        if (response.ok) return response.json()
          this.$state.error = true;
      })
      .then(data => {
        console.log('TENEMOS',data.contents)
        this.episodes = this.processData(data.contents);
        this.saveInLocal(JSON.stringify(this.episodes));

      })
      .finally(() => {
        this.$store.state.loadingPart = false
      })

    },
    // procesamos el XML, recorremos los elements tipos 'item'
    // y guardamos la info que utilizaremos que no es toda
    processData(data) {
      var list = [];
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(data,"text/xml");
      var items = xmlDoc.getElementsByTagName('item');
      for (var i = 0; i < items.length; i++) {
        var entry = {}
        for (var child of items[i].childNodes) {
          console.log(child.tagName)

          if(child.tagName == 'title')
            entry.title = child.innerHTML
          if(child.tagName == 'itunes:duration')
            entry.duration = child.innerHTML
          if(child.tagName == 'pubDate')
            entry.pubDate = child.innerHTML
          if(child.tagName == 'content:encoded')
            entry.content = child.innerHTML
          if(child.tagName == 'media:content')
            entry.media = child.innerHTML
        }
        list.push(entry)
      }
      return list;
    },
    // Guardamos los datos en storage Local
    saveInLocal(data) {
      // datos
      localStorage.setItem("episode-"+this.podcast_id,data);
      // caducidad
      var hoy = new Date();
      var caducidad = hoy.setDate(hoy.getDate() + 1);
      localStorage.setItem("episode-"+this.podcast_id+'-Until',caducidad);

    }

  }
}
</script>
