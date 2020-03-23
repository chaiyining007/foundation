module.exports = (base_data)=>
`/*常规方法定义
注意事项
1、不能用()=>{}  箭头函数定义
2、大量计算方法建议放computed

ps: https://cn.vuejs.org/v2/api/#methods
*/
import ajax from "ajax";
import queryString from "helper/queryString";
import "helper/FormatDate";
export default {
  init_table_data(data) {
    data.list = data.data;
    data.list && data.list.forEach((data,index) => {
      
    });
  },
  get_list_data_ajax(search_data) {
    return ajax({
      url: "/",
      data: search_data
    });
  },
  async get_table_data(search_data) {

    const { success, error, data } = await this.get_list_data_ajax(search_data);

    this.table_loading = false;
    if (success) {
      this.init_table_data(data);
      this.info_data.table_data = data.list;
      this.info_data.total = data.pager.total;
    }
    else {
      this.$message.error(error || '系统繁忙，请稍后再试！');
    }
  },
  get_search_data() {
    return JSON.parse(JSON.stringify({
      keyword: "",
      page: 1,
      page_size: 20
    }));
  },
  init_search_data() {
    const search_data = JSON.parse(JSON.stringify(this.search_data));
    return search_data;
  },
  page_search() {
    console.log(this.search_data)
    this.search_data.page = 1;
    this.search();
  },
  reset() {
    this.search_data = this.get_search_data();
    this.search();
  },
  /**
   * 页面后退触发重新搜索
   */
  popstate() {
    const search_data = this.get_search_data();
    queryString(search_data);
    this.$set(this, "search_data", search_data);
    this.search(false);
  },
  page_szie_change(page_size) {
    this.search_data.page_size = page_size;
    this.search_data.page = 1;
    this.search();
  },
  page_index_change(index = 1) {
    this.search_data.page = index;
    this.search();
  },
  async search(is_to_page = true) {
    this.table_loading = true;
    const search_data = this.init_search_data();
    search_data && await this.get_table_data(search_data);
    search_data && is_to_page && this.toPage(this.search_data);
    if (!search_data) {
      this.table_loading = false;
    }
  },
    
};
`;