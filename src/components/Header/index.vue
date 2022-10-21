<template>
  <header class="header">
    <router-link to="/"> Home </router-link>
    <router-link to="/profile"> Profile </router-link>
    <button class="header__btn" @click="setIsPopup">Auth</button>
    <div v-if="isPopup" class="header__popup">
      <button class="header__popup-btn" @click="setIsPopup">
        <svg
          width="15"
          height="15"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 3.02143L26.9786 0L15 11.9786L3.02143 0L0 3.02143L11.9786 15L0 26.9786L3.02143 30L15 18.0214L26.9786 30L30 26.9786L18.0214 15L30 3.02143Z"
            fill="black"
          />
        </svg>
      </button>
      <h2 class="header__popup-title">Auth</h2>
      <form class="header__auth-form">
        <input class="header__input" placeholder="Your email" />
        <input class="header__input" placeholder="Password" />
        <button class="header__auth-btn" type="submit">Sign In</button>
      </form>
      <a>Sign Up</a>
      <a>Home</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "usr-header",
  data() {
    return {
      isPopup: false,
    };
  },
  methods: {
    setIsPopup() {
      this.isPopup = !this.isPopup;
    },
  },
};
</script>

<style scoped>
.header {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  padding: 20px 0;
}

.header__btn {
  background: linear-gradient(90deg, #159957 0%, #155799 100%);
  border-radius: 10px;
  border: none;
  color: #f4e8e8;
  font-size: 18px;
  padding: 15px 40px;
  margin-left: auto;
  cursor: pointer;
}

.header__popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f4e8e8;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}

.header__popup-btn {
  border: none;
  background: transparent;
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
}

.header__popup-title {
  text-align: center;
}

.header__auth-form {
  display: flex;
  width: 600px;
  flex-direction: column;
}

.header__input {
  border: none;
  padding: 10px 20px;
  margin-bottom: 10px;
}

.header__auth-btn {
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 10px;
}
</style>