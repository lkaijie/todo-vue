<template>
	<div>
		<span>Type, the textarea will grow:</span>
		<textarea
			ref="textarea"
			v-model="input"
			class="resize-none"
			placeholder="What's on your mind?"
		/>
	</div>
</template>

<script setup lang="ts">
import { useTextareaAutosize } from "@vueuse/core";
import { watch } from "vue";

const { textarea, input } = useTextareaAutosize();

// console log every time the input changes
watch(input, (value) => console.log(value));
</script>

<style scoped></style>

<!-- 
<template>
	<div class="edit-todo">
		<h1>Edit Todo</h1>
		<form @submit.prevent="submitForm">
			<label for="title">Title</label>
			<input id="title" v-model="todo.title" type="text" required />

			<label for="description">Description</label>
			<textarea
				id="description"
				v-model="todo.description"
				type="text"
				required
				ref="textareaRef"
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
import { ref, onMounted } from "vue";
import { useTextareaAutosize } from "@vueuse/core";
// const { textarea, input } = useTextareaAutosize()

let emit = defineEmits(["closeEdit"]);

const props = defineProps({
	todo: {
		type: Todo,
		required: true,
	},
});

const textareaRef = ref(null);

onMounted(() => {
	useTextareaAutosize(textareaRef);
});

const submitForm = () => {
	// Handle form submission

	emit("closeEdit", false);
};
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
</style> -->
<!-- <template>
	<div class="edit-todo">
		<h1>Edit Todo</h1>
		<form @submit.prevent="submitForm">
			<label for="description">Description</label>
			<input id="description" v-model="todo.description" type="text" required />


			<button type="submit">Save</button>
		</form>
	</div>
</template>

<script setup lang="ts">
import { Todo } from "@/class/Todo";
import { ref } from "vue";

const props = defineProps({
	todo: {
		type: Todo,
		required: true,
	},
});

const submitForm = () => {
};
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

.edit-todo form input {
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
</style> -->

<!-- <template>
	<div class="edit-todo">
		<h1>TodoEdit</h1>
		<span>editing {{ todo.description }}</span>
	</div>
</template>

<script setup lang="ts">
import { Todo } from "@/class/Todo";

const props = defineProps({
	todo: {
		type: Todo, // the reason this is not Todo is because when we load from local storage it returns an Objec
		// it would require sterializaer to convert it back to a Todo object, but that is a little too much work..
		required: true,
	},
});
</script>

<style scoped>
.edit-todo {
	background-color: aliceblue;
	/* add border and make it look nice */
	border: 1px solid black;
	position: fixed; /* or absolute */
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	/* Add your own styles below */
	background-color: #f8f9fa;
	padding: 20px;
	border-radius: 8px;
	text-align: center;
}
</style> -->

<!-- <template>
	<div class="edit-todo">
		<h1>Edit Todo</h1>
		<form @submit.prevent="submitForm">
			<label for="title">Title</label>
			<input id="title" :value="todoForm.todo.title" type="text" required />

			<label for="description">Description</label>
			<textarea
				id="description"
				v-model="todo.description"
				type="text"
				required
				ref="textareaRef"
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
import { ref, onMounted, reactive } from "vue";
import { useTextareaAutosize } from "@vueuse/core";
// const { textarea, input } = useTextareaAutosize()

let emit = defineEmits(["closeEdit"]);

const props = defineProps({
	todo: {
		type: Todo,
		required: true,
	},
});

const todoForm = reactive({
	todo: Object.assign({}, props.todo),
});

const submitForm = () => {
	// Handle form submission
	console.log(todoForm.todo.title);
	todoForm.todo.title = document.getElementById("title")!.value;
	props.todo.title = todoForm.todo.title;
	console.log(todoForm.todo.title);
	console.log(props.todo.title);

	emit("closeEdit", false);
};
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
</style> -->
