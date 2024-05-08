<template lang="pug">
.flex.flex-wrap.justify-center.items-center.h-screen 
    .w-96.h-96.text-3xl
        .w-full.bg-red-300.text-3xl.text-center hello about 
        .w-full.bg-gray-300.flex.gap-5
            nuxt-link(to="./about" class="hover:opacity-80") about
            nuxt-link(to="./" class="hover:opacity-80") index


</template>

<script setup>

</script>

<style></style>
