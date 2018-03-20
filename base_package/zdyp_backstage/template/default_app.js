module.exports = (base_data) => `/*页面级，组件 */
<template>
    <Main class="${base_data.name.split('/')[base_data.name.split('/').length-1]}">
        
    </Main>
</template>
<script>
import ajax from "main/public/src/ajax.js";
import Main from "components/Main";
import watch from "./src/watch";
import methods from "./src/methods";
import computed from "./src/computed";

export default {
    data: function(){
        return {};
    },
    watch: watch,
    methods: methods,
    computed: computed,
    components: {
        Main
    },
    mounted:async function() {
        const { biz_action, biz_msg, data } = ajax({
            url:"/",
            method: 'post',//get,post,put,deete,patch
            data:{},
            params:{}
        });
        if (!biz_action) {
            window.location.href = "/admin/admin_users/sign_in";
        } else {
            this.$Message.error(biz_msg || "系统繁忙，请稍后再试");
        }
    }
};
</script>
<style lang="sass" scoped>
@import './sass/style.scss';
</style>
`;