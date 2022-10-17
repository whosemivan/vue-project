<template>
    <div class="profile__image" :style="{width: size + 'px', height: size + 'px'}"></div>
</template>

<script>

export default {
  name: 'profile-picture',
  data() {
      return {
          size: 200
      }
  }
}

</script>

<style scoped>
    .profile__image {
        border-radius: 50%;
        background-color: blanchedalmond;
        margin: auto;
    }
</style>