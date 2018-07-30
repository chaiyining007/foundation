module.exports = (base_data) => `require('libs-js/src/FormatDate')
const path = require('path');
const webpack = require("webpack");
var webpack_config = require("../configs/webpack.config.dev.js");

var compiler = webpack(webpack_config);

const is_watch = require('yargs').argv.watch;
const ora = require('ora');

if (is_watch) {
    let spinner = ora('编译中...');
    spinner.start();
    compiler.watch({
        ignored: /node_modules/
    }, (err, stats) => {
        spinner && spinner.succeed('开始监听');
        spinner = null;
        console.log(new Date().Format("yyyy-MM-dd HH:mm:ss"))
        console.log(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }))
    });
} else {
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
}
`;