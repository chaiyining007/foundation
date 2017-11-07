const fs = require('fs');
const path = require('path');
const argv = require('yargs').argv;
const [name] = argv._;
const { package_name = "component" } = argv;
const packages = `./base_package/`;
const configs = require(`${packages}${package_name}/config.json`);

const PRINT = `${__dirname}${path.sep}print`;
const _createFilePromise = (file_name, file_template) => new Promise(resolve => {
    const _file_path = `${PRINT}${path.sep}${file_name}`;
    fs.writeFile(_file_path, require(`${packages}${package_name}${path.sep}template${path.sep}${file_template}.js`)(), (err) => {
        if (err) throw err;
        console.log(`完成创建${_file_path}`); +
            resolve()
    })
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
            await _createDirPromise(name)
            _create(files, name);
        } else {
            await _createFilePromise(`${parent}${path.sep}${name}`, file_template);
        }
    }
};
_createDirPromise().then(() => {
    _create(configs)
});