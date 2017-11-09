const fs = require('fs');
const path = require('path');
const argv = require('yargs').argv;
const [name] = argv._;
const { package_name = "project" } = argv;
const packages = `./base_package/`;
const configs = require(`${packages}${package_name}/config.json`);

const PRINT = `${__dirname}${path.sep}print`;
const _createFilePromise = (file_name, file_template) => new Promise(resolve => {
    const _file_path = `${PRINT}${path.sep}${file_name}`;
    let _template = "";
    const _file_template_path = `${packages}${package_name}${path.sep}template${path.sep}${file_template}.js`
    try {
        _template = require(_file_template_path);
        _template = _template();
    }
    catch (e) {
        console.warn(`未找到渲染模板：${_file_template_path}`);
    }
    finally {
        fs.writeFile(_file_path, _template, (err) => {
            if (err) throw err;
            console.log(`完成创建${_file_path}`);
            resolve()
        })
    }
});
const _createDirPromise = (dir = '') => new Promise(resolve => {
    const _path = `${PRINT}${path.sep}${dir}`;
    if (!fs.existsSync(_path)) {
        fs.mkdir(_path, (err) => {
            if (err) throw err;
            console.log(`完成创建${_path}`)
            resolve();
        })
        return;
    }
    resolve();
});
const _create = async function (config_data, parent = "") {
    for (let { name, type, files, file_template } of config_data) {
        if (type === "dir") {
            // console.log(parent,name)
            await _createDirPromise(`${parent}${path.sep}${name}`);
            console.log(`${parent}${path.sep}${name}`)
            files && _create(files, `${parent}${path.sep}${name}`);
        } else {
            await _createFilePromise(`${parent}${path.sep}${name}`, file_template);
        }
    }
};
_createDirPromise().then(() => {
    _create(configs)
});