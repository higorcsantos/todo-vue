<template>
  <div>
    <input type="text" v-model="newTodoText" @keydown.enter="addTodo" placeholder="Add a new todo" />
    <ul>
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Todo } from '@/store';
import TodoItem from './TodoItem.vue';

export default defineComponent({
  components: {
    TodoItem,
  },
  data() {
    return {
      newTodoText: '',
    };
  },
  computed: {
    todos(): Todo[] {
      return this.$store.state.todos;
    },
  },
  methods: {
    addTodo() {
      if (this.newTodoText.trim() !== '') {
        this.$store.commit('addTodo', this.newTodoText);
        this.newTodoText = '';
      }
    },
  },
});
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

input[type="text"] {
  margin-bottom: 1rem;
}
</style>