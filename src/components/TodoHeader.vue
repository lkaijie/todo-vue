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
			</ul>
		</nav>
	</header>
</template>
<script setup lang="ts">
import { getAuth } from "firebase/auth";
import { RouterLink } from "vue-router";

function logUser() {
	console.log(getAuth().currentUser);
}
</script>

<style scoped lang="scss">
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
