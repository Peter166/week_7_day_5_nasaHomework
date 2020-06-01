<template lang="html">
  <div v-if="nasaImage"id="nasaimage">

    <div id="nasaimage-left">
      <h1 id="pick-date">NASA IMAGE OF THE DAY</h1>
      <img  width="400":src="nasaImage.hdurl">
    </div>

    <div id="nasaimage-right">
      <h2>{{nasaImage.title}} </h2>
      <p>{{nasaImage.date}}</p>
      <p>{{nasaImage.copyright}}</p>
      <h4>{{nasaImage.explanation}}</h4>
    </div>

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
  text-align: center;




}

h4{
  display:inline-block;
  text-align: center;
  border-style: groove;
  width: 700px;
  background-color: lightgrey;
}
</style>
