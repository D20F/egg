/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
    const config = exports = {};

    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true
        },
        domainWhiteList: [ '*' ], // 白名单
    };
    config.cors = {
        origin: '*', // 如果不写origin则会按照白名单中的域名允许跨域， * 代表允许所有的域名进行跨域请求
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1605858233950_8678';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
