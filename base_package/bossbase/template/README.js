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
> 翻译维护后台 http://120.55.21.8:8888

\`\`\`sh
1、将后台导出文件拷贝至 /cli/translation/import
2、文件名：${base_data.name}.json //修改文件名需要修改相应代码
3、执行：npm run json_to_language_file
\`\`\`

## 开发启动
\`\`\`sh
npm run dev           // 默认热更 请求反向代理至   120.55.21.8:8991(日常环境)

npm run dev --nohot   // 不热更编译 请求反向代理至   120.55.21.8:8991(日常环境)

npm run dev --dev     // 请求反向代理至   120.55.21.8:8891(开发环境，容易跪)

npm run dev --pre     // 请求反向代理至   pre.boss.togetu.in(预发环境)
\`\`\`

## 部署编译
\`\`\`sh
npm run build           // 打包出线上文件至dist，引用g.togetu.in下的文件

npm run build --dev     // 打包出开发环境至dev，引用togetu-cn.oss-cn-beijing.aliyuncs.com下的文件，国内访问会快点

npm run build --test    // 打包出开发环境至test，引用togetu-cn.oss-cn-beijing.aliyuncs.com下的文件，国内访问会快点
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

## 配置
oss地址和反向代理地址的配置都是在：
/cli/config/index.js中

`;