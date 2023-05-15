'use strict';
var _ = require('lodash');

module.exports = utils;

function utils() {
  console.log('lodash 的 _ 是：',_);
  _.forEach([1, 2,3], value => {
    console.log('测试lodash',value);
  });
  return 'Hello from utils';
}
