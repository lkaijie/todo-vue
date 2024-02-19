<script setup lang="ts">
import { RouterView } from "vue-router";
import TodoHeader from "./components/TodoHeader.vue";
import TodoFooter from "./components/TodoFooter.vue";
import { getAuth } from "firebase/auth";
// import TodoHeader from "./components/TodoHeader.vue";

console.log(getAuth().currentUser);
</script>

<template>
	<div class="header">
		<TodoHeader />
	</div>
	<!-- <TodoHeader /> -->
	<div class="container">
		<RouterView />
	</div>
	<!-- <TodoFooter /> -->
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap");

.header {
	/* background-color: #f3f3f3; */
	height: 7vh;
}
.container {
	height: 93vh;
}

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

/* Scroll bar stylings */
::-webkit-scrollbar {
	width: 10px;
	height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
	background: var(--lightestgrey);
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: #888;
	border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: #555;
}
</style>
