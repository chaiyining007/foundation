module.exports = (base_data) => {
  const path = '`${lang}.json`';
  return `const path = require("path");
const base_data = require('./import/bossbase.json');
const fs = require("fs");

let file_data = {};
for (let i in base_data) {
  let _path;
  for (let lang in base_data[i]) {
      _path = [i, ${path}].join(path.sep);
      _path = _path.substr(1, _path.length - 1);
      // file_data[_path] = base_data[i][lang];
      // if(_path == 'main/view/statistics/balance_change/language/cn.json'){
      fs.writeFile(_path, JSON.stringify(base_data[i][lang]), 'utf8', (err) => {
          !!err && console.log('err', err);
          !err && console.warn(_path + ' ok');
      });
      // }

  }
}
  `
};