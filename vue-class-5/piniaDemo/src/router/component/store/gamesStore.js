import { defineStore } from "pinia";
export const useGameStore = defineStore('gameStore',{
    state: () =>({
        score: 0, 
        maxHelth: 100, 
        maxAttack: 30, 
        maxDefense: 10,
    }),
    getters: {
        getScore (){
            return this.score;
        },
       getwiningStore() {
         return this.maxHelth;
        }
       
    },
    actions: {
         setNextAttack() {
            let Attack = Math.floor(Math.random() * this.maxAttack) + 1;
            // console.log("getNextAttack", Attack);
             this.score += Attack;
        },
        setNextDefense() {
            let defense = Math.floor(Math.random() * this.maxDefense) + 1;
            // console.log("getNextDefense", defense);
             this.score -= defense;
        },
        ResetGames() {
              this.score = 30;
        },
       
     
    }
} 
)