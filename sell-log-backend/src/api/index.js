const Router = require('koa-router');
const user = require('./user');
const product = require('./product');

const api = new Router();

api.use('/user', user.routes());
api.use('/product', product.routes());

module.exports = api;