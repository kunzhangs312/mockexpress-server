let Mock = require('mockjs');        //引入mock模块

var warning = Mock.mock({
    "status": 200,
    "data|1-9": [{
        "name|5-8": /[a-zA-Z]/,
        "id|+1": 1,
        "value|0-500": 20
    }]
});

var info = Mock.mock({
    "status": 200,
    "data|1-9": [{
        "name|5-8": /[a-zA-Z]/,
        "id|+1": 1,
        "value|0-500": 20,
        "test1|1-10": "aa0987aa",
        "test2|2": "hello",
        "test3|1-10": 2,
        'test4|1-10.2-5': 0.11,
        "test5|1": true,
    }]
});


var info = Mock.mock({
    "status": 200,
    "data|1-9": [{
        "name|5-8": /[a-zA-Z]/,
        "id|+1": 1,
        "value|0-500": 20,
        "test1|1-10": "aa0987aa",
        "test2|2": "hello",
        "test3|1-10": 2,
        'test4|1-10.2-5': 0.11,
        "test5|1": true,
        "data2|1-5": [{
            "name|10-20": /[a-zA-Z]\d+/,
            "id|+1": 10,
            "value|0-100": 20,
            "value2|+1": [1,2,3,4]
        }],
        "data3":function () {
            return 5;
        }
    }]
});



var allvars = function () {
  return {
      "warning": warning,
      "info": info,
  };
};


// module.exports.allvars中的allvars是固定的，无法修改，因为在service.js中需要使用。
module.exports.allvars = allvars;