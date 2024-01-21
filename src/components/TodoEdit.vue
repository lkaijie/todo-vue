<template>
	<div class="edit-todo">
		<h1>Edit Todo</h1>
		<form @submit.prevent="submitForm">
			<label for="title">Title</label>
			<input id="title" v-model="todo.title" type="text" required />

			<label for="description">Description</label>
			<textarea
				id="description"
				v-model="input"
				type="text"
				required
				ref="textarea"
				@keydown.tab.prevent="addTab"
			></textarea>

			<label for="dueDate">Due Date</label>
			<input id="dueDate" v-model="todo.dueDate" type="date" />

			<label for="priority">Priority</label>
			<select id="priority" v-model="todo.priority">
				<option value="low">Low</option>
				<option value="medium">Medium</option>
				<option value="high">High</option>
			</select>

			<button type="submit">Save</button>
		</form>
	</div>
</template>

<script setup lang="ts">
import { Todo } from "@/class/Todo";
import { ref, onMounted, watch, onUnmounted, nextTick } from "vue";
import { useTextareaAutosize } from "@vueuse/core";
// reference to props.todo

let emit = defineEmits(["closeEdit"]);

const props = defineProps({
	todo: {
		type: Todo,
		required: true,
	},
});

const { textarea, input } = useTextareaAutosize({
	input: props.todo.description,
});

function addTab(e: KeyboardEvent) {
	console.log(e);
	const target = e.target as HTMLTextAreaElement;

	const spaces = "    "; // 4 spaces
	const start = target.selectionStart;
	console.log(start);
	console.log(target);
	const end = target.selectionEnd;
	const value = target.value;
	// target.setSelectionRange(start, end);
	input.value = value.substring(0, start) + spaces + value.substring(end);
	// target.selectionEnd = target.selectionStart = 1;
	// target.selectionEnd = target.selectionStart = start + spaces.length;
	// props.todo.description =
	// 	value.substring(0, start) + spaces + value.substring(end);
	// target.value = value.substring(0, start) + spaces + value.substring(end);
	// target.selectionStart = target.selectionEnd = start - spaces.length;
	e.preventDefault();
	nextTick(() => {
		target.selectionEnd = target.selectionStart = start + spaces.length;
	});
}

const submitForm = () => {
	// Handle form submission

	emit("closeEdit", false);
};

onUnmounted(() => {
	console.log("unmounted");
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
</style>
