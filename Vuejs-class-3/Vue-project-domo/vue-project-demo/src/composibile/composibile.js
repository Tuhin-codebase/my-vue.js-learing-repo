import {ref} from "vue";
export function  useFunction (initalValue = 0 ,step = 3 ) {
    let count = ref(initalValue);
    const increment = () => {
        count.value+= step;
    }

    const drecement = () => {
        count.value-=step;
    }

    return {count, increment, drecement};
}