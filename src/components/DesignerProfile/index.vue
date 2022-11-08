<template>
  <div>
    <div class="profile">
      <div class="profile__contacts">
        <profile-picture />
        <h2 class="profile__title">{{ user.name }}</h2>
        <div class="profile__item">
        </div>
        <div class="profile__stats">
        </div>
      </div>
      <div class="profile__about">
        <h2>Графический дизайнер</h2>
        <div class="profile__projects">
          <div
            class="profile__project"
            v-for="item of user.portfolio"
            :key="item._id"
          >
            <h2 class="profile__project-title">{{ item.title }}</h2>
            <div
              class="portfolio__project-image"
              :style="{ backgroundImage: `url(${item.main_image})` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Picture from "../Profile/Picture.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      user: [],
    };
  },
  name: "designer-profile",
  components: {
    "profile-picture": Picture
  },
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
.profile {
  display: flex;
  justify-content: space-between;
  width: 1180px;
  margin: auto;
}
.profile__contacts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #292b2c;
  width: 180px;
}

.profile__projects {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 880px;
}

.profile__project {
  width: 280px;
}

.profile__item {
  display: flex;
  flex-direction: column;
}

.profile__stats {
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-top: 20px;
}

.profile__title {
  font-family: "SF Compact";
  font-style: normal;
  font-weight: 790;
  font-size: 18px;
  line-height: 21px;
  color: #292b2c;
  margin: 0;
  margin-top: 20px;
  margin-bottom: 20px;
}

.portfolio__project-image {
  height: 190px;
  background-size: cover;
}
</style>