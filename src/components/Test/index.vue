<template>
  <div>
    <h1>test is here</h1>
    <div class="container">
      <div class="card" v-for="u of users" :key="u.email">
        {{ u.name || "NoName" }}
        <hr />
        {{ u.email }}
      </div>
    </div>
  </div>
</template>

<script>
// TODO: Используя localStorage, переписать шапку так, чтобы при наличии пользователя не было кнопок входа, а при отсутствии пользователя не было ссылки на личный кабинет.
// TODO: На странице пользователя (можно в шапке), добавить кнопку "выйти" - очистить localStorage.
// TODO: Отображать в личном кабинете данные авторизованного пользователя

export default {
    data() {
        return {
            users: []
        }
    },
   name: "test-data",
   created() {
    fetch("https://dream-design-server.herokuapp.com/api/users")
        .then(res => res.json())
        .then(data => {
            if (data.message === "ok") {
                this.users = data.data;
            }
        })
   }
};
</script>
