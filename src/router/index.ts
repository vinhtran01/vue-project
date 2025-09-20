import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/homePage/index.vue";
import AboutUs from "@/pages/aboutUs/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/about",
      component: AboutUs,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

export default router;
