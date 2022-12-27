<template>
  <div>
    <div class="profile">
      <div class="profile__contacts">
        <profile-picture />
        <h2 class="profile__title">{{ userData.name }}</h2>
        <div class="profile__item">
          <profile-contacts
            v-for="(c, i) in contacts"
            :key="i"
            :type="c.type"
            :data="c.value"
          ></profile-contacts>
        </div>
        <div class="profile__stats">
          <profile-stats
            v-for="(c, i) in stats"
            :key="i"
            :type="c.type"
            :data="c.value"
          ></profile-stats>
        </div>
      </div>
      <div class="profile__about">
        <h2>Графический дизайнер</h2>
        <div class="profile__projects">
          <div
            class="profile__project"
            v-for="item of projects"
            :key="item._id"
          >
            <h2 class="profile__project-title">{{ item.title }}</h2>
            <div
              class="portfolio__project-image"
              :style="{ backgroundImage: `url(${item.main_image})` }"
            ></div>
            <button class="portfolio__remove-btn" @click="removeProject(item._id)">Remove</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Picture from "./Picture.vue";
import Contacts from "./Contacts.vue";
import Stats from "./Stats.vue";

export default {
  name: "usr-profile",
  props: ["userData"],
  components: {
    "profile-picture": Picture,
    "profile-contacts": Contacts,
    "profile-stats": Stats,
  },
  data() {
    return {
      name: localStorage.getItem("name"),
      contacts: [
        { type: "phone", value: "+7(123)456-78-90" },
        { type: "email", value: "antoshka@ivanov.sin" },
        { type: "tg", value: "@antoshka" },
        { type: "vk", value: "https://vk.com/34234324" },
      ],
      stats: [
        { type: "like", value: "5" },
        { type: "friends", value: "10" },
        { type: "stat", value: "15" },
      ],
      age: 20,
      projects: this.userData.portfolio || [],
    };
  },
  methods: {
    removeProject(id) {
      console.log(id, this.userData._id);
      fetch(
        `https://srv.petiteweb.dev/api/profile/users/project/remove/${this.userData._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ _id: id }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("result", data);
          if (data.message === "ok") {
            localStorage.setItem("user", JSON.stringify(data.data));
            this.projects = this.projects.filter((p) => p._id !== id);
          }
        });
    },
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

.portfolio__remove-btn {
  margin-top: 5px;
  font-family: "SF Compact";
  font-size: 16px;
  background: transparent;
  border: 1px solid #292b2c;
  cursor: pointer;
}
</style>