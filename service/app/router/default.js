"use strict";
module.exports = app => {
  const { router, controller } = app;
  router.get("/default/index", controller.default.index.index);
  router.get("/default/details/:id", controller.default.index.details);
};
