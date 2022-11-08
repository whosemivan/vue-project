<template>
  <header class="header">
    <button @click="showPopup" v-if="user" class="header__btn-add">Добавить проект</button>
    <nav>
      <router-link class="header__link" to="/">Главная</router-link>
      <router-link class="header__link" v-if="user" to="/designers"
        >Найти дизайнера</router-link
      >
      <router-link class="header__link" v-if="user" to="/profile"
        >Профиль</router-link
      >
      <router-link class="header__link" v-if="!user" to="/auth"
        >Войти или зарегистрироваться</router-link
      >
    </nav>
    <button class="header__btn-logout" v-if="user" @click="logout">Выйти</button>
  </header>
</template>

<script>
export default {
  name: "usr-header",
  props: ["user"],
  methods: {
    showPopup() {
      this.$emit("showPopup");
    },
    logout() {
      this.$emit("logout");
    }
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 50px 0;
  margin-bottom: 50px;
}

.header__link,
.header__btn-logout {
  font-size: 18px;
  line-height: 24px;
  color: #292b2c;
  text-decoration: none;
  margin-left: 45px;
  cursor: pointer;
}

.header__btn-logout {
  border: none;
  background: transparent;
  padding: 0;
}

.header__btn-add {
  font-family: "SF Compact";
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  color: #fbf3f3;
  background: linear-gradient(90deg, #232526 0%, #414345 100%);
  border-radius: 41px;
  border: none;
  cursor: pointer;
  padding: 25px;
  margin-right: auto;
}
</style>