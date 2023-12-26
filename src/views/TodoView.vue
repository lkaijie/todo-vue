<script setup lang="ts">
import TodoCreator from "@/components/TodoCreator.vue";
import { ref, reactive } from "vue";

let passMsg = ref("TESGING");
var todoList = reactive({
  // todos: [],
  todos: [{ title: "test" }],
  last_updated: new Date(),
});

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
  todoList.todos.push(todos);
  // todoList.last_updated = Date.now();
  console.log(todoList);
}
function randclog(func: Function) {
  console.log("using passed function");
  func();
  console.log("end of passed function");
}
</script>

<template>
  <main>
    <h1>Create a new todo</h1>
    <span></span>
    <!-- <TodoCreator passed="passMsg" /> -->
    <TodoCreator
      :passed="passMsg"
      :list="todoList"
      @add-todo="receivedFunction"
      @rand-log-event="randclog"
    />
  </main>
</template>
