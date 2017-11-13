module.exports = (base_data)=>
`/*
页面数据
 */
var _promise = new Promise((resolve, reject) => {
    const _ajax = axios({
        method: 'get',
        url: '/',
        //data,只能用于“PUT”，“POST”和“PATCH”
        data: {},
        //params,是url参数
        params: {}
    });
    _ajax.then(function(data) {
        resolve(data);
    }).catch(function(error) {
        console.log(error);
    });
});
var _data = {
    all_abilities: new Set(JSON.parse(JSON.stringify([...window.btn_abilities]))),//写成这样是为了取消和window的引用关系，全局状态转为私有状态
    is_info: false,
    get_data: _promise,
    info_data: {}
};
export default _data;
`;