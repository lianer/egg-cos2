# egg-cos2

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-cos2.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-cos2
[travis-image]: https://img.shields.io/travis/eggjs/egg-cos2.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-cos2
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-cos2.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-cos2?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-cos2.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-cos2
[snyk-image]: https://snyk.io/test/npm/egg-cos2/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-cos2
[download-image]: https://img.shields.io/npm/dm/egg-cos2.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-cos2

<!--
Description here.
-->

## Install

```bash
$ npm i egg-cos2 --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.cos = {
  enable: true,
  package: 'egg-cos2',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.cos = {
  Bucket: '',
  Region: '',
  SecretId: '',
  SecretKey: '',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

```js
this.app.cos2.putObject(/* ... */);
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
