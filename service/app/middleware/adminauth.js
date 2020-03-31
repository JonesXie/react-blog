"use strict";
module.exports = () => {
  return async function adminauth(ctx, next) {
    // ctx.session 在config.default.js中设置可以跨域共享
    if (ctx.session.openId) {
      await next();
    } else {
      ctx.body = { data: "你尚未登录" };
    }
  };
};
