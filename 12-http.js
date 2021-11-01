const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('You are at the Homepage');
    }
    res.write('You are at the url: ' + req.url);
    res.end();
});

server.listen(5000);
