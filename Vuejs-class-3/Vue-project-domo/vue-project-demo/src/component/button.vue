<template>
  <div class="one mb-2 container mx-auto bg-gray-600 text-white w-100 p-3 rounded-lg text-2xl mb-3">
    <span>Name: {{ props.id }}</span><br>
    <span>age: {{ props.age }} </span><br>
    <span>phone: {{props.phone }}</span><br>
    <span>this contact info beilong to: {{ props.card }}</span><br>
    <div>
      <button @click="toggleFunction" class="border-2 rounded-lg px-3 text-green-400" >{{ card ? "add to " : "remove to" }}</button>
      <!-- <LackyNumber > </LackyNumber> -->
    </div>
  </div>
</template>

<script setup >
  import {ref, defineProps, inject} from 'vue';
  import LackyNumber from './LackyNumber.vue';
  const props = defineProps({
    id: "id",
    age: "age",
    phone: "phone",
    card: "card",
  });// defineprops expers to array 
 const maxValue =  inject('LuckyMaxNumber');
  let emit = defineEmits("update-favorite");
  const maxvalue = props.maxValue;
  function toggleFunction() {
    emit("update-favorite",[props.card, props.id]); // is allows keep the paramether
  }
</script>
   