<template>
  <div class="profile-stats">
    <div v-if="type === 'like'">
        <i class="fa-solid fa-heart"></i>
        {{data}}
    </div>
    <div v-if="type === 'friends'">
        <i class="fa-solid fa-user"></i>
        {{data}}
    </div>
    <div v-if="type === 'stat'">
        <i class="fa-solid fa-chart-line"></i>
        {{data}}
    </div>
  </div>
</template>

<script>
export default {
  name: "profile-stats",
  props: ["type", "data"]
};
</script>

<style scoped>

</style>