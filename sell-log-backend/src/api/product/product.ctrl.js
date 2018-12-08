const Product = require('models/Product');

exports.write = async (ctx) => {
    const { name, description, price, discountRate, imageUrl } = ctx.request.body;

    const product = new Product({
        name: name,
        description: description,
        price: price,
        discountRate: discountRate,
        imageUrl: imageUrl
    });

    try {
        await product.save();
        ctx.body = product;
    } catch (e) {
        ctx.throw(e, 500);
    }
}

exports.list = async (ctx) => {
    try {
        const products = await Product.find().exec();
        ctx.body = products;
    } catch (e) {
        ctx.throw(e, 500);
    }
}

exports.read = async (ctx) => {
    const { id } = ctx.params;

    try {
        const product = await Product.findById(id).exec();

        if (!product) {
            ctx.status = 404;
            return;
        }

        ctx.body = product;
    } catch (e) {
        ctx.throw(e, 500);
    }
}