<template>
	<!-- make this into an actual about page i guess? maybe I should put tech stack, problems etc idk? -->
	<div class="about">
		<h1>About</h1>
		<!-- <button @click="logUser">asdas</button> -->
		<div class="content">
			This app requires sign in to work, currently only supports Oauth 2.0 for
			google logins, database and authentication implemented with
			<span>Firebase</span>, built with <span>Vue</span> and
			<span>Typescript</span>.
		</div>
		<button v-if="!loggedIn" @click="oauthGoogle" class="login-button">
			Click here to login
		</button>
		<div v-else class="logged-in">
			You are logged in! Click on the Home Tab to view your Todos
		</div>
	</div>
</template>

<script setup lang="ts">
// @ts-nocheck

import router from "@/router";
import { fireUtil } from "@/utils/firestoreUtil";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { ref } from "vue";
// import { url } from "inspector";

const util = new fireUtil();

var loggedIn = ref(util.checkUserLoggedIn());

async function oauthGoogle() {
	const provider = new GoogleAuthProvider();
	try {
		const result = await signInWithPopup(getAuth(), provider);
		console.log(result);
		const db = getFirestore();
		const currentUser = getAuth().currentUser;

		await util.checkUserExists(currentUser?.email).then((result) => {
			if (result === true) {
				console.log("About view, user already exists, logging in");
				const todoUrl = window.location.href.split("/");
				todoUrl.pop();
				const urlWithoutLastPath = todoUrl.join("/");
				console.log(urlWithoutLastPath);
				window.location.replace(urlWithoutLastPath);
			} else {
				util
					.createNewUser(currentUser)
					.then((result) => {
						console.log("about view, user does not exists, creating user");
						console.log(result);
						const todoUrl = window.location.href.split("/");
						todoUrl.pop();
						const urlWithoutLastPath = todoUrl.join("/");
						console.log(urlWithoutLastPath);
						window.location.replace(urlWithoutLastPath);
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

		// window.location.replace();
		// console.log(window.location.href);
		// const todoUrl = window.location.href.split("/").pop().join()
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

<style scoped>
@media (min-width: 1024px) {
	.about {
		/* min-height: 100vh; */
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		/* margin-top: 50px; */
		padding-top: 50px;
	}
}
.login-button {
	margin: 2rem;
}
.logged-in {
	margin: 2rem;
}
.content {
	margin: 1rem 3rem 0 3rem;
}
span {
	font-weight: 600;
}

/* color: #fff; */
/* background-color: #3498db; */
button {
	display: inline-block;
	font-size: 1em;
	padding: 10px 20px;
	border: none;
	border-radius: 10px;
	background: none;
	text-align: center;
	text-decoration: none;
	transition: background-color 0.3s ease;
	cursor: pointer;
	/* margin: 2rem; */
}

button:hover {
	background-color: #f2f2f2;
	/* background-color: #add8e6; */
}
</style>
