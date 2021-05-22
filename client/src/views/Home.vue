<template>
  <div class="home container">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <img class="img" src="data:image/png;base64,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">
    <br />
    
    <!-- Button trigger modal -->
  <br>
  
    <!-- Modal -->
  <div class="modal fade" id="editTodoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit ToDo: {{currentEditTodo}}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addTodo()" class="text-center justify-content-center row g-3">
              <div class="col-auto">
                <input v-if="currentEditTodo !== -1" v-model="editedTodo" type="text" :placeholder="todoMap.get(currentEditTodo).todo" class="form-control" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button @click="saveEditTodo()" type="button" class="btn btn-success" data-bs-dismiss="modal">Save</button>
          </div>
        </div>
      </div>
    </div>

    <br>

    <form @submit.prevent="addTodo()" class="text-center justify-content-center row g-3">
      <div class="col-auto">
        <input v-model="newTodo" type="text" placeholder="New Todo here!" class="form-control" />
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-success">Add Todo</button>
      </div>
    </form>
    <br>
    <button @click="clearTodos()" class="btn btn-outline-primary">Delete all Todos</button>
    <br>
    <br>
    <h4>Aktuell: {{ todoCount }} Todo/s</h4>

    <table class="table">
      <thead class="table-light">
        <tr>
          <th>TODO</th>
          <th>Erledigt</th>
          <th>Editieren</th>
          <th>Löschen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todoID in todoMapToList" :key="todoID">
          <td>{{ todoMap.get(todoID).todo }} | {{todoID}}</td>
          <td>
            <button class="btn btn-outline-success" v-if="!todoMap.get(todoID).checked" @click="checkTodo(todoID)">Erledigt</button>
            <button class="btn btn-outline-warning" v-if="todoMap.get(todoID).checked" @click="checkTodo(todoID)">Rückgängig</button>
          </td>
          <td>
            <button @click="selectEditTodo(todoID)" type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#editTodoModal">
              Edit
            </button>
          </td>
          <td><button class="btn btn-outline-danger" @click="deleteTodo(todoID)">Löschen</button></td>
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
      currentEditTodo: -1,
      editedTodo: "",
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
    saveEditTodo() {
      this.todoMap.get(this.currentEditTodo).todo = this.editedTodo;
      fetch(API_URL + 'edittodo/' + this.currentEditTodo, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.todoMap.get(this.currentEditTodo)),
      });
    },
    selectEditTodo(ID) {
      this.currentEditTodo = ID;
      this.editedTodo = "";
    },
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
    checkTodo(todoID) {
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

<style scoped>
  .img {
    width: 10%;
    repeat: 
  }
</style>

