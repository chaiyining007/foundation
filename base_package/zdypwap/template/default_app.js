module.exports = (base_data) => `/*页面级，组件 */
<template>
    <div class="${base_data.name.split('/')[base_data.name.split('/').length-1]}">
        
    </div>
</template>
<script>
// import data from "./src/data";
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
    components: {},
    mounted: function() {}
};
</script>
<style lang="sass" scoped>
@import './sass/style.scss';
</style>
`;