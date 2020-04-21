const fetch = require('node-fetch');
const assert = require('assert');
const loginTest = require('../login.test');

const dataForm = { name: 'example111', email: 'xxx111', id: 38 };
// eslint-disable-next-line no-undef
test('/APICustomers/updateRow - must reutrn object and 200 OK ', async () => {
  const dataLoginTest = await loginTest();
  const token = dataLoginTest.token;
  const data = await fetch('http://127.0.0.1:7000/APIcustomers/updateRow', {
    method: 'put',
    body: JSON.stringify(dataForm),
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  const dataResult = await data.json();
  assert.equal(typeof (dataResult), 'object');
  assert.equal(data.status, '200');
});
