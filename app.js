const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// ROUTES
const languagesRoute = require('./routes/languages');
//MIDDLEWARE
app.use('/languages', languagesRoute);



// start lsitening on the port 80
app.listen(3000);


