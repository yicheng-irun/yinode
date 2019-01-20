
const Assets = require('./assets/index.js');

const ModelAdmin = require('./model-admin/index.js');

const AdminSite = require('./admin-site/index.js');

// 这里后期默认接收一个express app，然后自动设置assets 路由
const createYiNode = function () {

    const yinode = {

        modelAdmin: ModelAdmin(),

        assets: Assets(),

        adminSite: AdminSite(),

    };

    yinode.modelAdmin.assets = yinode.assets;
    yinode.adminSite.assets = yinode.assets;
    yinode.modelAdmin.adminSite = yinode.adminSite;

    return yinode;
};

exports = module.exports = createYiNode;



exports.renderTypes = require('./render-types/index.js');

exports.filterTypes = require('./filter-types/index.js');

/**
 * 一个基础的实例
 */
exports.yinode = createYiNode();
