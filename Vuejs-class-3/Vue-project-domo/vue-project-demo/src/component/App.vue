<template>
  <div class="text-3xl text-center" >
    Hello user how to use composibole in Vue.js 3!
  </div>
  <button class="border-2 mx-2 px-3 rounded-sm " v-on:click="increment"  >increment</button>
  <button  class="border-2 mx-2 px-3 rounded-sm "  @click="drecement" >derecemnt</button>
  <p>{{ count }}</p>
  <contactUs />
  
</template>

<script setup >
import {useFunction} from "../composibile/composibile";
const {count, increment , drecement} = useFunction();
import contactUs from "./contactUs.vue";
 
</script>