module.exports = (base_data)=>
`<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title></title>
        <!--全局公共 开始-->
        <link rel="stylesheet" href="http://ott.ewanse.com/backstage_f2e/lib/css/iview.css">
        <link rel="stylesheet" href="http://ott.ewanse.com/backstage_f2e/main/view/public/ui-iconfont/css/iconfont.css">
        <!--全局公共 结束-->
        <!-- <link charset="utf-8" rel="stylesheet" href="http://ott.ewanse.com/java_backstage_f2e/main/${base_data.dir}/${base_data.name}/build/style.css"> -->
    </head>
    <body>
        <div id="page"></div>
        <script src="http://ott.ewanse.com/backstage_f2e/lib/js/vue.min.js"></script>
        <script src="http://ott.ewanse.com/backstage_f2e/lib/js/vue-i18n.min.js"></script>
        <script src="http://ott.ewanse.com/backstage_f2e/lib/js/iview.min.js"></script>
        <script src="http://ott.ewanse.com/backstage_f2e/lib/js/axios.min.js"></script>
        <!-- <script type="text/javascript" src="http://ott.ewanse.com/java_backstage_f2e/main/${base_data.dir}/${base_data.name}/build/app.js"></script>-->
    </body>
</html>`;