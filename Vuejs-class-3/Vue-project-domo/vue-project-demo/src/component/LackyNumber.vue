<template>
    <div class="border-3 border-green-200 p-4 w-100 text-center" >
        <button  class="border px-3 rounded-lg font-bold border-red-300  " v-on:click="luckNumberGrnarator()" ><span v-if="LuckyNumber === 0" >generate LuckyNumber range {{ props.maxValue }} </span>
            <span v-else >
                LuckyNumber : {{ LuckyNumber }}
            </span>
       
        </button>
    </div>

</template>

<script setup >
import {ref , defineProps} from "vue";
let LuckyNumber = ref(0);
const props = defineProps({
    maxValue: {type : Number, default : 100}
});

function luckNumberGrnarator () {
    LuckyNumber.value = Math.floor(Math.random() * props.maxValue);
    // console.log(LuckyNumber.value);
}
</script>