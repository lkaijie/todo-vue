<script setup lang="ts">
import { Todo } from "@/class/Todo";
import TodoCreator from "@/components/TodoCreator.vue";
import TodoItemVue from "@/components/TodoItem.vue";
import { storage } from "@/utils/storage";
import { ref, reactive, computed, watch } from "vue";

// at some point change todos to use the class todo instead of just
let passMsg = ref("TESGING");
var todoList = reactive({
	todos: [] as Todo[], // as Todo[] is a type assertion, indicate that todos is an array of Todo objects
	todosPastDue: [] as Todo[],
	todosCompletedPast: [] as Todo[],
	last_updated: new Date(),
});

// read from local storage
var todos = storage.load();
todoList.todos = todos;

watch(
	todoList.todos,
	(newTodos) => {
		storage.save(newTodos);
	},
	{ deep: true }
);

function receivedFunction1(todos: { title: string }[]) {
	console.log("I have received todos from TodoCreator");
	console.log(todos);
	// todoList.todos = todos;
	todoList.last_updated = new Date();
	// todoList.last_updated = Date.now();
	console.log(todoList);
}

function receivedFunction2(func: Function) {
	// looks like you can also pass functions from child to parents which is cool
	func();
}

// function receivedFunction(todos: { title: string }) {
// 	console.log("I have received todos from TodoCreator");
// 	console.log(todos);
// 	// todoList.todos = todos;
// 	todoList.last_updated = new Date();
// 	todoList.todos.unshift(todos);
// 	// todoList.last_updated = Date.now();
// 	console.log(todoList);
// 	// write to local storage
// 	storage.save(todoList.todos);
// 	// localStorage.setItem("todos", JSON.stringify(todoList.todos));
// }
function receivedFunction(todo: Todo) {
	// console.log("I have received todos from TodoCreator");
	// console.log("top of functiona t th start");
	// console.log(todo instanceof Todo);
	// console.log(todoList.todos);
	// todoList.todos.forEach((todo) => {
	// 	console.log("logging todoakoshdsdal" + todo);
	// 	console.log(todo instanceof Todo);
	// });
	//  once received a new todo, add it to list of Todos, update the last_updated date, and save to local storage
	todoList.last_updated = new Date();
	todoList.todos.unshift(todo);
	storage.save(todoList.todos);
}
function randclog(func: Function) {
	console.log("using passed function");
	func();
	console.log("end of passed function");
}

function updatedReceivedFunction(todos: Todo[]) {}
function clearTodos() {
	todoList.todos = [];
	todoList.last_updated = new Date();
	storage.save(todoList.todos);
}
console.log("logging todolist.todos" + todoList.todos);
// const sortedTodos
const sortedTodos = computed(() => {
	return [...todoList.todos].sort((a, b) => {
		// Favourites and not done come first
		if (a.favourite && !a.completed && (!b.favourite || b.completed)) return -1;
		if (b.favourite && !b.completed && (!a.favourite || a.completed)) return 1;

		// Then come the notcompleted
		if (!a.completed && b.completed) return -1;
		if (a.completed && !b.completed) return 1;

		// Then come thecompleted
		return 0;
	});
});

const pendingTodos = computed(() => {
	var sorted = todoList.todos.filter((todo) => !todo.completed);
	return [...sorted].sort((a, b) => {
		// Favourites and not done come first
		if (a.favourite && !a.completed && (!b.favourite || b.completed)) return -1;
		if (b.favourite && !b.completed && (!a.favourite || a.completed)) return 1;

		return 0;
	});
});

const completedTodos = computed(() => {
	return todoList.todos.filter((todo) => todo.completed);
});
</script>

<template>
	<main>
		<div class="main-container">
			<!-- <h1>Create a new todo</h1> -->
			<button @click="clearTodos">Clear Todos</button>
			<div class="recent-updates">
				<div>
					<span class="last-updated">Last Updated On: </span
					>{{ todoList.last_updated }}
				</div>
			</div>
			<!-- <span>LAST UPDATED: {{ todoList.last_updated }}</span> -->
			<TodoCreator
				:passed="passMsg"
				:list="todoList"
				@add-todo="receivedFunction"
				@rand-log-event="randclog"
			/>
		</div>
		<!-- <TodoItemVue v-for="todo in todoList.todos" :todo="todo" /> -->
		<!-- <TodoItemVue v-for="todo in sortedTodos" :todo="todo" /> -->
		<div name="list" class="pending-container">
			<TodoItemVue v-for="todo in pendingTodos" :todo="todo" :key="todo.id" />
		</div>
		<div class="seperator">COMPLETED TODOS</div>
		<div class="done-container">
			<TodoItemVue v-for="todo in completedTodos" :todo="todo" />
		</div>
	</main>
</template>

<style scoped lang="scss">
.seperator {
	font-size: 1.5rem;
	font-weight: 900;
	color: #333;
	align-items: center;
	text-align: center;
}

.pending-container {
	// display: flex;
	// flex-direction: column;
	// align-items: center;
	// justify-content: center;
	// background-color: aliceblue;
	padding: 5rem;
}

.done-container {
	// display: flex;
	// flex-direction: column;
	// align-items: center;
	// justify-content: center;
	// background-color: aliceblue;
	padding: 5rem;
	// font-size: 1rem;
}
.main-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: aliceblue;
	padding: 1rem;
}

.last-updated {
	font-size: 1.2rem;
	color: #333;
	font-weight: 900;
}
</style>
