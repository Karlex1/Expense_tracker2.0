const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'Expense_tracker2.0',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;
