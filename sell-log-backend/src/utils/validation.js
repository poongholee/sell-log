const { ObjectId } = require('mongoose').Types;

exports.checkObjectId = (ctx, next) => {
    const { id } = ctx.params;

    if(!ObjectId.isValid(id)) {
        ctx.status = 400;
        return;
    }

    return next();
}

exports.checkLogin = (ctx, next) => {
    // if(!ctx.session.user) {
    //     ctx.status = 401;
    //     return null;
    // }

    return next();
}