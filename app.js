const express = require('express');
const app = express();
const port = 3000;



//serve static files from www folder inside my project.
app.use('/', express.static('www'));
var route = require('./routes/testappRoute')

//create a route
app.use('/', route);

//listen to any incoming network requests on port 3000
app.listen(port, () => {
    console.log(`Example app listening at http://127.0.0.1:${port}`)
});


