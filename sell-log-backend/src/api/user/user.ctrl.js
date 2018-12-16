const User = require('models/User');

const REGEX_USERNAME = /^[a-z0-9]+$/;

const signUpValidateCheck = ((name, password) => {
    if (password.length < 4 || typeof password !== "string") {
        return {
            status: 400,
            body: {
                error: "BAD PASSWORD"
            }
        }
    }

    return {
        status: 200
    }
});

exports.signUp = async (ctx) => {
    const { email, password, name } = ctx.request.body;

    const result = signUpValidateCheck(name, password);

    if (result.status !== 200) {
        ctx.status = result.status;
        ctx.body = result.body;

        return;
    }

    const user = new User({
        email: email,
        password: password,
        name: name
    });

    user.password = user.generateHash(user.password);

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
            email: email
        }).exec();

        if (!user || user.validateHash(password)) {
            ctx.status = 404;
            return;
        }

        ctx.session.user = {
            _id: user._id,
            name: user.name
        }

        ctx.body = user;
    } catch (e) {
        ctx.throw(e, 500);
    }
}
