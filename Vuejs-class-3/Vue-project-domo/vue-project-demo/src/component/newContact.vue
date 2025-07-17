<template>
    <div class=" container w-full " >
        <div class="text-center text-2xl font-bold mb-3 " > Add new contact </div>
        <form v-on:submit.prevent="addContactFunction()" class=" rounded-sm p-3 border-2 border-green-400 flex space-x-3 justify-center  "  >
            <input class="border-2 "  type="text " placeholder="Name" v-model="contactData.name" >
            <input class="border-2 " type="text" placeholder="age" v-model="contactData.age" >
            <input class="border-2 "  type="number" placeholder="phone" v-model.number="contactData.phone" >
            <button class="border-2 bg-ponk-200 px-2 rounded-lg font-bold" type="submit"  >Submit</button>
        </form>
    </div>
</template>
<script setup >
import { reactive, defineEmits } from 'vue';
   const emits = defineEmits("add-contactValue");

    let contactData = reactive ({
        name: '',
        age: '',
        phone: '',
    });
    function addContactFunction () {
        emits('add-contactValue', contactData);
        console.log(contactData);
    }
  
</script>