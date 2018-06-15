import Vue from 'vue';
import axios from 'axios';

const pageA = Vue.extend({
    data(){
        return {
            test: String,
        }
    },
    created: function () {
        // axios.postの第１引数にルートを、第２引数にポストするデータの配列を渡します
        axios.get('/api/test').then(res => {
            // テストのため返り値をコンソールに表示
            this.test = res.data
        }).catch(error => {
            console.log(error);
        });
    },
});
export default pageA;
