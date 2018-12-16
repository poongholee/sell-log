require('dotenv').config();

const moongoose = require('mongoose');
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const serve = require('koa-static');

const api = require('api');

const {
    PORT: port = 4000,
    MONGO_URI: mongoURI,
    SECURED_KEY = '',
    SESSION = {
        key: 'koa:sess',
        maxAge: 86400000,
        autoCommit: true,
        overwrite: true,
        httpOnly: true,
        signed: true,
        rolling: false,
        renew: false,
    }
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

app.keys = [SECURED_KEY];

app.use(session(SESSION, app))
    .use(bodyParser())
    .use(serve('./public'))
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(port, () => {
    console.log('listening to port', port);
});