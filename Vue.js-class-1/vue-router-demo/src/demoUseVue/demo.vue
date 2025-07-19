<template>
    <h1>Hello i am demo-vue</h1>
    <button @click="goToContact" >goToContact</button>
</template>

<script setup >
import {useRouter} from "vue-router";
let router = useRouter();
function goToContact () {
    router.push("/contact-some");
}

</script>