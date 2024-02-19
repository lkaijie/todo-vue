<template>
	<div class="about">
		<h1>This is an about page</h1>
		<button @click="oauthGoogle">Click me to login</button>
		<button @click="logUser">asdas</button>
	</div>
</template>

<script setup lang="ts">
import router from "@/router";
import { fireUtil } from "@/utils/firestoreUtil";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const util = new fireUtil();

async function oauthGoogle() {
	console.log("logign");
	const provider = new GoogleAuthProvider();
	try {
		const result = await signInWithPopup(getAuth(), provider);
		console.log(result);
		const db = getFirestore();
		const currentUser = getAuth().currentUser;

		await util.checkUserExists(currentUser?.email).then((result) => {
			if (result === true) {
				console.log("About view, user already exists, logging in");
			} else {
				util
					.createNewUser(currentUser)
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

		// if (currentUser) {
		// 	const {
		// 		displayName,
		// 		email,
		// 		metadata: { creationTime },
		// 	} = currentUser;
		// 	if ()
		// const docRef = await addDoc(collection(db, "Users"), {
		// 	displayName,
		// 	email,
		// 	creationTime,
		// });
		// 	console.log(docRef);
		// }
	} catch (error) {
		console.log("sign in error", error);
	}

	// signInWithPopup(getAuth(), provider)
	// 	.then((result) => {
	// 		console.log(result);
	// 		const db = getFirestore();
	// 		console.log(db);
	// 		// add user to db
	// 		const userCollection = collection(db, "users");
	// 		console.log(userCollection);
	// 		// userCollection.add({

	// 		// })
	// 		const docRef = addDoc(collection(db, "Users"), {
	// 			userName = getAuth().currentUser?.displayName,
	// 		});
	// 		router.push("/");
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	});
}

function logUser() {
	console.log(getAuth().currentUser);
}
</script>

<style>
@media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}
</style>
