import Vue from 'vue';
import VueRouter from 'vue-router'
import pageA from './components/pageA/pageA.vue'
import pageB from './components/pageB/pageB.vue'

Vue.use(VueRouter)

var router = new VueRouter({
    routes: [
        { path: '/pageA', component: pageA },
        { path: '/pageB', component: pageB }
    ]
})

const app = new Vue({
    router
}).$mount('#app')
