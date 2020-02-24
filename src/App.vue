<template class="main" lang="html">
  <div class="">
    <h1>NASA IMAGE OF THE DAY</h1>
    <mars-images :marsPictures="marsPictures"/>
    <nasa-image :nasaImage='nasaImage'/>

  </div>
</template>

<script>

import { eventBus } from './main.js'
import NasaImage from './components/nasaImage.vue';
import MarsPictures from './components/marsPictures.vue'

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
      let link = (a1 + this.marsDate)

      fetch(link, options)
      // const getData= () =>{
      //   axios.get(link).then(res => {
      //     console.log(res);
      //
      // const options = (
      // method: 'get',
      // headers: new Headers({
      //   'Access-Control-Allow-Origin': '*',
      //   'Authorization': ['hViuHXWgDjFeURpIha7F9YYMmRcyq8fU81bSJUZF']
      //   'Content-Type': 'application/json'
      //     })
      .then(res => res.json())
      .then(data => this.marsPictures = data)
      // }
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
