import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";

import Signup from "../views/Auth/Signup.vue";
import Login from "@/views/Auth/Login.vue";
import Dashboard from "@/views/Layouts/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/dashboard",
      name: "DashboardLayout",
      component: Dashboard,
      children: [
        {
          path: "/dashboard",
          name: "Dashboard",
          component: HomeView,
        },
        {
          path: "/dashboard/users",
          name: "Users",
          meta: {
            isDynamic: false,
            previousRoute: "Dashboard",
          },
          component: HomeView,
        },
        {
          path: "/dashboard/users/:id",
          name: "User",
          meta: {
            isDynamic: true,
            previousRoute: "Users",
          },
          component: HomeView,
        },
      ],
    },
  ],
});

export default router;
