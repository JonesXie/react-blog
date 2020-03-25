"use strict";
module.exports = app => {
  const { router, controller } = app;
  router.get("/default/index", controller.default.index.index);
};
