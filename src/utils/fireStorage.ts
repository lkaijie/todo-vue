import {
	CollectionReference,
	DocumentReference,
	Firestore,
	collection,
	doc,
	getDocs,
	getFirestore,
	query,
	where,
	type DocumentData,
} from "firebase/firestore";

export class fireStorage {
	db: Firestore;
	todoRef!: DocumentReference<DocumentData, DocumentData>;
	userRef: CollectionReference<DocumentData, DocumentData>;
	// for now we use a constructor that
	constructor(userEmail: string = "") {
		// const db = getFirestore();
		this.db = getFirestore();
		this.userRef = collection(this.db, "Users");
		console.log("akodjasoidjoaisdjnoasjdioasjdioasjoid");
		console.log(userEmail);
		if (userEmail != "") {
			const q = query(this.userRef, where("email", "==", userEmail));
			const querySnapshot = getDocs(q);

			querySnapshot.then((results) => {
				// const documents = results.docs
				this.todoRef = doc(this.db, results.docs[0].ref.path);
				// console.log(results);
				console.log(this.userRef);
				console.log("HA");
				console.log(this.todoRef);
			});

			// querySnapshot.this.todoRef = collection(this.db, "Users");
			// this.todoRef.
		}

		// console.log(this.userRef);
	}
}
