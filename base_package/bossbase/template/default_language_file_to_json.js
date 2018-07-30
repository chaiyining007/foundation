module.exports = (base_data) => `const path = require("path");
const fs = require("fs");
const gulp = require("gulp");
let all_keys = {};
gulp.src('main/**/language/*.json').on("data", function (file) {
    let _path = file.path.substr(file.path.indexOf('/main'));
    let _dirname = path.dirname(_path);
    let _type = path.basename(_path, ".json");
    if (_path === '/main/language/date_time_cn.json' || _path == '/main/language/date_time_en.json') {
        return false;
    }
    const _keys = JSON.parse(file.contents.toString());
    for (let i in _keys) {
        if (!all_keys[_dirname]) {
            all_keys[_dirname] = {
                en: {},
                cn: {}
            }
        }
        all_keys[_dirname][_type][i] = _keys[i]
    }
    // console.log('_keys',_keys);
}).on("end", function () {
    fs.writeFile('cli/translation/print/mcn.json', JSON.stringify(all_keys), 'utf8', (err) => {
        console.warn('ok');
    });
    // console.warn(all_keys);
});
`;