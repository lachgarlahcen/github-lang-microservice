const express = require('express');
var config = require('../config');
var jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/', (req, res) => {

    var token = jwt.sign({ id: 'test' }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
    });
    // return the information including token as JSON
    res.status(200).send({ auth: true, token: token });
});
module.exports = router;