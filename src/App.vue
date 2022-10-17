<template>
  <div>
    <usr-header />
    <usr-profile />
  </div>
</template>

<script>
import Profile from "./components/Profile/index.vue";
import Header from "./components/Header/index.vue";

export default {
  name: "App",
  components: { "usr-profile": Profile, "usr-header": Header },
};
</script>

<style>
</style>