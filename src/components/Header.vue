<template>
  <header class="header">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light sticky-top" aria-label="Navbar">
        <div class="container">
          <router-link class="navbar-brand order-1" to="/">ToDoList</router-link>

          <div class="collapse navbar-collapse order-5 order-lg-2" id="navbar">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link v-bind:to="{name: 'About Us'}" class="nav-link">О нас</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" v-bind:to="{name: 'Info'}">Возможности</router-link>
              </li>
            </ul>
          </div>

          <ul class="navbar-nav flex-row flex-nowrap justify-content-end order-3">
            <li class="nav-item" v-if="user.isAuth()">
              <router-link class="nav-link px-2 px-sm-3" v-bind:to="{name: 'Login'}">Вход</router-link>
            </li>
            <li class="nav-item" v-else>
              <router-link class="nav-link px-2 px-sm-3" v-bind:to="{name: 'Lists'}">Мои списки</router-link>
            </li>

            <li class="nav-item" v-if="user.isAuth()">
              <router-link class="nav-link px-2 px-sm-3" v-bind:to="{name: 'Register'}">Регистрация</router-link>
            </li>
          </ul>

          <button class="navbar-toggler order-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import User from '@/components/user/user';

export default {
  name: 'Header',
  data() {
    return {
      user: User
    }
  }
}
</script>