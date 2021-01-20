<template>
  <div class="form-login">
    <form @submit="login">
      <h1 class="h3 mb-3 fw-normal">Вход</h1>
      <p class="mt-5 mb-3 text-muted">Введите данные для входа</p>
      <div class="row">
        <label for="inputEmail" class="visually-hidden">E-mail</label>
        <input type="email" id="inputEmail" v-model="email" class="form-control" placeholder="E-mail"  autofocus>
        <div class="error">{{errors.email}}</div>
      </div>
      <div class="row">
        <label for="inputPassword" class="visually-hidden">Пароль</label>
        <input type="password" id="inputPassword" v-model="password" class="form-control" placeholder="Пароль" >
        <div class="error">{{errors.password}}</div>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Войти</button>
    </form>
  </div>
</template>

<script>
import User from '@/components/user/user';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errors: {}
    }
  },
  methods: {
    login(e) {
      if (this.validate()) {
        const result = {
          name: 'Геннадий',
          email: 'gen@ya.ru',
          accessToken: 'fhdgfhjsdgg36454245#67!jfhg'
        }
        User.login(result)
        this.$router.push('/lists')

      }
      e.preventDefault()
    },
    validate() {
      this.errors = {}

      if (this.email.trim().length === 0) {
        this.errors.email = 'Введите e-mail.'
      }

      if (this.password.trim().length === 0) {
        this.errors.password = 'Введите пароль.'
      }

      return Object.keys(this.errors).length === 0
    }
  }
}
</script>