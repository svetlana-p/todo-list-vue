<template>
  <div class="form-registration">
    <form @submit="register">
      <h1 class="h3 mb-3 fw-normal">Регистрация</h1>
      <p class="mt-5 mb-3 text-muted">Введите данные для регистрации</p>
      <div class="row">
        <label for="name" class="visually-hidden">Имя</label>
        <input type="email" id="name" v-model="name" class="form-control" placeholder="Имя" autofocus>
        <div class="error">{{errors.name}}</div>
      </div>
      <div class="row">
        <label for="inputEmail" class="visually-hidden">E-mail</label>
        <input type="email" id="inputEmail" v-model="email" class="form-control" placeholder="E-mail" autofocus>
        <div class="error">{{errors.email}}</div>
      </div>
      <div class="row">
        <label for="inputPassword" class="visually-hidden">Пароль</label>
        <input type="password" id="inputPassword" v-model="password" class="form-control" placeholder="Пароль">
        <div class="error">{{errors.password}}</div>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
import User from "@/components/user/user";

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      errors: {}
    }
  },
  methods: {
    register(e) {
      if (this.validate()) {
        const result = {
          name: 'Геннадий',
          email: 'gen@ya.ru',
          accessToken: 'fhdgfhjsdgg36454245#67!jfhg'
        }
        User.register(result)
        this.$router.push('/list-item')
      }
      e.preventDefault()
    },
    validate() {
      this.errors = {}

      if (this.name.trim().length === 0) {
        this.errors.name = 'Введите имя.'
      }

      if (this.email.trim().length === 0) {
        this.errors.email = 'Введите e-mail.'
      }

      if (this.password.trim().length === 0) {
        this.errors.password = 'Введите пароль.'
      }

      return Object.keys(this.errors).length === 0
    }
  },
}
</script>