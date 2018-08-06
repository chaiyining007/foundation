module.exports = (base_data) => `{
  "name": "${base_data.name}",
  "version": "1.0.0",
  "description": "A Hilo Demo",
  "author": "",
  "private": true,
  "scripts": {
    "dll": "webpack --config builder/dll.config.js && cnpm run dev",
    "analyz": "NODE_ENV=production npm_config_report=true npm run build",
    "build": "webpack --config builder/dll.config.js && node builder/build.js",
    "dev": "webpack-dev-server --inline --progress --config builder/webpack.dev.conf.js",
    "start": "npm run dev",
    "unit": "jest --config test/unit/jest.conf.js --coverage",
    "e2e": "node test/e2e/runner.js",
    "test": "npm run unit && npm run e2e",
    "lint": "eslint --ext .js,.vue src test/unit/specs test/e2e/specs",
    "build2": "node builder/build.js"
  },
  "dependencies": {
    "axios": "^0.18.0",
    "babel-polyfill": "^6.26.0",
    "fastclick": "^1.0.6",
    "iconfont": "^0.3.1",
    "jsonp": "^0.2.1",
    "less": "^3.0.1",
    "less-loader": "^4.1.0",
    "object-assign": "^4.1.1",
    "postcss-pxtorem": "^4.0.1",
    "vue": "^2.5.2",
    "vue-analytics": "^5.12.2",
    "vue-lazyload": "^1.2.6",
    "vue-resource": "^1.5.0",
    "vue-router": "^3.0.1",
    "vue-scroller": "^2.2.4",
    "vue-video-player": "^5.0.2"
  },
  "devDependencies": {
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-eslint": "^7.1.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-jest": "^21.0.2",
    "babel-loader": "^7.1.1",
    "babel-plugin-dynamic-import-node": "^1.2.0",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-es2015-modules-commonjs": "^6.26.0",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "babel-register": "^6.22.0",
    "chalk": "^2.0.1",
    "chromedriver": "^2.27.2",
    "copy-webpack-plugin": "^4.0.1",
    "cross-spawn": "^5.0.1",
    "css-loader": "^0.28.11",
    "eslint": "^3.19.0",
    "eslint-config-standard": "^10.2.1",
    "eslint-friendly-formatter": "^3.0.0",
    "eslint-loader": "^1.7.1",
    "eslint-plugin-html": "^3.0.0",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-node": "^5.2.0",
    "eslint-plugin-promise": "^3.4.0",
    "eslint-plugin-standard": "^3.0.1",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^1.1.4",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "html-webpack-plugin": "^2.30.1",
    "jest": "^21.2.0",
    "jest-serializer-vue": "^0.3.0",
    "nightwatch": "^0.9.12",
    "node-notifier": "^5.1.2",
    "node-vibrant": "^3.0.0",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "ora": "^1.2.0",
    "portfinder": "^1.0.13",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.8",
    "pug": "^2.0.3",
    "rimraf": "^2.6.0",
    "selenium-server": "^3.0.1",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "style-loader": "^0.20.3",
    "stylus-loader": "^3.0.2",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "url-loader": "^0.5.8",
    "vue-jest": "^1.0.2",
    "vue-loader": "^13.3.0",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.5.2",
    "vue-waterfall-easy": "^1.0.8",
    "vuerify": "^0.4.0",
    "vuex": "^3.0.1",
    "webpack": "^3.6.0",
    "webpack-bundle-analyzer": "^2.9.0",
    "webpack-dev-server": "^2.9.1",
    "webpack-merge": "^4.1.0",
    "webpack-parallel-uglify-plugin": "^1.0.2"
  },
  "engines": {
    "node": ">= 4.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}

`;