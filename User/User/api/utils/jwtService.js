const jwt = require('jsonwebtoken');
const SECRET = '1213146';

module.exports = {
  issuer(payload, expiresIn){
    return jwt.sign(payload, SECRET, {expiresIn:'30 days'});
  },
  verify(token){
      return jwt.verify(token, SECRET);
  }
};