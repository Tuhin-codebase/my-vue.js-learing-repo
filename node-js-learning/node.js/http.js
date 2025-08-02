const http = require("http");

let server = http.createServer((req, res) => {
    if(req.url === "/") {;
    res.write("Hello programmers");
    res.end();
    } else if(req.ulr === '/ho') {
        res.write("this is a abouts page");
        res.end();
    } else {
        res.write("NOT FOUND");
        res.end();
    }
});

server.listen(3000);