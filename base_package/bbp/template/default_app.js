module.exports = (base_data) => `/*页面级，组件 */
<template>
    <Main class="${base_data.name.split('/')[base_data.name.split('/').length-1]}" nav_key="">
        
    </Main>
</template>
<script>
import ajax from "ajax";
import Main from "Main";
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
    mounted: async function() {
        console.log('源文件：','${base_data.name}');
        console.log('this：',this);
        console.log('$route：',this.$route);
        const { seccess,error,data } = await ajax({
            url:"/",
            method: 'get',//get,post,put,delete,patch
            data:{},
            params:{}
        });
        if (seccess) {
            
        } else {
            this.$message.error(error || '系统繁忙，请稍后再试！');
        }
    }
};
</script>
<style lang="scss" scoped>
@import './sass/style.scss';
</style>
`;