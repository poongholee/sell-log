const Cart = require('models/Cart');
const Joi = require('joi');
const SessionStorage = require('storage/SessionStorage')

const schema = Joi.object().keys({
    userId: Joi.string().required(),
    productId: Joi.string().required()
});

exports.write = async (ctx) => {
    const result = Joi.validate(ctx.request.body, schema);

    if (result.error) {

        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { userId, productId } = ctx.request.body;

    const cart = new Cart({
        userId: userId,
        productId: productId
    });

    try {
        await cart.save();
        ctx.body = cart;
    } catch (e) {
        ctx.throw(e, 500);
    }
}

exports.list = async (ctx) => {
    try {
        const carts = await Cart.find().exec();
        ctx.body = carts;
    } catch (e) {
        ctx.throw(e, 500);
    }
}

exports.read = async (ctx) => {
    const userId = SessionStorage.getSessionUserId(ctx);

    try {
        const cart = await Cart.find({ userId: userId }).exec();

        if (!cart) {
            ctx.status = 404;
            return;
        }

        ctx.body = cart;
    } catch (e) {
        ctx.throw(e, 500);
    }
}

