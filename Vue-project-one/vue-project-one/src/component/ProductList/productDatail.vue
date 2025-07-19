<template>
    productDetails.vue
    <h1>your product ID: {{  }}</h1>
</template>

<script setup >
    import { useRouter } from 'vue-router';
    const route = useRouter();
    console.log(route.params);
</script>