import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

const router = createRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/about', component: About}
    ],
    history: createWebHashHistory()
})

export default router
