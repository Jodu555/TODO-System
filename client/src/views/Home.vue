<template>
  <div class="home container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <br />

    <form @submit.prevent="addTodo()">
      <input v-model="newTodo" type="text" style="margin-right: 20px" />
      <button>Add Todo</button>
    </form>

    <button @click="clearTodos()">Delete all Todos</button>

    <h5>Aktuell: {{ todoCount }} Todo/s</h5>

    <table class="u-full-width">
      <thead>
        <tr>
          <th>TODO</th>
          <th>Erledigt</th>
          <th>Löschen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todoID in todoMapToList" :key="todoID">
          <td>{{ todoMap.get(todoID).todo }} | {{todoID}}</td>
          <td>
            <button v-if="!todoMap.get(todoID).checked" @click="editTodo(todoID)">Erledigt</button>
            <button v-if="todoMap.get(todoID).checked" @click="editTodo(todoID)">Rückgängig</button>
          </td>
          <td><button @click="deleteTodo(todoID)">Löschen</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

const API_URL = 'http://localhost:3000/'

export default {
  name: "Home",
  data() {
    return {
      newTodo: "",
      todoMap: new Map(),
    };
  },
  created() {
    this.fetchTodos();
  },
  computed: {
    todoCount: function() {
      let count = 0;
      this.todoMap.forEach((value, key, map) => {
        if(!value.checked)
          count++;
      })
      return count;
    },
    todoMapToList: function () {
      const todos = [];
      this.todoMap.forEach((a, key, map) => {
        todos.push(key);
      })
      return todos;
    }
  },
  methods: {
    fetchTodos() {
      fetch(API_URL + 'todos')
        .then(response => response.json())
        .then(response => {
          this.todoMap = new Map(response.todos);
      });
    },
    clearTodos() {
      this.todoMap.clear();
      fetch(API_URL + 'cleartodos');
    },
    async addTodo() {
      if(this.newTodo == "") {
        return
      }
      const todo = {
        todo: this.newTodo,
        checked: false,
      }
      
      this.newTodo = "";
      const response = await fetch(API_URL + 'createtodo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo),
      });
      const json = await response.json();
      this.todoMap.set(json.ID, json);
    },
    editTodo(todoID) {
      this.todoMap.get(todoID).checked = !this.todoMap.get(todoID).checked;
      fetch(API_URL + 'edittodo/' + todoID, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.todoMap.get(todoID)),
      });
    },
    deleteTodo(todoID) {
      this.todoMap.delete(todoID);
      fetch(API_URL + 'deletetodo/' + todoID);
    },
  },
};
</script>

