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
			<!-- <div v-if="loggedIn" class="login" @click="loggedIn = !loggedIn">
				Log in
			</div>
			<div v-else class="login" @click="loggedIn = !loggedIn">Logout</div> -->
			<!-- <h1 v-if="awesome">Vue is awesome!</h1>
			<h1 v-else>Oh no 😢</h1> -->
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
console.log(loggedIn, "AKOSHDIUASHD");
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
function handleLogIn() {
	// loggedIn.value = !loggedIn.value;
	console.log(loggedIn.value);
	util.logIn();
}

function handleLogOut() {
	// loggedIn.value = !loggedIn.value;
	console.log(loggedIn.value);
	util.logOut();
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
}
</style>
