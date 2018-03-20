module.exports = (base_data)=>
`/*计算缓存
注意事项
1、此处定义的方法 依赖属性 未改变，每次返回之前的缓存
2、不能用()=>{}  箭头函数定义
如：
show_error(){
    return this.error.join();
}
只要error属性未修改过，不管是重新渲染页面 还是 别的操作调用，直接返回缓存，而不是每次都join

ps: https://cn.vuejs.org/v2/guide/computed.html
*/

export default {

};
`;