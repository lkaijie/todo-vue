import { createRouter, createWebHistory } from "vue-router";
import TodoView from "../views/TodoView.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import TestView from "@/views/TestView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: TodoView,
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/AboutView.vue"),
		},
		{
			path: "/test",
			name: "test",
			component: TestView,
		},
	],
});

router.beforeEach((to, from, next) => {
	const user = getAuth().currentUser;
	// console.log(to, from, next, user);
	console.log(user);
	// onAuthStateChanged(getAuth(), (user) => {
	// 	if (user) {
	// 		// User is signed in, see docs for a list of available properties
	// 		// https://firebase.google.com/docs/reference/js/auth.user
	// 		// const uid = user.uid;
	// 		router.push("/");
	// 		// ...
	// 	} else {
	// 		// User is signed out
	// 		// ...
	// 		router.push("/about");
	// 	}
	// });

	// next();
	onAuthStateChanged(getAuth(), (user) => {
		console.log(user);
		if (to.matched.some((record) => record.meta.requiresAuth)) {
			// console.log(from.path);
			if (user) {
				next();
			} else {
				next("/about");
			}
		} else {
			next();
		}
	});
});
export default router;
