import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Animals from "../views/Animals.vue";
import AnimalShow from "../components/AnimalShow.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/animals",
		name: "Animals",
		component: Animals,
	},
	{
		path: "/animals/:id",
		name: "AnimalShow",
		component: AnimalShow,
		props: true,
	},
	// {
	//   path: '/about',
	//   name: 'About',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	// }
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
