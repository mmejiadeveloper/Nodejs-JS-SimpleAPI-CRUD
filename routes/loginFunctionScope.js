const jwt = require('jsonwebtoken');

const actionsSet = {
  loginAndGenerateKey(req = '', res = '') {
    if (req.body.password === 'test') {
      const opts = {};
      opts.expiresIn = 600; // token expires in 2min
      opts.issuer = 'accounts.examplesoft.com';
      opts.audience = 'yoursite.net';
      const secret = 'SECRET_KEY'; // normally stored in process.env.secret
      const token = jwt.sign({ email: 'test' }, secret, opts);
      res.json({ message: 'ok', token });
      return { message: 'ok', token };
    }
    res.status(401).json({ message: 'passwords did not match' });
    return { message: 'failed', token: 'no token due failure' };
  },
};

module.exports = actionsSet;
