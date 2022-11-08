<template>
  <div class="wrapper">
    <main-header :user="user" @showPopup="modalOpen" @logout="logout" />
    <main-container :user="user" @setUser="setUser" :userData="userData"></main-container>
    <div
      :style="{ display: modalActivity ? 'flex' : 'none' }"
      class="modal-wrapper"
    >
      <ModalForm @modalClose="modalClose" @updateData="updateUserData" />
    </div>
  </div>
</template>

<script>
import MainContainer from "@/components/Main/index.vue";
import Header from "@/components/Header/index.vue";
import ModalForm from "@/components/ModalForm";

export default {
  name: "App",
  components: {
    MainContainer,
    "main-header": Header,
    ModalForm,
  },
  data() {
    return {
      modalActivity: false,
      userData: {},
      user: localStorage.getItem("user")
    };
  },
  methods: {
    modalOpen() {
      this.modalActivity = true;
    },
    modalClose() {
      this.modalActivity = false;
    },
    updateUserData(data) {
      this.userData = data;
      console.log("global user", this.userData);
    },
    logout() {
      localStorage.removeItem("user");
      this.user = "";
      this.$router.replace("/");
    },
    setUser() {
      this.user = localStorage.getItem("user");
    }
  },
  created() {
    let user = localStorage.getItem("user");
    if (user) {
      this.userData = JSON.parse(user);
    }
  },
};
</script>

<style>
.wrapper {
  width: 1180px;
  margin: 0 auto;
  height: 100vh;
}

.modal-wrapper {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: #0004;
}
</style>