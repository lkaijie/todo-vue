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
import { connectStorageEmulator } from "firebase/storage";
import {
	ref,
	reactive,
	computed,
	watch,
	onBeforeMount,
	onMounted,
	provide,
} from "vue";
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

provide("fire-storage", util);
// onBeforeMount(async () => {
// 	await initTodo();
// });

// let currentTodos;
let completedTodos: _RefFirestore<DocumentData[]>;
let currentTodos: _RefFirestore<DocumentData[]>;
const db = getFirestore();
let todoRef: CollectionReference<DocumentData, DocumentData>;
let q;

const userTodoRef = computed(() => {
	const qry = query(collection(db, "Users"), where("email", "==", user.email));
	// return getDocs(qry);
	// return qry
	const path = getDocs(qry).then((querySnapshot) => {
		return querySnapshot.docs[0].ref.path;
	});
	return path;
});

function todoInit() {
	// first we get path?
	if (user) {
		console.log(user.email);
		if (user.email != "") {
			var userRef = collection(db, "Users");
			q = query(userRef, where("email", "==", user.email));

			// q = query(
			// 	collection(db, userTodoRef.value.then((path) => path), "todos"),
			// 	where("completed", "==", false)
			// 	// where("dueDate", "<=", new Date().toISOString().split("T")[0]),
			// 	// orderBy("dueDate", "asc"),
			// 	// orderBy("date", "asc")
			// );
			// q = query(
			// 	userTodoRef.value.then((path) => collection(db, path, "todos")),
			// 	where("completed", "==", false)
			// );

			// getting path is the problem
			// getDocs(q).then((querySnapshot) => {
			// 	todoRef = collection(db, querySnapshot.docs[0].ref.path, "todos");
			// 	console.log("logig from todoinit");
			// 	console.log(todoRef);
			// q = query(
			// 	todoRef,
			// 	where("completed", "==", false)
			// 	// where("dueDate", "<=", new Date().toISOString().split("T")[0]),
			// 	// orderBy("dueDate", "asc"),
			// 	// orderBy("date", "asc")
			// );
			// currentTodos = useCollection(q);
			// 	q = query(
			// 		todoRef,
			// 		where("completed", "==", true)
			// 		// where("dueDate", "<=", new Date().toISOString().split("T")[0]),
			// 		// orderBy("dueDate", "asc"),
			// 		// orderBy("date", "asc")
			// 	);
			// 	completedTodos = useCollection(q);
			// });
		}
	}
}
todoInit();
console.log("FINISH TODO INIT, NOW LOGGING TODOS1");
console.log(q);
console.log("FINISH TODO INIT, NOW LOGGING TODOS1");
console.log("FINISH TODO INIT, NOW LOGGING TODOS1");
const other = await userTodoRef.value;

todoRef = collection(db, other, "todos");
q = query(
	todoRef,
	where("completed", "==", false),
	where("dueDate", ">=", new Date().toISOString().split("T")[0]),
	orderBy("dueDate", "asc"),
	orderBy("favourite", "desc"),
	orderBy("date", "asc")
);
currentTodos = useCollection(q);
q = query(
	todoRef,
	where("completed", "==", true),
	where("dueDate", ">=", new Date().toISOString().split("T")[0]),
	orderBy("dueDate", "asc"),
	orderBy("date", "asc")
);
completedTodos = useCollection(q);
console.log(other);
console.log(userTodoRef.value.then((path) => console.log(path)));
console.log("FINISH TODO INIT, NOW LOGGING TODOS1");
// const testTodos = ref(completedTodos.value);
function clearTodos() {
	q = query(
		todoRef,
		where("completed", "==", false),
		where("dueDate", ">=", new Date().toISOString().split("T")[0]),
		orderBy("dueDate", "asc"),
		orderBy("favourite", "desc"),
		orderBy("date", "asc")
	);
	util.deleteTodos(q);
	q = query(
		todoRef,
		where("completed", "==", true),
		where("dueDate", ">=", new Date().toISOString().split("T")[0]),
		orderBy("dueDate", "asc"),
		orderBy("date", "asc")
	);
	util.deleteTodos(q);
}

function receivedFunction(todo: any) {
	//  once received a new todo, add it to list of Todos, update the last_updated date, and save to local storage
	// add to firestore
	util.addTodo2(todo);
	console.log("adding todo to firestore");
	console.log(todo);
}
// clearTodos();
function toggleDone(id: string, completed: boolean) {
	util.toggleCompleted(id, completed);
}

function toggleFav(id: string, favourite: boolean) {
	util.toggleFavourite(id, favourite);
}
</script>

<template>
	<main class="todo-main">
		<button @click="clearTodos">Clear Todos</button>
		<div name="list" class="pending-container">
			<TodoCreator
				:passed="passMsg"
				:list="todoList"
				@add-todo="receivedFunction"
			/>
			<!-- @rand-log-event="randclog" -->
			<!-- <TodoItemVue :todo="pendingTodos[1]" :key="pendingTodos[1].id" /> -->
			<!-- <ul>
				<li v-for="todo in currentTodos" :key="todo.id">
					<span>{{ todo.title }}</span>
				</li>
			</ul> -->
			<!-- <TodoItemVue v-for="todo in pendingTodos" :todo="todo" :key="todo.id" /> -->
			<!-- <TodoItemVue v-for="todo in completedTodos" :todo="todo" /> -->
			<div class="todos-pending">
				<TodoItemVue
					v-for="todo in currentTodos"
					:todo="todo"
					:key="todo.id"
					@toggle-done="toggleDone"
					@toggle-favourite="toggleFav"
				/>
				<div class="seperator">COMPLETED TODOS</div>
				<div class="done-container">
					<TodoItemVue
						v-for="todo in completedTodos"
						:todo="todo"
						@toggle-done="toggleDone"
						@toggle-favourite="toggleFav"
					/>
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
