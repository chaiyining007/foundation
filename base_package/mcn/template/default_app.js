module.exports = (base_data) => `/*页面级，组件 */
<template>
  <Main class="${base_data.name.split('/')[base_data.name.split('/').length-1]}" nav_key="" title="">
        
  </Main>
</template>
<script>
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
  mounted: async function() {
    console.log('源文件：','${base_data.name}');
    console.log('this：',this);
  }
};
</script>
<style lang="scss">
@import './sass/style.scss';
</style>
`;