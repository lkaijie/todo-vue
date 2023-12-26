<template>
  <div class="input-wrap">
    <input type="text" v-model="todo.title" @keyup.enter="addTodo" />
    <button @click="addTodo">Create</button>

    <div class="d">{{ todo.title }}</div>
    <span>{{ passed }}</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";

const props = defineProps({
  passed: String,
  list: Object,
});

let emit = defineEmits(["addTodo"]);

console.log(props.passed);
// onMounted(() => {
//   console.log(props.passed);
// });

const todo = reactive({
  title: "test",
  content: null,
  done: null,
  date: null,
});
const todos: { title: string }[] = [];
function addTodo() {
  var title = todo.title;

  var newtodo = reactive({ title: title });
  todos.push(newtodo);
  todo.title = "";
  //   console.log(todos);
  //   props.list.todos = todos;
  //   emit("addTodo");
  emit("addTodo", newtodo);
  //   emit("addTodo", randclog);
}

function randclog() {
  console.log("randclog");
  console.log("randclog");
  console.log("randclog");
  console.log("randclog");
  console.log("randclog");
  console.log("randclog");
  console.log("randclog");
}

console.log(todo.title);
</script>

<style scoped lang="scss"></style>
