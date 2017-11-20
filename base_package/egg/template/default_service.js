module.exports = (base_data) => {
    let name = `${base_data.name[0].toLocaleUpperCase()}${base_data.name.substring(1)}`;
    return 
`const egg = require('egg');
class ${name}Service extends egg.Service {
    * insert(data) {
        const { app, ctx } = this;
        const reg_data = Object.assign({}, data);
        let ${base_data.name} = yield app.model.${name}.create(data);
        return ${base_data.name}.get({ 'plain': true });
    }
}
module.exports = ${name}Service;
`
}