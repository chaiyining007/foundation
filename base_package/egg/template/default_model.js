module.exports = (base_data) => {
    let name = `${base_data.name[0].toLocaleUpperCase()}${base_data.name.substring(1)}`;
    const template=
`module.exports = app => {
    const { CHAR, TEXT, BIGINT } = app.Sequelize;

    const ${name} = app.model.define('${base_data.name}', {
        created_at: {
            type: BIGINT,
            defaultValue() {
                return + new Date();
            }
        },
        updated_at: {
            type: BIGINT,
            defaultValue() {
                return + new Date();
            }
        },
    });
    ${name}.associate = function(){
        //app.model.models
    }
    return ${name};
};
`
    return template;
}