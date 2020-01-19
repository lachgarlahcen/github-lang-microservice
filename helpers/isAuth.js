
var jwt = require('jsonwebtoken'); // used to create and verify tokens
var config = require('../config'); // get our config file

function isAuth(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.headers['x-access-token'];
    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    // verifies secret and checks exp
    jwt.verify(token, config.secret, function (err) {
        if (err)
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        next();
    });

}

module.exports = isAuth;