const Router = require('koa-router');
const user = require('./user');

const api = new Router();

api.use('/user', user.routes());

module.exports = api;