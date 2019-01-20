const fs = require('fs');
const path = require('path');
const express = require('express');


const DIST_PATH = path.resolve(__dirname, '../../static/dist');

/**
 * 管理静态资源express路由, 以及静态资源路径
 */
function AdminSite () {
    this.path = '/';

    this.router = express.Router();

    this.manus = [
        [
            '管理中心',
            'http://www.baidu.com/'
        ]
    ];






    this.router.get('/', (req, res) => {
        let html = fs.readFile(path.join(DIST_PATH, 'index.html')).toString();
        html = html.replace('src="/assets/index.js"', `src="${this.assets}/assets/index.js"`);
        res.send();
    });

}

/**
 * 设置静态资源的路径
 * @param {String} publicPath
 */
AdminSite.prototype.setPath = function (publicPath) {
    this.path = publicPath;
};

function createAdminSite () {
    return new AdminSite();
}

module.exports = createAdminSite;
