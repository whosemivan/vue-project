<template>
  <div>
    <a v-if="type === 'phone'" :href="'tel:' + data">{{ data }}</a>
    <a v-else-if="type === 'email'" :href="'mailto:' + data">{{ data }}</a>
    <a v-else-if="type === 'tg'" :href="'https://t.me/' + data.split('@')[1]" target="_blank">{{ data }}</a>
    <a v-else :href="data" target="_blank">{{ data }}</a>
  </div>
</template>

<script>
export default {
  name: "profile-contacts",
  props: ["type", "data"],
};
</script>

<style scoped>
a {
    color: #ffffff;
}
a:hover {
    color: blanchedalmond
}
</style>