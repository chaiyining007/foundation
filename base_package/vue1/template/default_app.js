module.exports = (base_data) =>
    `//入口文件
import page_base from "page_base";
import language from './language';
import data from "./src/data.js";
import * as template from "./template/template.js";
import methods from "./src/methods.js";
import computed from "./src/computed.js";
import "./sass/style.scss";
import Main from "components/main";
const init = (data) => {
    window.page = new Vue({
        el: document.getElementById("page"),
        i18n:language,
        data: function() {
            return data;
        },
        template: template.main,
        methods: methods,
        computed: computed,
        components:{Main},
        created: function() {
            if (this.get_data.constructor === Promise) {
                this.get_data.then((data) => {
                    this.is_info = true;
                    this.info_data = data.data;
                });
            } else if (typeof this.get_data === "function") {
                this.get_data();
            }
        }
    });
    console.log(window.page);
}

console.log('${base_data.name}加载完毕！');
page_base(function() {
    init(data);
});
`;