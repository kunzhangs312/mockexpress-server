let Mock = require('mockjs');        //引入mock模块

var xx1 = Mock.mock({
    "status": 200,
    "data|1-9": [{
        "name|5-8": /[a-zA-Z]/,
        "id|+1": 1,
        "value|0-500": 20
    }]
});


var xx2 = Mock.mock({
    "status": 200,
    "data:1-6": [{
        "name:10-20": /[a-zA-Z\d+]/,
        "id|+1": 1,
        "value|0-500": 20
    }]
});


var allvars = function () {
    return {
        "xx1": xx1,
        "xx2": xx2,
    };
};

module.exports.allvars = allvars;
