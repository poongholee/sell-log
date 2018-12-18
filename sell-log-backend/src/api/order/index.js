const Router = require('koa-router');
const validation = require('utils/validation');
const orderCtrl = require('./order.ctrl');

const order = new Router();

order.get('/', orderCtrl.list);
order.get('/user', validation.checkLogin, validation.checkObjectId, orderCtrl.read);
order.post('/', validation.checkLogin, validation.checkObjectId, orderCtrl.write);

module.exports = order;