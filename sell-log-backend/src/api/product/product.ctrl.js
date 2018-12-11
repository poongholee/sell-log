const Product = require('models/Product');
const Joi = require('joi');

const schema = Joi.object().keys({
    name: Joi.string().required,
    description: Joi.string(),
    price: Joi.number().integer().min(0).required(),
    discountRate: Joi.number().integer().min(0),
    imageUrl: Joi.string(),
    createdAt: Joi.date()
});

exports.write = async (ctx) => {
    const result = Joi.validate(ctx.request.body, schema);

    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

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