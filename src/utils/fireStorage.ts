import type { Todo } from "@/class/Todo";
import {
	CollectionReference,
	DocumentReference,
	Firestore,
	Query,
	QuerySnapshot,
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	orderBy,
	query,
	setDoc,
	updateDoc,
	where,
	type DocumentData,
} from "firebase/firestore";
import { useCollection } from "vuefire";

export class fireStorage {
	db: Firestore;
	todoRef!: CollectionReference<DocumentData, DocumentData>;
	userRef: CollectionReference<DocumentData, DocumentData>;
	userEmail: string;
	// for now we use a constructor that
	constructor(userEmail: string = "") {
		this.db = getFirestore();
		this.userRef = collection(this.db, "Users");
		this.userEmail = userEmail;
	}

	async init() {
		if (this.userEmail != "") {
			const q = query(this.userRef, where("email", "==", this.userEmail));
			const querySnapshot = await getDocs(q);

			this.todoRef = collection(
				this.db,
				querySnapshot.docs[0].ref.path,
				"todos"
			);
		}

		const todosasd = useCollection(this.userRef);
	}

	async getTodos(): Promise<QuerySnapshot<DocumentData>> {
		if (this.userEmail != "") {
			const result2 = await getDocs(this.todoRef);
			return result2;
		} else {
			// console.log(this.userEmail);
			throw "User is not logged in!";
		}
		// return query(this.todoRef);
	}

	async setTodo(todo: Todo) {
		// call some util function here to convert todo into regular object
		let todoConverted = Object.assign({}, todo);
		if (todoConverted.dateCompleted === undefined) {
			todoConverted.dateCompleted = new Date();
		}

		await addDoc(this.todoRef, todoConverted)
			.then((result) => {
				// console.log("added todo");
			})
			.catch((error) => {
				console.log(error);
			});
	}

	async updateTodo(todo: Todo, id: string) {
		const todoRef = doc(this.todoRef, id);
		const todoConverted = Object.assign({}, todo);
		if (todoConverted.dateCompleted === undefined) {
			todoConverted.dateCompleted = new Date();
		}
		await setDoc(todoRef, todoConverted);
	}

	async addTodo(todo: Object) {
		if (todo.dateCompleted == undefined) {
			todo.dateCompleted = new Date();
		}

		await addDoc(this.todoRef, todo);
	}
	async addTodo2(todo: Object) {
		if (todo.dateCompleted == undefined) {
			todo.dateCompleted = new Date();
		}

		await setDoc(doc(this.todoRef, todo.id), todo);
	}

	async getCurrentTodosReferece() {
		// example dueDate: "2022-09-01"
		// example date: "2022-08-31T23:00:00.000Z"
		// will order by creation date
		const q = query(
			this.todoRef,
			where("completed", "==", false),
			where("dueDate", "<=", new Date().toISOString().split("T")[0]),
			orderBy("date", "asc")
		);
		return q;
	}

	async toggleCompleted(id: string, completed: boolean) {
		const reff = doc(this.todoRef, id);
		await updateDoc(reff, {
			completed: completed,
		});
	}
	async toggleFavourite(id: string, completed: boolean) {
		const reff = doc(this.todoRef, id);
		await updateDoc(reff, {
			favourite: completed,
		});
	}
	async editTodo(id: string, todo: any) {
		const reff = doc(this.todoRef, id);
		// console.log("logging todo");
		// console.log(todo);
		await updateDoc(reff, todo);
	}

	async deleteTodos(q: Query<DocumentData, DocumentData>) {
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			deleteDoc(doc.ref);
		});
	}

	async deleteTodoById(id: string) {
		await deleteDoc(doc(this.todoRef, id));
	}
}
