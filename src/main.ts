// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
// import star for favourites
import { faStar, faCheckSquare, fas } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { fireUtil } from "./utils/firestoreUtil";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCWrkD6eRSLrbUsBDe9NqUtKUR662Rb73Y",
	authDomain: "todo-vue-bf02d.firebaseapp.com",
	projectId: "todo-vue-bf02d",
	storageBucket: "todo-vue-bf02d.appspot.com",
	messagingSenderId: "106404722963",
	appId: "1:106404722963:web:ca8cf033026968fa85c2e6",
};

// Initialize Firebase
initializeApp(firebaseConfig);

/* add icons to the library */
library.add(faUserSecret);
library.add(faStar);
library.add(fas);
library.add(faSquare);

const app = createApp(App);
const util = new fireUtil();
app.config.globalProperties.$fireUtil = new fireUtil();
app.provide("fireUtil", util);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
