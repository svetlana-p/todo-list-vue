<template>
  <div class="logout">
    <p>Вы успешно вышли из системы. Через несколько секунд Вы быдете перенаправлены на Главную страницу.</p>
  </div>
</template>

<script>
import User from '@/components/user/user';

export default {
  name: 'Login',
  created() {
    this.logout()
  },
  methods: {
    logout() {
      User.logout()
      setTimeout(() => {
        this.$router.push('/')
      }, 5000)
    }
  }
}
</script>