# 自动化构建基础代码

## 安装
```sh
npm install foundation-project -g
```
## 使用
```sh
create 名称 --[package_name=包名称，默认bossbase]
```

## packageNames

1. project：项目(默认值)

2. component：vue组件

3. vue1：vue模板1

4. egg：egg3层模板：包含：controller，model，service

5. boss

6. bossbase

7. bbp // boss base page

## 配置
```sh
#超级小白走法
which create #/usr/local/bin/create
cd /usr/local/bin
ll -al | grep create #create -> ../lib/node_modules/foundation-project/bin/create.js
cd ../lib/node_modules

#老鸟走法
cd /usr/local/lib/node_modules

#找到  foundation-project  打开自己的编辑器编辑
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
      },
      {
        "name": "创建文件名",
        "type": "file",//类型
        "download":"下载地址"//支持下载
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