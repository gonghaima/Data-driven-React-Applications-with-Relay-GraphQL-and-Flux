const getBabelRelayPlugin = require('babel-relay-plugin');

const schemaData = require('./data/schema.json').data;

module.exports = getBabelRelayPlugin(schemaData);