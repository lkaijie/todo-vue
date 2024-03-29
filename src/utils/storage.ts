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
	savePastTodos: (todosCompleted: Todo[], todosNonComplete: Todo[]) => {
		localStorage.setItem("todosCompleted", JSON.stringify(todosCompleted));
		localStorage.setItem("todosNonComplete", JSON.stringify(todosNonComplete));
	},
	// load: () => {
	// 	const todos = localStorage.getItem("todos");
	// 	if (todos) {
	// 		return JSON.parse(todos);
	// 	}
	// 	return [];
	// },
	load: (): Todo[] => {
		const todos = localStorage.getItem("todos");
		if (todos) {
			// return JSON.parse(todos);
			const todosParsed = JSON.parse(todos);
			const convertedTodos: Todo[] = [];
			todosParsed.forEach((todo: Todo) => {
				// console.log(todo);
				convertedTodos.push(
					new Todo(
						todo.title,
						todo.description,
						todo.completed,
						todo.type,
						todo.date,
						todo.dueDate,
						todo.id,
						todo.priority,
						todo.favourite
					)
				);
			});
			return convertedTodos;
		}
		return [];
	},
	// () takes no arguments, and returns an array of Todo objects
	loadPastTodos: (): Todo[][] => {
		const todosCompleted = localStorage.getItem("todosCompleted");
		const todosNonComplete = localStorage.getItem("todosNonComplete");
		var convertedCompleted: Todo[] = [];
		var convertedNonComplete: Todo[] = [];
		if (todosCompleted) {
			const todosParsed = JSON.parse(todosCompleted);
			todosParsed.forEach((todo: Todo) => {
				console.log(todo);
				convertedCompleted.push(
					new Todo(
						todo.title,
						todo.description,
						todo.completed,
						todo.type,
						todo.date,
						todo.dueDate,
						todo.id,
						todo.priority,
						todo.favourite
					)
				);
			});
		}
		if (todosNonComplete) {
			const todosParsed = JSON.parse(todosNonComplete);
			todosParsed.forEach((todo: Todo) => {
				console.log(todo);
				convertedNonComplete.push(
					new Todo(
						todo.title,
						todo.description,
						todo.completed,
						todo.type,
						todo.date,
						todo.dueDate,
						todo.id,
						todo.priority,
						todo.favourite
					)
				);
			});
		}
		return [convertedCompleted, convertedNonComplete];
	},
	// if (todosCompleted && todosNonComplete) {
	// 	// return JSON.parse(todos);
	// 	const todosCompletedParsed = JSON.parse(todosCompleted);
	// 	const todosNonCompleteParsed = JSON.parse(todosNonComplete);
	// 	const convertedTodosCompleted: Todo[] = [];
	// 	const convertedTodosNonComplete: Todo[] = [];
	// 	todosCompletedParsed.forEach((todo: Todo) => {
	// 		console.log(todo);
	// 		convertedTodosCompleted.push(
	// 			new Todo(
	// 				todo.title,
	// 				todo.description,
	// 				todo.completed,
	// 				todo.type,
	// 				todo.date,
	// 				todo.dueDate,
	// 				todo.id,
	// 				todo.priority,
	// 				todo.favourite
	// 			)
	// 		);
	// 	});
	// 	todosNonCompleteParsed.forEach((todo: Todo) => {
	// 		console.log(todo);
	// 		convertedTodosNonComplete.push(
	// 			new Todo(
	// 				todo.title,
	// 				todo.description,
	// 				todo.completed,
	// 				todo.type,
	// 				todo.date,
	// 				todo.dueDate,
	// 				todo.id,
	// 				todo.priority,
	// 				todo.favourite
	// 			)
	// 		);
	// 	});
	// 	return [convertedTodosCompleted, convertedTodosNonComplete];
	// }
	// return [[], []];

	clear: () => {
		localStorage.removeItem("todos");
	},
};
