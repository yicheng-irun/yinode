const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const yinode = require('../../index.js').yinode;

const app = express();

var logger = require('morgan');
app.use(logger('dev'));
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, './public')));
app.use('/', express.static(path.resolve(__dirname, '../static/dist')));

// 解析 application/json
app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * 设置yinode的静态资源
 */
app.use('/yinode-assets', yinode.assets.router);
yinode.assets.setPath('/yinode-assets');



module.exports = app;
