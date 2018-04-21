const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

var http = require('http')
, https = require('https');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('wtf');
});

// http.createServer(app).listen(80, () => {
//     console.log('test');
// })
// https.createServer(app).listen(443)