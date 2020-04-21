const fetch = require('node-fetch');
const assert = require('assert');

let dataPromise = '';
// eslint-disable-next-line no-undef
test('/login - must reutrn object and 200 OK ', async () => {
  const data = await fetch('http://127.0.0.1:7000/login', {
    method: 'post',
    headers: {
      Authorization: `Basic ${btoa('username:password')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'password=test',
  });
  dataPromise = await data.json();
  assert.equal(typeof (dataPromise), 'object');
  assert.equal(data.status, '200');
});
module.exports = async () => dataPromise;
