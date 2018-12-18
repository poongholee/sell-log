const Order = require('models/Order');

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