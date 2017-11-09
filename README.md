# 自动化构建基础代码
## 使用
```sh
npm run create 项目名称 -- --[package_name=包名称，默认project]
```
## 目录
### 1、base_package _模板文件以及配置_
> config.json  基本数据结构
```js
// 
[
  {
    "name": "创建目录名",
    "type": "dir",//类型
    "files": [
      {
        "name": "创建文件名",
        "type": "file",//类型
        "file_template":"component"//默认代码模板
      }
    ]
  }
]
```
> template  用于渲染的模板库
```js
// vue 组件例子

module.exports = (base_data) =>
`/*功能级，组件 */
<template>
    <div class="my-component">
        my_component
    </div>
</template>
<script>
export default {
    data: function() {
        return {}
    }
};
</script>
<style lang="sass" scoped>
</style>
`;
```
### 2、print _输出_