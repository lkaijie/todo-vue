import { createRouter, createWebHistory } from "vue-router";
import TodoView from "../views/TodoView.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import TestView from "@/views/TestView.vue";
import TodoViewLoggedIn from "@/views/TodoViewLoggedIn.vue";
import { defineAsyncComponent } from "vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: TodoView,
			// component: TodoViewLoggedIn,
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
	console.log(user);

	onAuthStateChanged(getAuth(), (user) => {
		console.log(user);
		if (user == null) {
			alert("Login is required to continue!");
		}
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
