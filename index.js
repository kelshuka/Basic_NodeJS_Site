
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    if(req.url == "/home" || req.url == "/"){
        var readStream = fs.createReadStream("index.html");
    } else if (req.url == "/about"){
        var readStream = fs.createReadStream("about.html");
    } else if (req.url == "/contact-me"){
        var readStream = fs.createReadStream("contact-me.html");
    }

    else {
        var readStream = fs.createReadStream("404.html");
    }
    
    readStream.pipe(res);   
}).listen(8080);
