require('dotenv').config();

const moongoose = require('mongoose');
const User = require('../../models/User');

const {
    PORT: port = 4000,
    MONGO_URI: mongoURI
} = process.env;

let connection = null;

const connect = () => {
    if (connect && moongoose.connection.readyState === 1) return Promise.resolve(connection);
    return moongoose.connect(mongoURI).then(
        conn => {
            connection = conn;
            return connection;
        }
    );
};

exports.signUp = (ctx, next) => {
    ctx.callbackWaitsForEmptyEventLoop = false;
    console.log(ctx.request.body);
    const { email, password, name } = ctx.request.body;

    connect().then(
        () => {
            const user = new User({ email: email, password: password, name: name });
            user.save(async (err, user) => {
                if (err) { return next(err); }

                ctx.body = user;

                return next();
            });
        }
    );
};