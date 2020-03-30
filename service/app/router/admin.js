"use strict";
module.exports = app => {
  const { router, controller } = app;
  const adminauth = app.middleware.adminauth();
  router.get("/admin/index", adminauth, controller.admin.index.index);
  router.post("/admin/checkLogin", adminauth, controller.admin.index.checkLogin);
};
