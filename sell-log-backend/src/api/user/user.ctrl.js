const User = require('models/User');

exports.signUp = async (ctx) => {
    const { email, password, name } = ctx.request.body;
    const user = new User({
        email: email,
        password: password,
        name: name
    });

    try {
        await user.save();

        ctx.body = user;
    } catch (e) {
        ctx.throw(e, 500);
    }
};

exports.login = async (ctx) => {
    const { email, password } = ctx.request.body;

    try {
        const user = await User.findOne({
            email: email,
            password: password
        }).exec();

        if(!user) {
            ctx.status = 404;
            return;
        }

        ctx.body = user;
    } catch (e) {
        ctx.throw(e, 500);
    }
}
