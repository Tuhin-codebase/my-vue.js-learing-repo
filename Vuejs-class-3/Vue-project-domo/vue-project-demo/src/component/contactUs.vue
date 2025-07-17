<template>
  <div class="text-3xl text-center" >
   Hello contact.vue i am app.vue;
  </div>
  <button class="border-2 mx-2 px-3 rounded-sm " v-on:click="increment"  >++</button>
  <span>{{ count }}</span>
  <button  class="border-2 mx-2 px-3 rounded-sm "  @click="drecement" >--</button>
  
</template>

<script setup >
import {useFunction} from "../composibile/composibile";
const {count, increment , drecement} = useFunction();
 
</script>