<template>
	<div class="edit-todo">
		<h1>Edit Todo</h1>
		<form @submit.prevent="submitForm">
			<label for="title">Title</label>
			<!-- <input id="title" v-model="todo.title" type="text" required /> -->
			<input id="title" v-model="tempTodo.title" type="text" required />

			<label for="description">Description</label>
			<textarea
				id="description"
				v-model="input"
				type="text"
				ref="textarea"
				@keydown.tab.prevent="addTab"
			></textarea>
			<!-- required -->

			<label for="dueDate">Due Date</label>
			<input id="dueDate" v-model="tempTodo.dueDate" type="date" />

			<label for="priority">Priority</label>
			<select id="priority" v-model="tempTodo.priority">
				<option value="low">Low</option>
				<option value="medium">Medium</option>
				<option value="high">High</option>
			</select>
			<div class="submit-sections">
				<button type="submit" @click="editTodo" class="edit">Save</button>
				<!-- <button type="submit" @click="deleteTodo" class="delete"> -->
				<font-awesome-icon
					:icon="['fas', 'trash']"
					class="delete"
					@click="deleteTodo"
				/>
				<!-- </button> -->
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
import { Todo } from "@/class/Todo";
import { ref, onMounted, watch, onUnmounted, nextTick, inject } from "vue";
import { useTextareaAutosize } from "@vueuse/core";
import { fireStorage } from "@/utils/fireStorage";
// reference to props.todo

let emit = defineEmits(["closeEdit"]);

// const util2 = new fireStorage();
const util: fireStorage = inject("fire-storage")!;

const props = defineProps({
	todo: {
		type: Object,
		required: true,
	},
});
const tempTodo = Object.assign({}, props.todo);
// const todoTitle = props.todo.title;
// const
const { textarea, input } = useTextareaAutosize({
	// input: props.todo.description,
	input: tempTodo.description,
});

function addTab(e: KeyboardEvent) {
	// console.log(e);
	const target = e.target as HTMLTextAreaElement;

	const spaces = "    "; // 4 spaces
	const start = target.selectionStart;
	// console.log(start);
	// console.log(target);
	const end = target.selectionEnd;
	const value = target.value;
	input.value = value.substring(0, start) + spaces + value.substring(end);
	e.preventDefault();
	nextTick(() => {
		target.selectionEnd = target.selectionStart = start + spaces.length;
	});
}

const submitForm = () => {
	// Handle form submission
	emit("closeEdit", false);
};

function editTodo() {
	util.editTodo(props.todo.id, tempTodo);
}

function deleteTodo() {
	util.deleteTodoById(props.todo.id);
}

onUnmounted(() => {
	// console.log("unmounted");
	props.todo.description = input.value;
});
</script>

<style scoped>
.edit-todo {
	background-color: aliceblue;
	border: 1px solid black;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	z-index: 99999;
}

#description {
	overflow: hidden;
	min-height: 90px;
	padding: 3px;
	border: 1px solid #ccc; /* Add this line */
	border-radius: 5px;
}

.edit-todo h1 {
	margin-bottom: 20px;
}

.edit-todo form {
	display: flex;
	flex-direction: column;
}

.edit-todo form label {
	margin-bottom: 5px;
}

.edit-todo form input,
.edit-todo form select {
	margin-bottom: 20px;
	padding: 10px;
	border-radius: 5px;
	border: 1px solid #ccc;
}

.edit-todo form button {
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	background-color: #007bff;
	color: white;
	cursor: pointer;
}

.delete {
	cursor: pointer;
	padding: 5px;
	font-size: 1.3rem;
}

.edit {
	width: 60%;
}

.submit-sections {
	/* margin: 5px; */
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
