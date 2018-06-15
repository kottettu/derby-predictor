import Vue from "vue";

const search = Vue.extend({
    data() {
        return {
            msg: "aa",
        };
    },
    methods: {
        search(): string {
            return this.msg + " world";
        },
    },

});
export default search;
