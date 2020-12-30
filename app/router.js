'use strict';

/**
 * @param {Egg.Application} app - egg application
 */


module.exports = app => {
  const { router, controller } = app;



  
  /* -- 登陆 -------------------------------------------- */
  router.get('/login_create', controller.login.create);
  router.get('/login_sign', controller.login.sign);
  router.get('/mailbox', controller.login.mailbox);
  router.post('/upload', controller.login.upload);
  
  
  


  /* -- TEST -------------------------------------------- */
  router.post('/test/login', controller.test.login); 
  router.get('/test/info', controller.test.info); 


  router.get('/test/html', controller.test.htmls); 

};
