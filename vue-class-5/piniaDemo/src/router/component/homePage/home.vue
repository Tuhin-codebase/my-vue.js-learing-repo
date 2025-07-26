<template>
    <div class="text-center mb-4" >
        <p>Let`s Play The Games </p>
        <h2 clas="text-primary pb-3" >Current Score : {{ gameStore.score }} </h2>
        <span class="text-primary pb-3 " >Max Score : {{ gameStore.maxHelth }} </span>
    </div>
    <span  class="text-center text-success d-block" v-if="gameStore.score >= 100" >you win !  </span>
    <span  class="text-center text-success d-block" v-if="gameStore.score < 0" >you lost !  </span>
    <hr>
    <div class="row text-center " v-if="gameStore.score <= 100 &&  gameStore.score >= 0" >
        <div class="col-5  " >
            <button class="btn from-control btn-success p-4" @click="increment();">Increment</button>
        </div>
        <div class="col-5  mb-5 " >
            <button class="btn from-control btn-danger p-4" @click="Decrement()">Decrement</button>
        </div>
        <div class="col-6   " >
            <button class="btn from-control btn-warning p-4" @click="random();" >Random</button>
        </div>
    </div>
    <div class="text-center" >
        <button class=" text-center btn col-2 btn-danger" @click="gameStore.ResetGames()" v-if="gameStore.score >= 100 || gameStore.score < 0   " >Reset Games</button>
    </div>
</template>
<script setup >
    import {useGameStore} from '../store/gamesStore';
    const gameStore = useGameStore();
    function increment() {
        gameStore.setNextAttack();
    }
    function Decrement() {
        gameStore.setNextDefense();
    }
    function random() {
        Math.random() > 0.5 ? increment() : Decrement();
    }
</script>