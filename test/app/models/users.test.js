const assert = require('assert');
const usersTest = require('../../../models/users');

// eslint-disable-next-line no-undef
test('user model must to return object', () => {
  assert.equal(typeof (usersTest), 'function');
});
