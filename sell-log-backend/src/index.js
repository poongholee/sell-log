require('dotenv').config();

const moongoose = require('mongoose');
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const {
    PORT: port = 4000,
    MONGO_URI: mongoURI
} = process.env;

moongoose.Promise = global.Promise;
moongoose.connect(mongoURI, { userNewUrlParser: true }).then(() => {
    console.log('connected to mongodb');
}).catch((e) => {
    console.error(e);
});

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('listening to port', port);
});