import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import VMap from "./components/Map.vue";

const routes = [
  { path: "/home", component: Home },
  { path: "/map", component: VMap },
];

export default new VueRouter({
  routes,
});
