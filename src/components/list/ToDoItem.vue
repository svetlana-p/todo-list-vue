<template>
  <li v-if="action !== 'new'" class="todo-list-item list-group-item" :class="{'todo-list-item--done': isDone}">
    <span class="todo-list-item-checkbox" @click="toggleDoneState"><i class="bi-check2" v-show="isDone"></i></span>
    <span class="todo-list-item-text" >
      <span v-show="!isEdit" @click="toggleInput">{{todo}}</span>
      <input type="text" :name="`todoItem${item.id}`" :value="todo" @keyup="edit" v-show="isEdit" @change="toggleInput"/>
    </span>
  </li>
  <li v-else class="todo-list-item list-group-item">
    <span class="todo-list-item-checkbox"></span>
    <span class="todo-list-item-text">+ добавить</span>
  </li>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: {
      item: Object,
    action: String
  },
  data() {
    return {
      isDone: this.item ? this.item.isDone : false,
      isEdit: false,
      todo: this.item ? this.item.text : ''
    }
  },
  methods: {
    toggleDoneState() {
      this.isDone = !this.isDone
    },
    edit(e) {
      this.todo = e.target.value
    },
    toggleInput() {
      this.isEdit = !this.isEdit;
    }
  }
}
</script>