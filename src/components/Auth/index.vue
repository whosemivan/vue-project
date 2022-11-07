<template>
  <div class="block">
    <div class="auth-block" v-if="type === 'login'">
      <h3 class="auth-block__title">Войти</h3>
      <form class="auth-block__form" @submit="authUser">
        <input
          type="email"
          placeholder="Email"
          name="email"
          v-model="authEmail"
          class="auth-block__input"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          v-model="authPwd"
          class="auth-block__input"
        />
        <button type="submit" class="auth-block__btn">Войти</button>
      </form>
      <router-link class="auth-block__link" to="/signup">Зарегистрироваться</router-link>
    </div>

    <div class="auth-block" v-else-if="type === 'signup'">
      <h3 class="auth-block__title">Зарегистрироваться</h3>
      <form class="auth-block__form" @submit="regUser">
        <input
          class="auth-block__input"
          type="text"
          placeholder="Your name"
          name="name"
          v-model="regName"
        />
        <input
          class="auth-block__input"
          type="email"
          placeholder="Your email"
          required
          name="email"
          v-model="regEmail"
        />
        <input
          class="auth-block__input"
          type="password"
          placeholder="Your password"
          required
          name="password"
          v-model="regPwd"
        />
        <input
          class="auth-block__input"
          type="password"
          placeholder="Repeat password"
          required
          v-model="repeatPwd"
          :class="repeatPwd !== '' && !checkPwd ? 'wrong' : 'success'"
          @input="check"
        />
        <button class="auth-block__btn" type="submit">Зарегистрироваться</button>
      </form>
      <router-link class="auth-block__link" to="/auth">Войти</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "auth-block",
  props: ["type"],
  data() {
    return {
      regName: "",
      regPwd: "",
      repeatPwd: "",
      regEmail: "",
      checkPwd: false,
      authEmail: "",
      authPwd: "",
    };
  },
  methods: {
    regUser: async function (evt) {
      evt.preventDefault();
      console.log(this.checkPwd);
      let body = {
        name: this.regName,
        email: this.regEmail,
        password: this.regPwd,
      };
      if (this.checkPwd) {
        const data = await fetch(
          "https://dream-design-server.herokuapp.com/api/users/add",
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Accept: "application.json",
            },
            body: JSON.stringify(body),
          }
        ).then((res) => res.json());
        if (data.message === "ok") {
          evt.target.reset();
          localStorage.setItem("user", JSON.stringify(data.data));
          localStorage.setItem("name", JSON.stringify(data.data.name));
          this.$router.replace("/");
        } else {
          alert(data.message);
        }
        console.log(data);
      } else {
        alert("пароли не совпадают");
      }
    },
    authUser: async function (evt) {
      evt.preventDefault();

      let body = {
        email: this.authEmail,
        password: this.authPwd,
      };

      const data = await fetch(
        "https://dream-design-server.herokuapp.com/api/users/auth",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Accept: "application.json",
          },
          body: JSON.stringify(body),
        }
      ).then((res) => res.json());

      if (data.message === "ok") {
        evt.target.reset();
        localStorage.setItem("user", JSON.stringify(data.data));
        localStorage.setItem("name", JSON.stringify(data.data.name));
        this.$router.replace("/");
      } else {
        alert(data.message);
      }
      console.log(data);
    },
    check: function () {
      this.checkPwd = this.regPwd === this.repeatPwd;
    },
  },
};
</script>

<style scoped>
.wrong {
  border-color: red;
}
.success {
  border-color: green;
}

.auth-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.auth-block__title {
  font-size: 40px;
  margin: 0;
  margin: 40px;
}

.auth-block__form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.auth-block__input {
  border: 1px solid #232526;
  font-size: 18px;
  font-family: "SF Compact";
  padding: 15px 10px;
  width: 400px;
  margin-bottom: 20px;
}

.auth-block__btn {
  border: 1px solid #232526;
  padding: 15px 10px;
  background: #ffffff;
  cursor: pointer;
  font-size: 18px;
  font-family: "SF Compact";
}

.auth-block__link {
  color: #232526;
  text-decoration: none;
  font-size: 18px;
}
</style>
