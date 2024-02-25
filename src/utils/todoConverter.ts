// write an object that has 2 functions, one that takes a todo and converts it into a regular object,
//  and another that takes a regular object and converts it into a todo

import { Todo } from "@/class/Todo";
import type {
	QueryDocumentSnapshot,
	QuerySnapshot,
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
	fromFirestore2: function (
		snapshot: QuerySnapshot,
		options?: SnapshotOptions
	) {
		const data = snapshot.docs.map((doc) => {
			// return in form of object
			return {
				title: doc.data().title,
				description: doc.data().description,
				completed: doc.data().completed,
				type: doc.data().type,
				date: doc.data().date,
				dueDate: doc.data().dueDate,
				id: doc.data().id,
				priority: doc.data().priority,
				favourite: doc.data().favourite,
			};
			// return new Todo(
			// 	doc.data().title,
			// 	doc.data().description,
			// 	doc.data().completed,
			// 	doc.data().type,
			// 	doc.data().date,
			// 	doc.data().dueDate,
			// 	doc.data().id,
			// 	doc.data().priority,
			// 	doc.data().favourite
			// );
		});
		return data;
	},
}; // export default todoConverter;
