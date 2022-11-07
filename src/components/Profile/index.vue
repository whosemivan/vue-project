<template>
  <div>
    <div class="profile">
      <div class="profile__contacts">
        <profile-picture />
        <h2 class="profile__title">{{ name }}</h2>
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
        <div class="profile__project">

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
    };
  }
};
</script>

<style scoped>
.profile {
  display: grid;
  grid-template-columns: 30% 1fr;
  width: 1200px;
  margin: auto;
}
.profile__contacts {
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #292b2c;
}

.profile__about {
  padding: 30px;
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
</style>