import axios from "axios";
import Vue from "vue";

const pageA = Vue.extend({
    data() {
        return {
            test: String,
        };
    },
    created() {
        // axios.postの第１引数にルートを、第２引数にポストするデータの配列を渡します
        axios.get("/api/test").then((res) => {
            // テストのため返り値をコンソールに表示
            this.test = res.data;
        }).catch((error) => {
            // console.log(error);
        });
    },
});
export default pageA;
