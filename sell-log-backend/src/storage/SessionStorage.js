

exports.getSessionUserId = (ctx) => {
    return ctx.session.user._id;
}