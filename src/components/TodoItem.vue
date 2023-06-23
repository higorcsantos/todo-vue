<template>
    <li :class="{ completed: todo.completed }">
      <input type="checkbox" @change="toggleCompletion" />
      {{ todo.text }}
      <span class="delete-button" @click="deleteTodo">X</span>
    </li>
  </template>

<script lang="ts">
import { Todo } from '@/store';
import { defineComponent } from 'vue';

    export default defineComponent({
        props: {
            todo: {
                type: Object as () => Todo,
                required: true
            },
        },
        methods: {
            toggleCompletion() {
                this.$store.commit('toggleTodoCompletion', this.todo.id)
            },
            deleteTodo() {
                this.$store.commit('deleteTodo', this.todo.id);
            },
        },
    });
</script>

<style scoped>
    .completed{
        text-decoration: line-through;
    }

    .delete-button{
        margin-left: 1rem;
        color: tomato;
        cursor: pointer;
    }
</style>