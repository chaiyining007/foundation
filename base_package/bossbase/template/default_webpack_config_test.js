module.exports = (base_data) => {
  const app = '`${project_dir}/main/main.js`';
  const path = '`${project_dir}/dist`';
  return `const path = require("path");
const project_dir = path.resolve(__dirname, "../..");
const merge = require("webpack-merge");
module.exports = merge(require("./webpack.config.base.js"), {
    entry: {
        'app': ['babel-polyfill', ${app}]
    },
    output: {
        filename: '[name].js?h=[hash]',
        path: ${path},
        publicPath: "/"
    },
});
`
};