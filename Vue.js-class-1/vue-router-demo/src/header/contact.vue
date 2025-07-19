<template>
    <h1>Hello i am contact.vue</h1>
    <div v-for="product in listItems" >
       {{ product.name }} 
    </div>
    <span>your contact Id {{ router.params.id }}</span><br>
    <button @click="$router.go(-1)" >back</button>
</template>
<script setup >
import { useRoute } from 'vue-router';
   const listItems = [
    {id: 1, name: "product 1"},
    {id: 2, name: "product 2"},
    {id: 3, name: "product 3"},
   ];
   const router = useRoute();

   
</script>