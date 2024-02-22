// write an object that has 2 functions, one that takes a todo and converts it into a regular object,
//  and another that takes a regular object and converts it into a todo

import { Todo } from "@/class/Todo";
import type {
	QueryDocumentSnapshot,
	SnapshotOptions,
} from "firebase/firestore";

export const todoConverter = {
	toFirestore: function (todo: Todo) {
		return {
			title: todo.title,
			description: todo.description,
			completed: todo.completed,
			dateCompleted: todo.dateCompleted,
			id: todo.id,
			dueDate: todo.dueDate,
			priority: todo.priority,
			favourite: todo.favourite,
			type: todo.type,
			date: todo.date,
		};
	},
	//
	fromFirestore: function (
		snapshot: QueryDocumentSnapshot,
		options?: SnapshotOptions
	) {
		const data = snapshot.data(options);
		return new Todo(
			data.title,
			data.description,
			data.completed,
			data.type,
			data.date,
			data.dueDate,
			data.id,
			data.priority,
			data.favourite
		);
	},
}; // export default todoConverter;
