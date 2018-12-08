const Router = require('koa-router');
const productCtrl = require('./product.ctrl');

const product = new Router();

product.get('/', productCtrl.list);
product.get('/:id', productCtrl.read);
product.post('/', productCtrl.write);

module.exports = product;