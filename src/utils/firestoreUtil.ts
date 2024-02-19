import {
	Firestore,
	collection,
	getDoc,
	getFirestore,
	getDocs,
	CollectionReference,
	type DocumentData,
	query,
	where,
	addDoc,
} from "firebase/firestore";

interface User {
	displayName: string;
	email: string;
	creationTime: string;
}

export class fireUtil {
	db: Firestore;
	userRef: CollectionReference<DocumentData, DocumentData>;

	constructor() {
		// const db = getFirestore();
		this.db = getFirestore();
		// const userRef = (collection(this.db, "Users"))
		this.userRef = collection(this.db, "Users");

		console.log(this.userRef);
	}

	async checkUserExists(email: String): Promise<boolean> {
		function testing() {
			console.log(email);
			// console.log()
		}
		// testing();
		const q = query(this.userRef, where("email", "==", email));
		const querySnapshot = await getDocs(q);
		if (querySnapshot.empty) {
			// console.log("user does not exists");
			return false;
		} else {
			// console.log("user already has an account");
			return true;
		}
	}

	async createNewUser(info: User): Promise<boolean> {
		try {
			console.log("gwjusgiusdbgiubg");
			const docRef = await addDoc(this.userRef, {
				displayName: info.displayName,
				email: info.email,
				// creationTime: info.creationTime,
				creationTime: new Date(),
			});
			console.log(docRef, "FROM THE INNNER OF FIREUTILS");
			console.log("asjkolhdjikashgdik");
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
}
