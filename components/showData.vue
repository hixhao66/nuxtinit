<template lang='pug'>
.w-full store data.count = {{ store.data.count }}
</template>

<script setup>
import { useStoreData } from "~~/stores/data";
const store = useStoreData();
</script>

<style lang='scss'>

</style>