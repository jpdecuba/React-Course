const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');

var http = require('http')
, https = require('https');

app.use(express.static(publicPath));

//app.listen(80, 443);

http.createServer(app).listen(80, () => {
    console.log('test');
})
https.createServer(app).listen(443)