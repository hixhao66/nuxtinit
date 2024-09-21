<template lang='pug'>
div {{data.time}}
</template>

<script setup>
const data = reactive({
    time:0
})

onMounted(() => {
    setInterval(() => {
        data.time++
    }, 1000);

    // const worker = new Worker('/worker.js')

    // worker.onmessage = (event) => {
    //     data.time = event.data
    // }

    // worker.postMessage(1)

})
</script>

<style lang='scss'>

</style>