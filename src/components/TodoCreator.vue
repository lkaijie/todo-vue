<template>
	<div class="todo-item" @click="focusInput">
		<input
			type="text"
			ref="todoInput"
			placeholder="Enter the title of Todo"
			v-model="todo.title"
			@keyup.enter="addTodo"
		/>
	</div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
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

	// var convertedTodo = JSON.stringify(newtodo);
	var convertedTodo = Object.assign({}, newtodo);
	todos.push(newtodo);
	todo.title = "";
	todo.content = "";
	// emit("addTodo", newtodo);
	emit("addTodo", convertedTodo);
}
// focus input of todocreator
const todoInput = ref<HTMLInputElement | null>(null);

function focusInput() {
	if (todoInput.value) {
		todoInput.value.focus();
	}
}
</script>

<style scoped lang="scss">
input {
	outline: none;
	border: none;
	// color: inherit;
	background-color: transparent;
	margin: 15px;
	width: 100%;
	color: #ddd;
}

div {
	/* background-color: aliceblue; */
	background-color: #121212;
}

.todo-item {
	/* background-color: #fff; */
	border: 1px solid #ddd;
	border-radius: 10px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	/* padding: 20px; */
	margin-bottom: 20px;
	margin-right: 50px;
	margin-left: 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	opacity: 0.9;
	/* margin: 40px; */
}
.todo-item:hover {
	opacity: 0.8;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	/* background-color: #f0f0f0; */
	cursor: pointer;
}

h1 {
	color: white;
	opacity: 0.9;
}

p {
	color: white;
	opacity: 0.9;
	/* color: blue; */
	font-size: 1.5rem;
}
</style>
