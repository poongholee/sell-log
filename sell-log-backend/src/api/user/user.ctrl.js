const User = require('../../models/User');

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