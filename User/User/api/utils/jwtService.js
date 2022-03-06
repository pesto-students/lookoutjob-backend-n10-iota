const jwt = require('jsonwebtoken');
const SECRET = '1213146';

module.exports = {
  issuer(payload, expiresIn){
    return jwt.sign(payload, SECRET, {expiresIn:'30 days'});
  },
  verify(token)
	{
        var x = token.split(" ")
    	console.log(token);
	console.log(x);
      return jwt.verify(x[1], SECRET);
  }
};
