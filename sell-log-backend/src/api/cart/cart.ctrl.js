const Cart = require('models/Cart');

exports.list = async (ctx) => {
    try {
        const carts = await Cart.find().exec();
        ctx.body = carts;
    } catch (e) {
        ctx.throw(e, 500);
    }
}

exports.read = async (ctx) => {
    const { userId } = ctx.params;

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