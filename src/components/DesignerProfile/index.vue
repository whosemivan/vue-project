<template>
  <h1>Designer</h1>
  <div>
    <h2>{{ user.name }}</h2>
    <div class="profile__projects">
      <div class="profile__project" v-for="item of user.portfolio" :key="item._id">
        <h2 class="profile__project-title">{{ item.title }}</h2>
        <div
          class="portfolio__project-image"
          :style="{ backgroundImage: `url(${item.main_image})` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      user: [],
    };
  },
  name: "designer-profile",

  created() {
    fetch(`https://dream-design-server.herokuapp.com/api/users/${this.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "ok") {
          this.user = data.data;
        }
      });
  },
};
</script>

<style scoped>
.portfolio__project-image {
  height: 190px;
  background-size: cover;
}
</style>