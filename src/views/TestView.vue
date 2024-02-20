<template>
	<div class="about"></div>
	<button @click="testFunc">Click me for testing purposes</button>
</template>

<script setup lang="ts">
import { fireStorage } from "@/utils/fireStorage";
import { fireUtil } from "@/utils/firestoreUtil";
import { getAuth } from "firebase/auth";

const fire = new fireUtil();
const user = getAuth().currentUser;

function testFunc() {
	const userExists = fire.checkUserExists(user?.email);
	// console.log(userExists.then(result)+);
	userExists
		.then((result) => {
			console.log("success" + result);
			const testutil = new fireStorage(user?.email);
		})
		.catch((result) => {
			console.log("failuer" + result);
		});
}
</script>

<style>
/* @media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
} */
</style>
