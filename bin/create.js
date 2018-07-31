#!/usr/bin/env node

const { version } = require('../package.json');
const program = require('commander');
const download = require('download');
const fs = require('fs');
const path = require('path');
const argv = require('yargs').argv;
const [name] = argv._;
const { package_name = "bossbase" } = argv;
const packages = `../base_package/`;
const configs = require(`${packages}${package_name}/config.json`);

const PRINT = `${path.resolve('./')}${path.sep}`;
program
  .version(version)
  .parse(process.argv);
const _createFilePromise = (file_name, file_template, download_url) => new Promise(resolve => {
  const _file_path = `${PRINT}${path.sep}${file_name}`;
  let _template = "";
  if (typeof file_template==="string") {
    const _file_template_path = `${packages}${package_name}${path.sep}template${path.sep}${file_template}.js`
    try {
      _template = require(_file_template_path);
      _template = _template({ name: name });
    }
    catch (e) {
      if (file_template) {
        console.warn(`未找到渲染模板：${_file_template_path}`);
      } else {
        console.warn(`${file_name}：未配置渲染模板，已空文件处理`);
      }
    }
    finally {
      fs.writeFile(_file_path, _template, (err) => {
        if (err) throw err;
        console.log(`完成创建${_file_path}`);
        resolve()
      })
    }
  }
  if (download_url) {
    console.log(`开始下载${download_url}`)
    download(download_url, path.dirname(_file_path)).then(() => {
      console.log(`下载完成：${path.dirname(_file_path)}`)
      resolve()
    });
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
  for (let { name, type, files, file_template, download } of config_data) {
    if (type === "dir") {
      await _createDirPromise(`${parent}${path.sep}${name}`);
      files && await _create(files, `${parent}${path.sep}${name}`);
    } else {
      await _createFilePromise(`${parent}${path.sep}${name}`, file_template, download);
    }
  }
};

(async function () {
  await _createDirPromise();
  let _path = name.split('/');
  for (let i = 0; i < _path.length; i++) {
    await _createDirPromise(_path.slice(0, i + 1).join('//'));
  }

  await _create(configs, name);
  console.log(`全部完成`);
})();