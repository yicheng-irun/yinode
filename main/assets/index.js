const path = require('path');
const express = require('express');

/**
 * 管理静态资源express路由, 以及静态资源路径
 */
function Assets () {
    this.path = '/';

    this.router = express.Router();
    this.router.use(express.static(path.resolve(__dirname, '../../static/dist')));
}

/**
 * 设置静态资源的路径
 * @param {String} publicPath
 */
Assets.prototype.setPath = function (publicPath) {
    this.path = publicPath;
};

function createAssets () {
    return new Assets();
}

module.exports = createAssets;
