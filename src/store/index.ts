import { createStore } from 'vuex';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default createStore({
  state: {
    todos: [] as Todo[],
  },
  mutations: {
    addTodo(state, text: string) {
      const newTodo: Todo = {
        id: Date.now(),
        text,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodoCompletion(state, id: number) {
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo(state, id: number) {
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
  },
});
