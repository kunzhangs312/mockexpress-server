# 本程序是基于nodejs+express+mockjs编写的一个伪造后台数据的小服务器。

---

## 使用方法：
下载依赖包
```
npm install	
```

启动服务
```
node service.js
```

配置自己的伪数据
在resource目录下，创建一个与前端html页面名称相同的js文件：如index.js，并输入下面内容：
```
let Mock = require('mockjs');        //引入mock模块

var user = Mock.mock({
	"status": 200,
    "data|1-9": [{
	 	"id|+1": 1,
        "name|5-8": /[a-zA-Z]/,
        "password|0-500": 20
    }]
})

var group = Mock.mock({
	"status": 200,
    "data|1-9": [{
	 	"id|+1": 1,
        "name|5-8": /[a-zA-Z]/,
        "group|0-500": 20
    }]
})
```

其中变量名称可以自定义，user和group的内容是Mock自动生成的，具体可以查看Mock的官方教程。

完成user和group变量的定义后，需要定义一个方法将这两个变量返回，利于后面将变量导出模块。这里的allvars可以自定义。
```
var allvars = function () {
  return {
      "user": user,
      "group": group,
  };
};
```

最后需要将上面allvars变量导出模块，这样在service.js中就可以使用了。
```
module.exports.allvars = allvars;
```

上面已经完成index.js文件的编写，在service.js中添加index到pages数组中，然后重启node service.js即可。
```
var pages = ['info', 'index']
```

在浏览器中输入localhost:port/index-user.action即可看到json数据。

url的定义规则为：/页面名-变量名.action

为了方便，localhost:port/会返回所有的url。

为了更方便，创建新页面文件时，可以直接复制resource/demo.js文件，进行重命名并修改其中内容。
