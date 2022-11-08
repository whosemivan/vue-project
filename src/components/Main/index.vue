<template>
    <router-view :user="user" @setUser="setUser" :userData="userData"></router-view>
</template>

<script>

export default {
    name: "main-container"
}
</script>

<style>

</style>