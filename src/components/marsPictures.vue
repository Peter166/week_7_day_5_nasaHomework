<template lang="html">
  <div >
    <label id="pick-date">
      <h2 id="pick-date-sign">Pictures from mars by date: please pick the day above</h2>
      <div id="date-div">
      <input v-on:change="handleClick" id="date" type="date"  v-model="datee">
      </div>
      <br>
    </label>
    <img height="300" class="main" v-if="marsPictures" v-for="(photo, index) in marsPictures" :src="photo.img_src" id="nasa-picture" :key="index">
  </div>
</template>

<script>
import { eventBus} from '../main.js'
import '../../style.css'

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
      // split string (html-imput-date) into three parts
      let splitDate = this.datee.split('-')
      // first string (index 0), will be pushed to new array
      const first = splitDate[0]
      this.array.push(first)
      //now we need to delete it of our array.
      splitDate.splice(0, 1)

    // rest of parts of string need to be looped over each.
      for (let part of splitDate){
        // check if this string starts with 0 if yes then delete it
        if (part.charAt(0) == '0'){
          const newPart = part.slice(1)
          //then push it to new array
          this.array.push(newPart)
        }else{
          //if does nto start with 0 then just push it to array
          this.array.push(part)
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
img{
  background-image: radial-gradient(black);
}
</style>
