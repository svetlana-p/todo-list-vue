<template>
  <div class="todo-lists-item card">
    <div class="card-body">
      <div class="card-title">{{item.title}}</div>
      <ul class="card-text" v-for="todoItem in item.todoItems" :key="todoItem.id">
        <li v-if="todoItem.id < 5">{{todoItem.text}}</li>
        <li v-if="todoItem.id === 5">...</li>
      </ul>
      <router-link :to="`list/${item.id}`" class="card-link">Изменить</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListsItem',
  props: {
      item: Object
  }
}
</script>