const { ObjectId } = require('mongoose').Types;

exports.checkObjectId = (ctx, next) => {
    const { id } = ctx.params;

    if(!ObjectId.isValid(id)) {
        ctx.status = 400;
        return;
    }

    return next();
}