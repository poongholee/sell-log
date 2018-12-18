const Router = require('koa-router');
const validation = require('utils/validation');
const cartCtrl = require('./cart.ctrl');

const cart = new Router();

cart.get('/', cartCtrl.list);
cart.get('/:userId:', validation.checkObjectId, cartCtrl.read);

module.exports = cart;