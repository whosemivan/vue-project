<template>
  <section class="main">
    <h1 class="main__title">
      Миллионы дизайнеров и художников готовы вам помочь
    </h1>
    <router-link class="main__link" to="/auth">Начать</router-link>
  </section>
</template>

<script>
export default {
  name: "home-page",
};
</script>


<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 500px;
}

.main__title {
  font-size: 40px;
  line-height: 48px;
  text-align: center;

  background: linear-gradient(90deg, #232526 0%, #414345 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  width: 770px;
  margin: 0;
  margin-bottom: 40px;
}

.main__link {
  font-size: 20px;
  line-height: 24px;
  color: #fbf3f3;
  text-decoration: none;
  background: linear-gradient(90deg, #232526 0%, #414345 100%);
  border-radius: 41px;
  padding: 20px 105px;
  font-weight: 700;
}
</style>
