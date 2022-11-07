<template>
  <div class="profile__image-wrapper">
    <div
      class="profile__image"
      :style="{ width: size + 'px', height: size + 'px' }"
    ></div>
    <div
      class="profile__image profile__image--avatar"
      :style="{ width: size - 10 + 'px', height: size - 10 + 'px' }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "profile-picture",
  data() {
    return {
      size: 200,
    };
  },
};
</script>

<style scoped>
.profile__image {
  border-radius: 50%;
  background: linear-gradient(90deg, #232526 0%, #414345 100%);
  margin: auto;
}

.profile__image-wrapper {
    position: relative;
}
.profile__image--avatar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #e4e8eb;
}
</style>