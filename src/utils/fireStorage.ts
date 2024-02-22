import type { Todo } from "@/class/Todo";
import {
	CollectionReference,
	DocumentReference,
	Firestore,
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	query,
	setDoc,
	where,
	type DocumentData,
} from "firebase/firestore";

export class fireStorage {
	db: Firestore;
	todoRef!: CollectionReference<DocumentData, DocumentData>;
	userRef: CollectionReference<DocumentData, DocumentData>;
	userEmail: string;
	// for now we use a constructor that
	constructor(userEmail: string = "") {
		// const db = getFirestore();
		this.db = getFirestore();
		this.userRef = collection(this.db, "Users");
		console.log("akodjasoidjoaisdjnoasjdioasjdioasjoid");
		console.log(userEmail);
		this.userEmail = userEmail;
		if (userEmail != "") {
			const q = query(this.userRef, where("email", "==", userEmail));
			const querySnapshot = getDocs(q);

			querySnapshot.then((results) => {
				// const documents = results.docs
				this.todoRef = collection(this.db, results.docs[0].ref.path, "todos");
				console.log("LOGGING PATH");
				console.log(results.docs[0].ref.path);
				// console.log(results);
				// console.log(this.userRef);
				// console.log("HA");
				// console.log(this.todoRef);
			});

			// querySnapshot.this.todoRef = collection(this.db, "Users");
			// this.todoRef.
		}

		// console.log(this.userRef);
	}

	async getTodos() {
		if (this.userEmail != "") {
			await getDocs(this.todoRef).then((result) => {
				console.log("todos");
				console.log(result);
			});
		} else {
			console.log("joaishdisa");
			console.log(this.userEmail);
			throw "User is not logged in!";
		}
	}

	async setTodo(todo: Todo) {
		// call some util function here to convert todo into regular object

		let todoConverted = Object.assign({}, todo);
		if (todoConverted.dateCompleted === undefined) {
			todoConverted.dateCompleted = new Date();
		}

		await addDoc(this.todoRef, todoConverted)
			.then((result) => {
				console.log("added todo");
			})
			.catch((error) => {
				console.log(error);
			});
	}
}
