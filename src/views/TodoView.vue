<script setup lang="ts">
import TodoCreator from "@/components/TodoCreator.vue";
import TodoItemVue from "@/components/TodoItem.vue";
import { ref, reactive } from "vue";

let passMsg = ref("TESGING");
var todoList = reactive({
  // todos: [],
  todos: [{}],
  last_updated: new Date(),
});

// read from local storage
var todosFromLocal = localStorage.getItem("todos");
var todos = JSON.parse(todosFromLocal || "[]");
todoList.todos = todos;

function receivedFunction1(todos: { title: string }[]) {
  console.log("I have received todos from TodoCreator");
  console.log(todos);
  // todoList.todos = todos;
  todoList.last_updated = new Date();
  // todoList.last_updated = Date.now();
  console.log(todoList);
}

function receivedFunction2(func: Function) {
  // looks like you can also pass functions from child to parents which is cool
  func();
}

// function receivedFunction(todos: { title: string }[]) {
function receivedFunction(todos: { title: string }) {
  console.log("I have received todos from TodoCreator");
  console.log(todos);
  // todoList.todos = todos;
  todoList.last_updated = new Date();
  todoList.todos.unshift(todos);
  // todoList.last_updated = Date.now();
  console.log(todoList);

  // write to local storage
  localStorage.setItem("todos", JSON.stringify(todoList.todos));
}
function randclog(func: Function) {
  console.log("using passed function");
  func();
  console.log("end of passed function");
}

function clearTodos() {
  todoList.todos = [];
  todoList.last_updated = new Date();
  localStorage.setItem("todos", JSON.stringify(todoList.todos));
}
</script>

<template>
  <main>
    <h1>Create a new todo</h1>
    <button @click="clearTodos">Clear Todos</button>
    <span>LAST UPDATED: {{ todoList.last_updated }}</span>
    <!-- <span></span> -->
    <!-- <TodoCreator passed="passMsg" /> -->
    <TodoCreator
      :passed="passMsg"
      :list="todoList"
      @add-todo="receivedFunction"
      @rand-log-event="randclog"
    />
    <TodoItemVue v-for="todo in todoList.todos" :todo="todo" />
  </main>
</template>
