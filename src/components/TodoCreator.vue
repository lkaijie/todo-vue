<template>
	<div class="input-wrap">
		<input
			type="text"
			placeholder="Enter the title of Todo"
			v-model="todo.title"
			@keyup.enter="addTodo"
		/>
		<input
			type="text"
			placeholder="Enter the description or addition notes"
			v-model="todo.content"
			@keyup.enter="addTodo"
		/>
	</div>
	<button @click="addTodo" class="create-todo-btn">Create</button>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { Todo } from "@/class/Todo";

const props = defineProps({
	passed: String,
	list: Object,
});

let emit = defineEmits(["addTodo", "randLogEvent", "addDescription"]);

const todo = reactive({
	title: "",
	content: "",
	done: null,
	date: null,
});

function addDescription() {
	console.log("addDescription");
	//   error checking here later on, helper function perhaps
	emit("addDescription", todo);
}

const todos: { title: string }[] = [];
// const
function addTodo() {
	var title = todo.title;
	if (title == "") {
		return;
	}
	var description = todo.content;
	// var newtodo = reactive({
	//   title: title,
	//   description: description,
	//   completed: false,
	// });
	var newtodo = new Todo(title, description, false);
	todos.push(newtodo);
	todo.title = "";
	todo.content = "";
	emit("addTodo", newtodo);
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

<style scoped lang="scss">
.input-wrap {
	display: flex;
	transition: 250ms ease;
	border: 2px solid #41b080;
	//   max-width: 1000px;
	width: 400px;
	flex-direction: column;
	margin: 1rem;

	&.input-err {
		border-color: red;
	}

	&:focus-within {
		box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1),
			0 -2px 4px -2px rgb(0 0 0 / 0.1);
	}

	input {
		width: 100%;
		padding: 8px 6px;
		border: none;
		background-color: inherit;
		// margin: 10px;
		margin-bottom: 5px;
		&:focus {
			outline: none;
		}
	}
}
.create-todo-btn {
	background-color: #4caf50;
	border: none;
	color: azure;
	padding: 0.5rem 1rem;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 1rem;
	margin: 0.5rem;
	cursor: pointer;
	border-radius: 0.5rem;

	transition-duration: 0.4s;
}

.create-todo-btn:hover {
	background-color: #3e8e41;
	//   border-radius: 0.7rem;
	scale: 1.1;
	//   background-color: linear-gradient(to bottom, #4caf50 5%, #4caf50 100%);

	box-shadow: 0 5px 16px 0 rgba(0, 0, 0, 0.24);
}

// .input-wrap {
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   margin: 1rem;
// }
</style>
