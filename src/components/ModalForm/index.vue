<template>
  <div class="modal">
    <div class="modal__close-btn" @click="$emit('modalClose')">+</div>
    <form @submit.prevent="addProject">
      <input
        type="text"
        v-model="title"
        placeholder="Название проекта"
        required class="modal__input"
      />
      <input class="modal__input" type="text" v-model="image" placeholder="Фото проекта" />
      <input class="modal__input" type="text" v-model="link" placeholder="Ссылка на продукт" />
      <input class="modal__input"
        type="month"
        v-model="date"
        placeholder="Когда велась работа над проектом?"
      />
      <textarea class="modal__input" v-model="text" placeholder="Описание"></textarea>
      <button class="modal__btn" type="submit">Добавить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "modal-form",
  data() {
    return {
      title: "",
      image: "",
      text: "",
      link: "",
      date: null,
      tags: [],
    };
  },
  methods: {
    addProject() {
      let user = localStorage.getItem("user");
      if (user) {
        user = JSON.parse(user);
      }
      const body = {
        title: this.title,
        link: this.link,
        main_image: this.image,
        description: this.text,
        tags: this.tags,
        date: this.date && new Date(this.date),
      };
      if (user) {
        fetch(
          `https://dream-design-server.herokuapp.com/api/users/project/add/${user._id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(body),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "ok") {
              this.clearForm();
              user = data.data;
              localStorage.setItem("user", JSON.stringify(user));
              this.$emit("modalClose");
              this.$emit("updateData", user);
            }
          });
      }
    },
    clearForm() {
      this.title = "";
      this.link = "";
      this.image = "";
      this.text = "";
      this.tags = [];
      this.date = null;
    },
  },
};
</script>

<style scoped>
.modal form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.modal {
    background-color: #FBF3F3;
    padding: 50px;
    border-radius: 30px;
    position: relative;
}

.modal__close-btn {
    position: absolute;
    top: 6px;
    right: 10px;
    line-height: 1;
    transform: rotate(45deg);
    cursor: pointer;
    font-size: 30px;
}

.modal__input {
  border: 1px solid #232526;
  font-size: 18px;
  font-family: "SF Compact";
  padding: 15px 10px;
  width: 400px;
  margin-bottom: 20px;
}

.modal__btn {
  border: 1px solid #232526;
  padding: 15px 10px;
  background: #ffffff;
  cursor: pointer;
  font-size: 18px;
  font-family: "SF Compact";
}
</style>