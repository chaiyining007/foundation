module.exports = (base_data) => `/*页面级，组件 */
<template>
    <Main class="${base_data.name.split('/')[base_data.name.split('/').length-1]}" nav_key="">
        
    </Main>
</template>
<script>
import ajax from "main/public/src/ajax.js";
import Main from "components/Main";
import watch from "./src/watch";
import methods from "./src/methods";
import computed from "./src/computed";
import i18n from "./language";
export default {
    data: function(){
        return {};
    },
    i18n,
    watch: watch,
    methods: methods,
    computed: computed,
    components: {
        Main
    },
    mounted: async function() {
        console.log('源文件：','${base_data.name}');
        console.log('this：',this);
        console.log('$route：',this.$route);
        const { seccess,error,data } = await ajax({
            url:"/",
            method: 'get',//get,post,put,deete,patch
            data:{},
            params:{}
        });
        if (seccess) {
            
        } else {
            this.$Message.error(error || this.$t('error_msg'));
        }
    }
};
</script>
<style lang="scss" scoped>
@import './sass/style.scss';
</style>
`;