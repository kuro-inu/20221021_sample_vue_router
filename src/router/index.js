import { createRouter, createWebHistory } from "vue-router";
import USER_LIST from "../components/UserList.vue";
import USER_PAGE from "../components/User.vue";
import NOT_FOUND_PAGE from "../components/404.vue";

const routes = [
    {
        path: "/",
        component: USER_LIST
    },
    {
        path: "/:catchAll(.*)",
        component: NOT_FOUND_PAGE
    },
    {
        path: "/user/:id",
        name: "userpage",
        component: USER_PAGE
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;