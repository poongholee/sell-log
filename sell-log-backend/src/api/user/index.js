const Router = require('koa-router');
const validation = require('utils/validation');
const userCtrl = require('./user.ctrl');

const user = new Router();

user.post('/signUp', userCtrl.signUp);
user.post('/login', userCtrl.login);
user.get('/logout', validation.checkLogin, userCtrl.logout);
user.delete('/remove', validation.checkLogin, userCtrl.remove);
user.put('/', userCtrl.update);

module.exports = user;