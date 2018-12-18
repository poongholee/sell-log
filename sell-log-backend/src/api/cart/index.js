const Router = require('koa-router');
const validation = require('utils/validation');
const cartCtrl = require('./cart.ctrl');

const cart = new Router();

cart.get('/', cartCtrl.list);
cart.get('/user', validation.checkLogin, validation.checkObjectId, cartCtrl.read);
cart.post('/', validation.checkLogin, validation.checkObjectId, cartCtrl.write);

module.exports = cart;