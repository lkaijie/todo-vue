<script setup lang="ts">
import { Todo } from "@/class/Todo";
import TodoCreator from "@/components/TodoCreator.vue";
import TodoItemVue from "@/components/TodoItem.vue";
import { fireStorage } from "@/utils/fireStorage";
import { storage } from "@/utils/storage";
import { todoConverter } from "@/utils/todoConverter";
import { getAuth } from "firebase/auth";
import { ref, reactive, computed, watch, onBeforeMount } from "vue";

// at some point change todos to use the class todo instead of just
let passMsg = ref("TESGING");
var todoList = reactive({
	todos: [] as Todo[], // as Todo[] is a type assertion, indicate that todos is an array of Todo objects
	todosPastDue: [] as Todo[],
	todosCompletedPast: [] as Todo[],
	last_updated: new Date(),
});
const user = getAuth().currentUser;
// const util = new fireStorage(user?.email);

var todos: Todo[];
// initial todo setup
async function initTodo() {
	console.log("getting todos131312321321321312321321323123");
	// getting todos
	try {
		console.log("GETTING TODOSOOSOSOSOOS");
		const temp = await util.getTodos();
		console.log(temp);
		todos = todoConverter.fromFirestore2(temp);
		console.log(todos);
	} catch (error) {
		console.log("error getting todos", error);
	}

	console.log("DONE LOGGING TODOSOOSOSOS");

	// if (todos) {
	// 	todos.forEach((todo) => {
	// 		if (todo.dueDate != null) {
	// 			if (new Date(todo.dueDate) < new Date()) {
	// 				if (todo.completed) todoList.todosCompletedPast.push(todo);
	// 				else todoList.todosPastDue.push(todo);
	// 			} else {
	// 				todoList.todos.push(todo);
	// 			}
	// 		}
	// 	});
	// }
}
// initTodo();
// read from local storage
// var todos =
var todos = storage.load();
console.log("initial Todo logging");
todos.forEach((todo) => {
	if (todo.dueDate != null) {
		if (new Date(todo.dueDate) < new Date()) {
			if (todo.completed) todoList.todosCompletedPast.push(todo);
			else todoList.todosPastDue.push(todo);
		} else {
			todoList.todos.push(todo);
		}
	}
});

// todoList.todos = todos;

watch(
	todoList.todos,
	(newTodos) => {
		storage.save(newTodos);
		storage.savePastTodos(todoList.todosCompletedPast, todoList.todosPastDue);
	},
	{ deep: true }
);

// watch(
// 	todoList.todos,
// 	(newTodos) => {
// 		storage.save(newTodos);
// 		storage.savePastTodos(todoList.todosCompletedPast, todoList.todosPastDue);
// 	},
// 	{ deep: true }
// );

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

function receivedFunction(todo: Todo) {
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
	<main class="todo-main">
		<button @click="clearTodos">Clear Todos</button>
		<div name="list" class="pending-container">
			<TodoCreator
				:passed="passMsg"
				:list="todoList"
				@add-todo="receivedFunction"
				@rand-log-event="randclog"
			/>
			<!-- <TodoItemVue :todo="pendingTodos[1]" :key="pendingTodos[1].id" /> -->
			<div class="todos-pending">
				<TodoItemVue v-for="todo in pendingTodos" :todo="todo" :key="todo.id" />
				<div class="seperator">COMPLETED TODOS</div>
				<div class="done-container">
					<TodoItemVue v-for="todo in completedTodos" :todo="todo" />
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped lang="scss">
.recent-updates {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	// background-color: aliceblue;
	padding: 1rem;
}

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
	// padding: 5rem;
	// overflow-y: auto;
	// max-height: 60%;
	// margin: 20px;
	margin: 10px 20px 10px 20px;
	height: 95%;
	width: 80%;
	// overflow: hidden;
	// max-height: 5vh;
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
	// background-color: aliceblue;
	padding: 1rem;
	height: 10%;
}

.last-updated {
	font-size: 1.2rem;
	color: #333;
	font-weight: 900;
}
.todo-main {
	height: 100%;
	background-image: url("../../public/backgrounds/Ninny.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
}
.todos-pending {
	overflow-y: scroll;
	max-height: 100%;
}
</style>
