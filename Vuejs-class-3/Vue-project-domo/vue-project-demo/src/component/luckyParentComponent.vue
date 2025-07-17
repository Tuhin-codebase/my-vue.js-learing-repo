<template>
    <h1 class="header" >We learn will how to use Vue.js and all usecase </h1>
    <slot name="learnSlot" ></slot>
    <slot> </slot>
  <div  class="flex justify-center  p-3 m-2 border-2 border-red-500 " >
    <button class="border-2 rounded-lg px-4 m-2 " v-on:click=" toggle =  !toggle" >Toggle Button</button>
    <button class="border-2 rounded-lg px-4  m-2" v-on:click=" toggle = true " >Add Lucky Number Button</button>
    <button class="border-2 rounded-lg px-4   m-2 "  v-on:click="toggle = flase" >Add Random Number Button</button>
  </div>
  <keep-alive :include="['LuckyNumber', 'luckyNumbeV2']"  > 
  <component :is="componentAddComputed" />
  </keep-alive>
</template>

<script setup>
  import Conact from './button.vue';
  import { ref, reactive, provide, computed } from 'vue';
  import LuckyNumber from './LackyNumber.vue';
  import luckyNumbeV2 from './luckyNumbeV2.vue';
let toggle = ref(true);
let componentAddComputed = computed(() => {
  return toggle.value ? LuckyNumber : luckyNumbeV2;
})
  
</script>

<style scoped >
.header{
    background-color: rgb(94, 68, 68);
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: white;
    margin-bottom: 2px;
}
</style>