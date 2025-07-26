<template>
    <div class="text-center" >
        <h1 class="text-primary" >Games Info Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident repudiandae error quisquam facilis ea aliquam deleniti, voluptate animi eveniet consequatur! Possimus your MaxHelth {{ gamesStore.getwiningStore }}</p>
        <input class=""  type="text"  v-model=" gamesStore.maxHelth" >
    </div>
</template>
<script setup >
    import {useGameStore} from '../store/gamesStore';
    const gamesStore = useGameStore();
</script>

