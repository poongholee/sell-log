const Router = require('koa-router');
const user = require('./user');
const product = require('./product');
const order = require('./order');
const cart = require("./cart");

const api = new Router();

api.use('/user', user.routes())
    .use('/product', product.routes())
    .use('/order', order.routes())
    .use('/cart', cart.routes());

module.exports = api;