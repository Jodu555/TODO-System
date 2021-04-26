<template>
  <div class="home container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <br />

    <form @submit.prevent="addTodo()">
      <input v-model="newTodo" type="text" style="margin-right: 20px" />
      <button>Add Todo</button>
    </form>

    <button @click="clearTodos()">Delete all Todos</button>

    <h5>Aktuell: {{ todos.length }} Todo/s</h5>

    <table class="u-full-width">
      <thead>
        <tr>
          <th>TODO</th>
          <th>Erledigt</th>
          <th>Löschen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.todo">
          <td>{{ todo.todo }}</td>
          <td>
            <button v-if="!todo.checked" @click="editTodo(todo)">Erledigt</button>
            <button v-if="todo.checked" @click="editTodo(todo)">Rückgängig</button>
          </td>

          <td><button @click="deleteTodo(todo.todo)">Löschen</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    clearTodos() {
      this.todos.clear();
    },
    addTodo() {
      if(this.newTodo == "") {
        return
      }
      const todo = {
        todo: this.newTodo,
        checked: false,
      }
      this.todos.push(todo);
      this.newTodo = "";
    },
    editTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].checked = !this.todos[todoIndex].checked;
    },
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
  },
};
</script>

