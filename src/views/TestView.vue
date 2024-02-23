<template>
	<div class="about"></div>
	<button @click="testFunc">Click me for testing purposes</button>
	<button @click="testFunc2">Click me for testing purpose123123s</button>
</template>

<script setup lang="ts">
import { Todo } from "@/class/Todo";
import { fireStorage } from "@/utils/fireStorage";
import { fireUtil } from "@/utils/firestoreUtil";
import { getAuth } from "firebase/auth";

const fire = new fireUtil();
const user = getAuth().currentUser;
// const fire2 = new fireStorage(user?.email);

var testTodo: Todo = new Todo("new todo", "asiodjasijd", false);

function testFunc2() {
	fire2.setTodo(testTodo);

	fire2.getTodos();
}

function testFunc() {
	const userExists = fire.checkUserExists(user?.email);
	// console.log(userExists.then(result)+);
	userExists
		.then((result) => {
			console.log("success" + result);
			// const testutil = new fireStorage(user?.email);
		})
		.catch((result) => {
			console.log("failuer" + result);
		});
}
</script>

<style>
/* @media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
} */
</style>
