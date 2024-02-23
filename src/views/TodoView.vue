<script setup lang="ts">
import { Todo } from "@/class/Todo";
import TodoCreator from "@/components/TodoCreator.vue";
import TodoItemVue from "@/components/TodoItem.vue";
import { fireStorage } from "@/utils/fireStorage";
import { storage } from "@/utils/storage";
import { todoConverter } from "@/utils/todoConverter";
import { getAuth } from "firebase/auth";
import {
	CollectionReference,
	collection,
	getDocs,
	getFirestore,
	orderBy,
	query,
	where,
	type DocumentData,
} from "firebase/firestore";
import { ref, reactive, computed, watch, onBeforeMount, onMounted } from "vue";
import { useCollection, type _RefFirestore } from "vuefire";

// at some point change todos to use the class todo instead of just
let passMsg = ref("TESGING");
var todoList = reactive({
	todos: [] as Todo[], // as Todo[] is a type assertion, indicate that todos is an array of Todo objects
	todosPastDue: [] as Todo[],
	todosCompletedPast: [] as Todo[],
	last_updated: new Date(),
});
const user = getAuth().currentUser;
const util = new fireStorage(user?.email);
util.init();
// onBeforeMount(async () => {
// 	await initTodo();
// });

// let currentTodos;
let completedTodos: _RefFirestore<DocumentData[]>;
let currentTodos: _RefFirestore<DocumentData[]>;
const db = getFirestore();
let todoRef: CollectionReference<DocumentData, DocumentData>;
function todoInit() {
	// first we get path?
	if (user) {
		console.log(user.email);
		if (user.email != "") {
			var userRef = collection(db, "Users");
			var q = query(userRef, where("email", "==", user.email));
			getDocs(q).then((querySnapshot) => {
				todoRef = collection(db, querySnapshot.docs[0].ref.path, "todos");
				console.log("logig from todoinit");
				console.log(todoRef);
				q = query(
					todoRef,
					where("completed", "==", false)
					// where("dueDate", "<=", new Date().toISOString().split("T")[0]),
					// orderBy("dueDate", "asc"),
					// orderBy("date", "asc")
				);
				currentTodos = useCollection(q);
				q = query(
					todoRef,
					where("completed", "==", true)
					// where("dueDate", "<=", new Date().toISOString().split("T")[0]),
					// orderBy("dueDate", "asc"),
					// orderBy("date", "asc")
				);
				completedTodos = useCollection(q);
			});
		}
	}
}
todoInit();
console.log("FINISH TODO INIT, NOW LOGGING TODOS1");
// console.log(todos1);
function clearTodos() {
	// console.log(todos1.value);
	console.log("logginv current doos");
	console.log(currentTodos.value);
	console.log("logginv done doos");
	console.log(completedTodos.value);
}

function receivedFunction(todo: any) {
	//  once received a new todo, add it to list of Todos, update the last_updated date, and save to local storage
	// add to firestore
	util.addTodo(todo);
	console.log("adding todo to firestore");
	console.log(todo);
}
// const todos = useCollection(collection(db, "todos"));
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
				<TodoItemVue v-for="todo in currentTodos" :todo="todo" :key="todo.id" />
				<!-- <TodoItemVue v-for="todo in pendingTodos" :todo="todo" :key="todo.id" /> -->
				<div class="seperator">COMPLETED TODOS</div>
				<div class="done-container">
					<!-- <TodoItemVue v-for="todo in completedTodos" :todo="todo" /> -->
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
