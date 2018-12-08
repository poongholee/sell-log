const Router = require('koa-router');
const userCtrl = require('./user.ctrl');

const user = new Router();

user.post('/signUp', userCtrl.signUp);
user.post('/login', userCtrl.login);

module.exports = user;