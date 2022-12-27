<template>
  <section class="designers">
    <h1 class="designers__title">Дизайнеры</h1>
    <div class="designers__container">
      <div class="card" v-for="u of users" :key="u.email">
        <div class="designers__item">
          <h3 class="designers__title">{{u.name || "No name"}}</h3>
          <p class="designers__email">{{u.email}}</p>
          <p>Количество проектов: {{u.portfolio.length}}</p>
          <router-link class="designers__link" :to="{ name: 'userProfile', params: { id: u._id } }">Смотреть профиль</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


export default {
    data() {
        return {
            users: []
        }
    },
   name: "test-data",
   created() {
    fetch("https://srv.petiteweb.dev/api/profile/users")
        .then(res => res.json())
        .then(data => {
            if (data.message === "ok") {
                this.users = data.data;
            }
        })
   }
};
</script>

<style scoped>

</style>