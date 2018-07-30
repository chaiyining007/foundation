module.exports = (base_data) => {
  const main = '`${project_dir}/main/`';
  const components = '`${project_dir}/main/public/components`';
  const HtmlWebpackPlugin_template='`${project_dir}/main/template.html`';
  return `const path = require("path");
const webpack = require("webpack");
const css_loaders = require('./css.loaders.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const project_dir = path.resolve(__dirname, "../..");
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
  module: {
    rules: [{
      test: /\.vue$/,
      use: [
        {
          loader: 'vue-loader',
          options: Object.assign(css_loaders, {
            cssSourceMap: false,
            cacheBusting: false,
            transformToRequire: {
              video: ['src', 'poster'],
              source: 'src',
              img: 'src',
              image: 'xlink:href'
            }
          })
        },
        {
          loader: 'iview-loader',
          options: {
            prefix: false
          }
        }
      ]
    }, {
      test: /\.scss$/,
      loader: 'scss-loader',
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader']
      })
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 1000,
        name: 'img/[name].[hash:7].[ext]'
      }
    }, {
      test: /\.(woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader',
      options: {
        limit: 500,
        name: 'fonts/[name].[hash:7].[ext]'
      }
    }, {
      test: /\.(js|jsx)$/,
      exclude: function (e) {
        if (e.indexOf('libs-js') > -1) {
            return false
        }
        if (e.indexOf('node_modules') > -1) {
            return true
        }
        return false
    },
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-0'],
        plugins: [

        ]
      },
    }]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'main': ${main},
      'components': ${components}
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: 'vendor-async',
      children: true,
      minChunks: 3
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    //样式合并输出
    new ExtractTextPlugin({
      filename: 'style/[name].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: ${HtmlWebpackPlugin_template},
      inject: true,
      cache: true,
      time: +new Date(),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
    }),
    new webpack.LoaderOptionsPlugin({
      vue: {
        postcss: [
          require('autoprefixer')(),
        ]
      }
    })
  ]
}
  `
};