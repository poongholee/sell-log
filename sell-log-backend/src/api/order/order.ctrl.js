const Order = require('models/Order');
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

    const order = new Order({
        userId: userId,
        productId: productId
    });

    try {
        await order.save();
        ctx.body = order;
    } catch (e) {
        ctx.throw(e, 500);
    }
}

exports.list = async (ctx) => {
    try {
        const orders = await Order.find().exec();
        ctx.body = orders;
    } catch (e) {
        ctx.throw(e, 500);
    }
}

exports.read = async (ctx) => {
    const userId = SessionStorage.getSessionUserId(ctx);

    try {
        const order = await Order.find({ userid: userId }).exec();

        if (!order) {
            ctx.status = 404;
            return;
        }

        ctx.body = order;
    } catch (e) {
        ctx.throw(e, 500);
    }
}