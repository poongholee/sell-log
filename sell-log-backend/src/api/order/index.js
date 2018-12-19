const Router = require('koa-router');
const validation = require('utils/validation');
const orderCtrl = require('./order.ctrl');

const order = new Router();

order.get('/', orderCtrl.list);
order.get('/user/:userId', validation.checkLogin, orderCtrl.read);
order.post('/', validation.checkLogin, orderCtrl.write);

module.exports = order;