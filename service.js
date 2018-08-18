let express = require('express');    //引入express模块
let exphbs  = require('express-handlebars');
// let body_parser = require('body-parser')

const port = '8090'                 // 监听的端口号
var url_arr = [];                   // 存放所有的URL

let app = express();                 //实例化express
// app.use(body_parser.urlencoded({extend: false}));

// 为app添加中间件处理跨域请求
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// 设置express使用的渲染引擎
app.engine('hbs', exphbs({
    layoutsDir: 'views',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');


/**
 * 配置test.action路由
 * @param  {[type]} req  [客户端发过来的请求所带数据]
 * @param  {[type]} res  [服务端的相应对象，可使用res.send返回数据，
 *                  res.json返回json数据，res.down返回下载文件]
 */
app.all('/test.action', function (req, res) {
    res.send('hello world');
});
url_arr.push({'name': '/test.action', 'url': '/test.action'})


// app.all('/mock.action', function (req, res) {
//     /**
//      * mockjs中属性名‘|’符号后面的属性为随机属性，数组对象后面的随机属性为随机数组数量，
//      * 正则表达式表示随机规则，+1代表自增
//      */
//     res.json(Mock.mock({
//         "status": 200,
//         "data|1-9": [{
//             "name|5-8": /[a-zA-Z]/,
//             "id|+1": 1,
//             "value|0-500": 20
//         }]
//     }));
// });

// 用户配置区
var pages = ['alart', 'user', ]


// 根据用户配置的页面自动生成路由
pages.forEach(function (page, index) {
    var path = `./resource/${page}`
    var pkg = require(path)
    var pkgVars = pkg.allvars()
    for (var key in pkgVars) {
        // url的命名规则：/页面名称+变量名称+.action
        url = '/' + page + '-' + key +'.action';
        url_arr.push({'name': url, 'url': `${url}`})
        console.log(url)
        app.get(url, function (req, res) {
            res.json(pkgVars[key]);
        })

        // app.post(url, function (req, res) {
        //     pkgVars[key] =
        //     res.send('POST request to homepage');
        // });
    }
})


// 输出所有的url
app.all('/', function (req, res) {
    res.render('index', {'urls': url_arr})
})


/**
 * 监听端口
 */
app.listen(port);
