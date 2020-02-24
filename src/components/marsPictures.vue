<template lang="html">
  <div >
    <label>
      <h2>Pictures from mars by the day: please pick the date below</h2>
      <input
      <input v-on:change="handleClick" type="date"  v-model="datee">
      <!-- <button type="submit" :value="date">Find</button> -->
      <br>
    </label>
    <img class="main" v-if="marsPictures" v-for="(photo, index) in marsPictures" height="400":src="photo.img_src" :key="index">
  </div>
</template>

<script>
import { eventBus} from '../main.js'

export default {
  name: 'mars-images',
  props: ['marsPictures'],
  data() {
    return {
      datee: null,
      dates: [],
      array: [],
      newDate: null,
      a1: null,
      a2: null,
      a3: null
    }
  },

  methods: {
    changeFormat(){
      let splitDate = this.datee.split('-')
      const first = splitDate[0]
      this.array.push(first)
      splitDate.splice(0, 1)
      for (let part of splitDate){
        if (part.charAt(0) == '0'){
          const newPart = part.slice(1)
          this.array.push(newPart)
        }else{
          this.array.push(part)
          console.log(this.array);
        }

      }

    },
    changeFormat2(){
      let a1 = this.array[0]
      let a2 = this.array[2]
      let a3 = this.array[1]
      this.newDate = `${a1}-${a3}-${a2}`
    },

    handleClick(){
      this.changeFormat()
      this.changeFormat2()


      eventBus.$emit('mars-date', this.newDate)
      this.array =[]
      this.newDate = null
    }


  }




}
</script>

<style lang="css" scoped>
.main{
  display: inline;
}
</style>
