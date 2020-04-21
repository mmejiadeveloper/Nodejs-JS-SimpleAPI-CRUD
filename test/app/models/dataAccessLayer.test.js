const assert = require('assert');
const dataAccesLayer = require('../../../models/dataAccessLayer');

// eslint-disable-next-line no-undef
test('data layer access must to return object', () => {
  assert.equal(typeof (dataAccesLayer()), 'object');
});
