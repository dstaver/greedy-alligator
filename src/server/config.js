const conf = require('../../config/config.json');
const pkg = require('../../package.json');

const env = process.env.NODE_ENV || 'production';
const config = Object.assign({ env }, { pkg }, conf.common, conf[env]);

module.exports = config;
