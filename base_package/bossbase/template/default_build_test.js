module.exports = (base_data) => `const path = require('path');
const webpack = require("webpack");
var webpack_config = require("../configs/webpack.config.test.js");

var compiler = webpack(webpack_config);

const ora = require('ora');

const spinner = ora('编译中...');
spinner.start();
compiler.run((err, stats) => {
    spinner.stop()
    if (err) throw err
    console.log(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }))
});
`;