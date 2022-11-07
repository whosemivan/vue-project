<template>
  <div class="profile__contacts-links">
    <a v-if="type === 'phone'" :href="'tel:' + data">{{ data }}</a>
    <a v-else-if="type === 'email'" :href="'mailto:' + data">{{ data }}</a>
    <a
      v-else-if="type === 'tg'"
      :href="'https://t.me/' + data.split('@')[1]"
      target="_blank"
      >{{ data }}</a
    >
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
.profile__contacts-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  color: #292b2c;
  text-decoration: none;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
}
</style>