const express = require('express');
const bodyParser = require('body-parser');
var helmet = require('helmet');
const app = express();

// ROUTES
const languagesRoute = require('./routes/languages');
const authRoute = require('./routes/auth');

//MIDDLEWARE
// Helmet  help protect the app from some well-known web vulnerabilities by setting HTTP headers appropriately
app.use(helmet());
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
// languages end point
app.use('/languages', languagesRoute);
// simple auth end point
app.use('/auth', authRoute);

// start lsitening on the port 80
app.listen(3000);


