<template>
    <button class="border" v-on:click="showMessage" >show Message</button>
    <h1>{{ message }}</h1>
</template>
<script setup >
import {} from "vue";
    let message = ref("");
    function showMessage() {
        message.value = " how to use Vue.js lifesicyle Demo";
    }

import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from "vue";
  
  onBeforeMount( () => {
    console.log("onBeforeMount-lifeSicleDemo");
  });
  onMounted(() => {
    console.log("onMount-lifeSicleDemo");
  });

  onBeforeUpdate(() => {
    console.log("onBeforeUpdate-lifeSicleDemo");
  });
  onUpdated(() => {
    console.log("onUpdated-lifeSicleDemo");
  });
  onBeforeUnmount(() => {
    console.log("onBeforeUnmount-lifeSicleDemo");
  });
  onUnmounted(() => {
    console.log("onUnmounted-lifeSicleDemo");
  });


</script>