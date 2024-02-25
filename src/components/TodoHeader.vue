<template>
	<header>
		<nav class="navbar">
			<div class="branding" @click="logUser">
				<!-- <img src="../assets/img.png" alt="logo" /> -->
				<img src="/logotodo.jpg" alt="logo" />
			</div>
			<ul class="nav-links">
				<li><RouterLink to="/">Home</RouterLink></li>
				<li><RouterLink to="/about">About</RouterLink></li>
				<li v-if="!loggedIn" class="login" @click="handleLogIn">Log in</li>
				<li v-else class="login" @click="handleLogOut">Log out</li>
			</ul>
		</nav>
	</header>
</template>
<script setup lang="ts">
// import { fireUtil } from "@/utils/firestoreUtil";

import type { fireUtil } from "@/utils/firestoreUtil";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { inject, ref } from "vue";
import { RouterLink } from "vue-router";

// const util = new fireUtil();
const util = inject("fireUtil") as fireUtil;

// const loggedIn = getAuth().currentUser;
// var loggedIn = true;
var loggedIn = ref(util.checkUserLoggedIn());
// console.log(loggedIn, "AKOSHDIUASHD");
// handle logins
onAuthStateChanged(getAuth(), (user) => {
	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/auth.user
		// const uid = user.uid;
		// ...
		loggedIn.value = true;
	} else {
		// User is signed out
		// ...
		loggedIn.value = false;
	}
});
async function handleLogIn() {
	// loggedIn.value = !loggedIn.value;
	console.log(loggedIn.value);
	await util.logIn();
	// go to main page
	window.location.replace("/");

	// const todoUrl = window.location.href.split("/");
	// todoUrl.pop();
	// const urlWithoutLastPath = todoUrl.join("/");
	// console.log(urlWithoutLastPath);
	// window.location.replace(urlWithoutLastPath);
}

async function handleLogOut() {
	// loggedIn.value = !loggedIn.value;
	console.log(loggedIn.value);
	await util.logOut();
	// go to about page
	// window.location.replace("/about");
	// im guessing why this works is because it redirects but in index.ts it checks if it requires auth, yes sot it sends toa bout
	window.location.replace("/");
	// window.location.reload();
}

function logUser() {
	console.log(getAuth().currentUser);
}
</script>

<style scoped lang="scss">
.login {
	cursor: pointer;
}
.navbar {
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	background-color: #f3f3f3;
}

.branding {
	display: flex;
	align-items: center;

	img {
		height: 40px;
		margin-right: 1rem;
	}

	h1 {
		margin: 0;
		color: #5a5a5a;
		font-size: 1.5rem;
	}
}

.nav-links {
	list-style: none;
	padding: 0;
	display: flex;

	li {
		margin-left: 1rem;
	}

	a {
		text-decoration: none;
		color: #5a5a5a;
	}
	a:hover,
	li:hover {
		// background-color: #f2f2f2;
		color: #d0d0d0;
	}
}
</style>
