import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import firebase from "firebase/compat/app";
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
	doc,
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
		// const userRef2 = doc(this.db, "Users");

		// console.log(this.userRef);
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
			console.log("user already has an account");
			// console.log()
			return true;
		}
	}

	checkUserLoggedIn(): boolean {
		if (getAuth().currentUser) {
			return true;
		} else {
			return false;
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

	async logIn() {
		const provider = new GoogleAuthProvider();
		try {
			const result = await signInWithPopup(getAuth(), provider);
			console.log(result);
			const db = getFirestore();
			const currentUser = getAuth().currentUser;

			await this.checkUserExists(currentUser?.email).then((result) => {
				if (result === true) {
					console.log("About view, user already exists, logging in");
				} else {
					this.createNewUser(currentUser)
						.then((result) => {
							console.log("about view, user does not exists, creating user");
							console.log(result);
						})
						.catch((result) => {
							console.log("error creating user");
							console.log(result);
						});
				}
			});
		} catch (error) {
			console.log("sign in error", error);
		}
	}

	async logOut() {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			});
	}
}
