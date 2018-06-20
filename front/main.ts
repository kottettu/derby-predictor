import Vue from "vue";
import VueRouter from "vue-router";
import search from "./components/search/search.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: "/", component: search },
    ],
});

const app = new Vue({
    router,
}).$mount("#app");
