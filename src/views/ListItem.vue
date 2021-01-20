<template>
  <div class="list-item">
    <div class="title">
      <h1>Создать или изменить список</h1>
    </div>
    <div class="todo-list card bg-light">
      <div class="todo-list-title card-header">Название</div>
      <ul class="list-group list-group-flush">
        <ToDoItem v-for="item in items" :key="item.id" :item="item"/>
        <ToDoItem v-for="item in newItems" :key="item.id" :item="item"/>
        <ToDoItem action="new" @click.native="addRow"/>
      </ul>
    </div>
  </div>
</template>

<script>
import ToDoItem from "@/components/list/ToDoItem";
export default {
  name: 'ListItem',
  components: {ToDoItem},
  data() {
    return {
      items: [
        {id: 1, text: "Test", isDone: true},
        {id: 2, text: "Test 2", isDone: false},
        {id: 3, text: "Test 3", isDone: true},
        {id: 4, text: "Test 4", isDone: false},
        {id: 5, text: "Test 5", isDone: false},
        {id: 6, text: "Test 6", isDone: false}
      ],
      newItems: []
    }
  },
  methods: {
    addRow() {
      const id = this.items.length + this.newItems.length + 1
      const item = {id: id, text: "", isDone: false}
      this.newItems.push(item)
    }
  }
}
</script>