let Mock = require('mockjs');        //引入mock模块

var detail = Mock.mock({
    "status": 200,
    "data|1-9": [{
        "name|5-8": /[a-zA-Z]/,
        "id|+1": 1,
        "value|0-500": 20
    }]
});


var info = Mock.mock({
    "status": 200,
    "data:1-6": [{
        "name:10-20": /[a-zA-Z\d+]/,
        "id|+1": 1,
        "value|0-500": 20
    }]
});


var allvars = function () {
    return {
        "detail": detail,
        "info": info,
    };
};

module.exports.allvars = allvars;