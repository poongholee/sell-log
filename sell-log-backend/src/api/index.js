const Router = require('koa-router');
const user = require('./user');
const product = require('./product');
const order = require('./order');

const api = new Router();

api.use('/user', user.routes())
    .use('/product', product.routes())
    .use('/order', order.routes());

module.exports = api;