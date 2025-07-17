<template>  
    <div class="mane border-2 border-green-300 rounded-lg w-150 p-4 text-center ">
        <span>Select Range: <br> <input class="border-2 rounded-lg p-2 " v-model="numberrandomInput" type="text"  ></span><br>
        <button class="border-2 rounded-sm p-2 mt-2" v-on:click="genarateRandomNumberFunction" > 
            <span v-if="numberrandom === 0" >Click and genarate number range  {{ numberrandomInput }}</span>
            <span v-else >show random Number range {{ numberrandomInput }}</span>
        </button>
        <h2 class="text-3xl " >Your random Number is {{ numberrandom }}</h2>
    </div>
</template>

<script setup >
    import {ref, reactive} from "vue";
    const numberrandomInput = ref(10);
    let numberrandom = ref(0);
    function genarateRandomNumberFunction () {
        numberrandom.value = Math.floor(Math.random() * numberrandomInput.value  + 1);
        // console.log(numberrandom.value);
    }
    
</script>