<script setup lang="ts">
import { RouterView } from "vue-router";
import TodoHeader from "./components/TodoHeader.vue";
import TodoFooter from "./components/TodoFooter.vue";
// import TodoHeader from "./components/TodoHeader.vue";
</script>

<template>
  <TodoHeader />
  <!-- <TodoHeader /> -->
  <RouterView />
  <TodoFooter />
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body,
html {
  margin: 0;
  padding: 0;
}
</style>
