<template>
  <div class="page" id="app">
    <Header />

    <main class="main">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
