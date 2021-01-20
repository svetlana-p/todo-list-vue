<template>
  <div class="home">
    <Banner />

    <section class="advantages row gx-sm-3">
      <div class="col-sm my-3 my-sm-0" v-for="advantage in advantages" :key="advantage.id">
        <Advantage v-bind:item="advantage" />
      </div>
    </section>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Advantage from "@/components/Advantage";

export default {
  name: 'Home',
  components: {Advantage, Banner},
  data() {
    return {
      advantages: [
        {id: 1, title: 'Преимущество 1', description: 'Описание преимущества', imageUrl: require('@/assets/todo-list.png')},
        {id: 2, title: 'Преимущество 2', description: 'Описание преимущества', imageUrl: require('@/assets/todo-list.png')},
        {id: 3, title: 'Преимущество 3', description: 'Описание преимущества', imageUrl: require('@/assets/todo-list.png')}
      ]
    }
  }
}
</script>