const Router = require('koa-router');
const validation = require('utils/validation');
const productCtrl = require('./product.ctrl');

const product = new Router();

product.get('/', productCtrl.list);
product.get('/:id', validation.checkObjectId, productCtrl.read);
product.post('/', productCtrl.write);

module.exports = product;