<template>
    <div class="wrapper">
        <main-header/>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "../Header/index.vue";

export default {
    name: "main-container",
    components: { "main-header": Header }
}
</script>

<style>
    .wrapper {
        background-color: mediumspringgreen;
        padding: 50px calc(50% - 600px);
        min-height: calc(100vh - 100px);
        box-sizing: border-box;
    }
</style>