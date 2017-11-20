module.exports = (base_data) => {
    let name = `${base_data.name[0].toLocaleUpperCase()}${base_data.name.substring(1)}`;
    return 
`const Controller = require('egg').Controller;
    /**
     * 类：
     * 说明：
     * 创建人：
     */
    class ${name}Controller extends Controller {
        /**
         * 方法：
         * 说明：
         * 创建人：
         */
        * create() {
            const { ctx, service } = this;
            const data = yield service.${base_data.name}.insert(ctx.request.body);
            ctx.body = { biz_action: 0, data: data };
        }
    }
module.exports = ${name}Controller;
`
}