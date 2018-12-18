const Router = require('koa-router');
const validation = require('utils/validation');
const cartCtrl = require('./cart.ctrl');

const cart = new Router();

cart.get('/', cartCtrl.list);
cart.get('/user', validation.checkLogin, cartCtrl.read);
cart.post('/', validation.checkLogin, cartCtrl.write);

module.exports = cart;