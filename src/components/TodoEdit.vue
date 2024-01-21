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
import { ref, onMounted, watch, onUnmounted } from "vue";
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
// watch(
// 	input,
// 	(newVal) => {
// 		props.todo.description = newVal;
// 		console.log(newVal);
// 	},
// 	{ deep: true }
// );

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
