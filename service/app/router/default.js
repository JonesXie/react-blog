"use strict";
module.exports = app => {
  const { router, controller } = app;
  router.get("/default/index", controller.default.index.index);
  router.get("/default/details/:id", controller.default.index.details);
  router.get("/default/navbar", controller.default.index.navbar);
  router.get("/default/list/:id", controller.default.index.list);
};
