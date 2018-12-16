const User = require('models/User');

const signUpValidateCheck = ((password) => {
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

    const result = signUpValidateCheck(password);

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

        if (!user || !user.validateHash(password)) {
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

exports.remove = async (ctx) => {
    const { _id } = ctx.session.user._id;
    try {
        const user = User.findOne({ _id: _id }).exec();

        if (!user) {
            ctx.status = 400;
            ctx.body = {
                error: 'User does not exists'
            }

            return;
        }

        await User.remove({ _id: _id }).exec();

        ctx.session = null;
        ctx.status = 200;
        ctx.body = {
            success: true,
            message: "User is removed"
        }
    } catch (e) {
        ctx.throw(e, 500);
    }
}

exports.logout = (ctx) => {
    ctx.session = null;
    ctx.status = 204;
}