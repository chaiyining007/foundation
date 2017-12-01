module.exports = (base_data) => {
    let name = `${base_data.name[0].toLocaleUpperCase()}${base_data.name.substring(1)}`;
    const template=
`const path = require('path');
const BaseController = require(\`${path.resolve('./app/base/BaseController.js')}\`);
/**
 * 类：
 * 说明：
 * 创建人：
 */
class ${name}Controller extends BaseController {

    /**
     * 方法：创建
     * 说明：
     * 创建人：
     */
    * create() {
        const { ctx, service } = this;
        const data = yield service.${base_data.name}.insert(ctx.request.body);
        this.success(data);
    }

    /**
     * 方法：获取
     * 说明：
     * 创建人：
     */
    * show() {

    }

    /**
     * 方法：更新
     * 说明：
     * 创建人：
     */
    * update() {

    }
    
    /**
     * 方法：删除
     * 说明：
     * 创建人：
     */
    * destroy() {

    }
}
module.exports = ${name}Controller;
`
    return template;

}