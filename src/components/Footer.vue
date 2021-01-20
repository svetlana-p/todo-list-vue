<template>
  <footer class="footer">
    <nav class="navbar navbar-light bg-light" aria-label="Navbar-bottom">
      <div class="container flex-sm-row flex-column">

        <router-link class="navbar-brand" to="/">ToDoList</router-link>

        <ul class="navbar-nav flex-sm-row justify-content-center my-4 my-sm-0">
          <li class="nav-item">
            <router-link to="/about-us" class="nav-link px-3">О нас</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/info">Возможности</router-link>
          </li>
        </ul>

        <span class="navbar-text">
          &copy; Copyright 2021
        </span>
      </div>

    </nav>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
