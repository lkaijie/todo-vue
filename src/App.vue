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
	<!-- <TodoFooter /> -->
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap");

* {
	font-family: "Rubik", sans-serif;
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
