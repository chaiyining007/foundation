module.exports = (base_data) => {
  const app = '`${project_dir}/main/main.js`';
  const path = '`${project_dir}/dist`';
  return `const path = require("path");
const project_dir = path.resolve(__dirname, "../..");
const merge = require("webpack-merge");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const config = merge(require("./webpack.config.base.js"), {
    entry: {
        'app': ['babel-polyfill', ${app}]
    },
    output: {
        filename: '[name].js?h=[hash]',
        path: ${path},
        publicPath: "/"
    },
});
config.plugins = [new UglifyJsPlugin({
    uglifyOptions: {
        compress: {
            warnings: false
        }
    },
    sourceMap: false,
    parallel: true
})].concat(config.plugins);
module.exports = config;
`
};