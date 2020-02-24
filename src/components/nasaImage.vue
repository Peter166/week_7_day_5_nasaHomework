<template lang="html">
  <div v-if="nasaImage"class="nasaimage">
    <!-- <img  :src="nasaImage.hdurl"height="600" width="600"> -->
    <!-- <video width="800" controls>
  <source :src="nasaImage.url" type="video"> -->
  <!-- <source src="mov_bbb.ogg" type="video/ogg"> -->


  <iframe width="800" height="600"
  :src="nasaImage.url">
  </iframe>
    <h4>{{nasaImage.explanation}}</h4>
  </div>

</template>

<script>
export default {
  name: 'nasa-image',
  props: ['nasaImage']
}
</script>

<style lang="css" scoped>

.nasaimage{




}

h4{
  text-align: center;
  border-style: groove;
  width: 700px;
  background-color: lightgrey;
}
</style>
