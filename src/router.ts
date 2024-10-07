import { createRouter, createWebHashHistory } from "vue-router";

import About from "./components/Blackjack.vue";
import HelloWorld from "./components/Hub.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: HelloWorld,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});
