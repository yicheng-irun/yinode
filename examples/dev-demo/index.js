const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');


const yinode = require('../../index.js').yinode;

const app = express();

var logger = require('morgan');
app.use(logger('dev'));

mongoose.connect(`mongodb://x.xiwnn.com:27117/yinodeDev`, { // mongodb://ademouser:12345678@x.xiwnn.com:27117/yinodeDev
    useNewUrlParser: true
}).then(() => {
    // console.log('mongose conn', rst);
}).catch((e) => {
    console.error('mongoose error', e);
});


/**
 * 设置yinode的静态资源
 */
app.use('/yinode-assets', yinode.assets.router);
yinode.assets.setPath('/yinode-assets');


module.exports = app;
