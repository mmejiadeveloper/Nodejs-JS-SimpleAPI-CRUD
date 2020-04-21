const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

const originalOpts = {};
originalOpts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
originalOpts.secretOrKey = 'SECRET_KEY'; // normally store this in process.env.secret
originalOpts.issuer = 'accounts.examplesoft.com';
originalOpts.audience = 'yoursite.net';

module.exports = new JwtStrategy(originalOpts, (jwtPayload, done) => {
  if (jwtPayload.email === 'test') {
    return done(null, true);
  }
  return done(null, false);
});
