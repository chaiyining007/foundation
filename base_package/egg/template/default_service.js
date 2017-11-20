module.exports = (base_data) => {
    let name = `${base_data.name[0].toLocaleUpperCase()}${base_data.name.substring(1)}`;
    const template=
`const egg = require('egg');
class ${name}Service extends egg.Service {
    * insert(data) {
        const { app, ctx } = this;
        const reg_data = Object.assign({}, data);
        let ${base_data.name} = yield app.model.${name}.create(data);
        return ${base_data.name}.get({ 'plain': true });
    }

    * update(data) {
        const { app, ctx } = this;
        const reg_data = Object.assign({}, data);
        let ${base_data.name} = app.model.${name}.build(data);
        ${base_data.name} = yield ${base_data.name}.update();
        return ${base_data.name}.get({ 'plain': true });
    }

    * delete(data) {
        const { app, ctx } = this;
        let ${base_data.name} = yield app.model.${name}.build(data);
        ${base_data.name} = yield ${base_data.name}.destroy();
        return {};
    }
}
module.exports = ${name}Service;
`
    return template;
}