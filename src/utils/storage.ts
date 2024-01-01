// this util allows for storing and loading of TODOs from local storage(and at some point supabse/firebase i guess)
// import { Todo } from '../types/todo';
// import { Todo } from "@/class/Todo";
// import { Todo } from "/src/class/Todo";
// const test = new Todo();
import { Todo } from "@/class/Todo";

// const test = new Todo()
// disable builtin typescript for imports to work properly checkout (https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode)
export const storage = {
	// stores and array of todos in local storage
	save: (todos: Todo[]) => {
		// save: (todos: []) => {
		localStorage.setItem("todos", JSON.stringify(todos));
	},
	load: () => {
		const todos = localStorage.getItem("todos");
		if (todos) {
			return JSON.parse(todos);
		}
		return [];
	},
	clear: () => {
		localStorage.removeItem("todos");
	},
};
