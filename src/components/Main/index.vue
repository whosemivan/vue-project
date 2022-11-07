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
     width: 1180px;
     margin: 0 auto;
     height: 100vh;
 }
</style>