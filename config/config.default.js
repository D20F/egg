/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * 内置的配置
   * @type {Egg.EggAppConfig}
   **/
    const config = exports = {};

    // 开启file模式 接受文件
    config.multipart = {
        mode: 'file',
    };


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

  //使用cookie签名密钥，应更改为您自己的，以确保安全
  config.keys = appInfo.name + '_1605858233950_8678';

  // 在这里添加您的中间件配置
  config.middleware = [];

  // 在这里添加您的用户配置
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

