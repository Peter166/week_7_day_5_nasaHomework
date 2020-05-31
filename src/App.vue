<template class="main" lang="html">
  <div id="main">
    <mars-images :marsPictures="marsPictures"/>
    <nasa-image :nasaImage='nasaImage'/>

  </div>
</template>

<script>
window.axios = require('axios');
import { eventBus } from './main.js'
import NasaImage from './components/nasaImage.vue';
import MarsPictures from './components/marsPictures.vue';


export default {
  name: 'app',
  data(){
    return{
      nasaImage: null,
      marsPictures: null,
      marsDate: null,


    }
  },
  methods:{


  },

  mounted(){



    fetch('https://api.nasa.gov/planetary/apod?api_key=h2u30Hbb2iB2XRprb1nPK51ZeBngYk0adPMvFcK1')
    .then(res => res.json())
    .then(data => this.nasaImage = data)

    eventBus.$on('mars-date', (datee)=> {
      this.marsDate = datee;

      let a1 = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='
      let a2 = '&api_key=hViuHXWgDjFeURpIha7F9YYMmRcyq8fU81bSJUZF'
      let link = (a1 + this.marsDate+ a2)

      axios.get(link)
      .then(res => this.marsPictures = res.data.photos);

    })





  },
  components: {
    'nasa-image': NasaImage,
    'mars-images': MarsPictures
  }
}




</script>

<style lang="css" scoped>
.main{
  background-color: lightgrey;
}
</style>
