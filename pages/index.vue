<template lang="pug">
.flex.flex-wrap.justify-center.items-center.h-screen 
    .w-96.h-96.text-3xl
        .w-full.bg-red-300.text-center hello index 
        .w-full.bg-gray-300.flex.gap-5
            nuxt-link(to="./about" class="hover:opacity-80") about
            nuxt-link(to="./" class="hover:opacity-80") index
        showData

</template>

<script setup>
import { useStoreData } from "~~/stores/data";
const store = useStoreData();
const data = reactive({
    count:null
})
onMounted(()=>{
    data.count=store.data.count
})
</script>

<style>

</style>