const Router = require('koa-router');
const validation = require('utils/validation');
const orderCtrl = require('./order.ctrl');

const order = new Router();

order.get('/', orderCtrl.list);
order.get('/user', validation.checkLogin, validation.checkObjectId, orderCtrl.read);

module.exports = order;