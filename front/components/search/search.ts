import axios from "axios";
import Vue from "vue";

const search = Vue.extend({
    data() {
        return {
            name: "aa",
            race_name: "",
        };
    },
    methods: {
        search(): any {
            axios.get("/api/test").then((res) => {
                // テストのため返り値をコンソールに表示
                this.name = res.data;
            }).catch((error) => {
                // console.log(error);
            });
        },
    },

});
export default search;
