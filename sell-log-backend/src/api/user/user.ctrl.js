const User = require('models/User');

exports.signUp = async (ctx) => {
    const { email, password, name } = ctx.request.body;
    const user = new User({
        email: email,
        password: password,
        name: name
    });

    try {
        await user.save(user);

        ctx.body = user;
    } catch (e) {
        ctx.throw(e, 500);
    }
};