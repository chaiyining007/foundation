module.exports = (base_data) => `/*页面级，组件 */
<template>
    <Main class="${base_data.name.split('/')[base_data.name.split('/').length-1]}" title="Title" nav_key="" :popstate="popstate">
        <template #headAppend>
            <div>
            <!-- <el-button type="success">按钮</el-button> -->
            </div>
        </template>
        <el-form :inline="true" :model="search_data" label-width="130px" class="search_form">
        <el-form-item label="关键字：">
          <el-input clearable v-model.trim="search_data.keyword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button round class="reset_search" @click="reset" icon="el-icon-refresh-right">重置</el-button>
          <el-button type="primary" round @click="page_search" icon="el-icon-search">搜索</el-button>
        </el-form-item>
      </el-form>
      <BTable
        :columns="columns"
        empty-text="暂无数据"
        :data="info_data.table_data"
        :loading="table_loading"
      >
      </BTable>
      <BPagination
        v-if="info_data.total"
        :total="info_data.total"
        :current-page="search_data.page"
        :page-size="search_data.page_size"
        @size-change="page_szie_change"
        @current-change="page_index_change"
      ></BPagination>
    </Main>
</template>
<script>
import ajax from "ajax";
import Main from "Main";
import watch from "./src/watch";
import methods from "./src/methods";
import computed from "./src/computed";
import BTable from "components/BTable";
import BPagination from "components/BPagination";
import queryString from "helper/queryString";

export default {
    data: function(){
        const search_data = this.get_search_data();
        queryString(search_data);
        return {
            table_loading: true,
            search_data: search_data,
            info_data: {
                table_data: [],
                total: 0
            },
            columns: []
        };
    },
    watch: watch,
    methods: methods,
    computed: computed,
    components: {
        Main,
        BTable,
        BPagination
    },
    mounted: async function() {
        console.log('源文件：','${base_data.name}');
        console.log('this：',this);
        console.log('$route：',this.$route);
        this.search();
    }
};
</script>
<style lang="scss" scoped>
@import './sass/style.scss';
</style>
`;