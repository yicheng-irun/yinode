/**
 * 此文件用于webpack 跑 dev 时，启动后端js
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = require('./app')({
    isDevMode: true,
});

const port = process.env.NODE_SERVER_PORT || 9000;

app.listen(port, () => {
    console.log(`listen in ${port}`);
});