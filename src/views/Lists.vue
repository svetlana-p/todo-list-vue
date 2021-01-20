<template>
<div class="lists">
  <div class="title">
    <h1>Ваши списки дел</h1>
    <router-link class="create-new-list btn btn-primary" to="/list/new" role="button">+ новый список</router-link>
  </div>
  <div class="todo-lists">
    <ListsItem v-for="item in items" :key="item.id" :item="item"/>
  </div>
</div>
</template>

<script>
import ListsItem from "@/components/lists/Item";

export default {
  name: 'Lists',
  components: {ListsItem},
  data() {
      return {
        items: [
            {id: 1, title: "Список 1", todoItems: [
              {id: 1, text: "11111"},
              {id: 2, text: "22222"},
              {id: 3, text: "33333"}
            ]},
          {id: 2, title: "Список 2", todoItems: [
              {id: 1, text: "11111"},
              {id: 2, text: "22222"},
              {id: 3, text: "33333"},
              {id: 4, text: "44444"},
              {id: 5, text: "55555"}
            ]},
          {id: 3, title: "Список 3", todoItems: [
              {id: 1, text: "11111"},
              {id: 2, text: "22222"},
              {id: 3, text: "33333"},
              {id: 4, text: "44444"}
            ]},
          {id: 4, title: "Список 4", todoItems: [
              {id: 1, text: "11111"},
              {id: 2, text: "22222"},
              {id: 3, text: "33333"},
              {id: 4, text: "test"},
              {id: 5, text: "5555"},
              {id: 6, text: "test2"},
              {id: 7, text: "test5"}
            ]},
          {id: 5, title: "Список 5", todoItems: [
              {id: 1, text: "11111"},
              {id: 2, text: "22222"},
              {id: 3, text: "33333"}
            ]}
        ]
    }
  }
}
</script>