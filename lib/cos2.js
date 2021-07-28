const assert = require('assert');
const COS = require('cos-nodejs-sdk-v5');

module.exports = function (app) {
  app.addSingleton('cos2', (config, app) => {
    const { SecretId, SecretKey } = config;

    assert(SecretId && SecretKey, '[egg-cos2] 请配置 SecretId、SecretKey');

    return new COS({
      SecretId,
      SecretKey,
    });
  });
};
