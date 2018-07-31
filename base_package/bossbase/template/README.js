module.exports = (base_data) => `# ${base_data.name}

## 构建工具
\`\`\`sh
npm install foundation-project -g
\`\`\`

## libs 工具方法抽象第三方库
\`\`\`url
https://www.npmjs.com/package/libs-js
\`\`\`

## 翻译
> 翻译维护后台 http://120.55.21.8:7891

\`\`\`sh
1、将后台导出文件拷贝至 /cli/translation/import
2、文件名：${base_data.name}.json //修改文件名需要修改相应代码
3、执行：npm run json_to_language_file
\`\`\`

## 启动
\`\`\`sh
单次编译
npm run build_dev

监听
npm run watch
\`\`\`

## nginx
\`\`\`nginx
#业务服务
server {
    listen  80 ;
    server_name dev.mcn.com;
    location / {
        root   /项目目录/dev;
        try_files $uri $uri/ /index.html;
        autoindex on;
        autoindex_exact_size off;
        autoindex_localtime on;
        add_header Access-Control-Allow-Origin *;

    }
    location ~ ^/(gif|jpg|jpeg|png|bmp|swf|javascript|js|css|svg|eot|woff|ttf)/{
        root /Applications/togetu/h5-mcn/dev;
    }
    location /service/ {
        rewrite /service/(.*) /$1 break;
        proxy_pass 服务端地址;
        proxy_set_header Host $proxy_host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    location ^~ /payments/callback {
        rewrite /(.*) /$1 break;
        proxy_pass 服务端地址;
        proxy_set_header Host $proxy_host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location ^~ /indirect/payments/callback {
        rewrite /(.*) /$1 break;
        proxy_pass 服务端地址;
        proxy_set_header Host $proxy_host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}

\`\`\`

## 目录
通过nginx指向 dev dist 修改环境

通过git 切换分支

环境指向dev之后，使用的客户端必须保证，不能太旧，未为es6做兼容

test dist 使用了babel-polyfill 叠片解决旧时代浏览器或客户端的兼容问题

### cli
编译用的代码
### main
业务逻辑代码
### dev
编译后的文件（未压缩），一般用于开发，联调
### test
编译后的文件（未压缩），一般用于测试
### dist
编译后的文件（压缩），线上，预演

`;