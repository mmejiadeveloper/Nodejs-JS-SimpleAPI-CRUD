const fetch = require('node-fetch');
const assert = require('assert');
const loginTest = require('../login.test');

const params = {
  id: 1,
};
const esc = encodeURIComponent;
const query = Object.keys(params).map((k) => `${esc(k)}=${esc(params[k])}`).join('&');

// eslint-disable-next-line no-undef
test('/APICustomers/findOne - must reutrn object and 200 OK ', async () => {
  const dataLoginTest = await loginTest();
  const token = dataLoginTest.token;
  const data = await fetch(`http://127.0.0.1:7000/APIcustomers/findOne?${query}`, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  const dataResult = await data.json();
  assert.equal(typeof (dataResult), 'object');
  assert.equal(data.status, '200');
});
