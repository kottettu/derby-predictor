var Vue = require('vue').default;
var VueRouter = require('vue-router').default;
Vue.use(VueRouter)
var PageA = Vue.extend(require('./components/pageA.vue').default);
var PageB = Vue.extend(require('./components/pageB.vue').default);

var router = new VueRouter({
    routes: [
        { path: '/pageA', component: PageA },
        { path: '/pageB', component: PageB }
    ]
})

new Vue({
    el: '#app',
    router: router,
})
