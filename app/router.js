'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
//   console.log(controller)
  router.get('/login_create', controller.login.create);
  router.get('/login_sign', controller.login.sign);
};
