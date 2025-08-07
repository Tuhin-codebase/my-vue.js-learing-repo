// handle the server 


// dependencies 
// const { parse } = require("path");
const url = require("url");
const {StringDecoder} = require("string_decoder");
const router = require("../routes.js");
const {notfound} = require('../routerHelper/notFound.js');

// module scaffloding 
const heandle = {}


heandle.heandleReqRes =   (req, res) => {
    // // responsive handle
    // get the url and parse ti 
    const parseUrl = url.parse(req.url, true); 
    const path = parseUrl.pathname;
    // formate the url in fine waey use regolarExpreation
    const trimmePath = path.replace(/^\/+|\/$/g, ""); 
    const methods = req.method.toLowerCase();
    const queryStringObject  = parseUrl.query;
    const headerObject = req.headers;
    const decoder = new StringDecoder("utf8");
    let realData = '';
    const chocenHandler = router[trimmePath] ? router[trimmePath] : notfound;

    const requestProparites = {
        parseUrl, 
        path, 
        trimmePath, 
        methods, 
        queryStringObject, 
        headerObject,
    }
    chocenHandler(requestProparites, (statusCode, payload) => {
      statusCode = typeof(statusCode) === "number"  ? statusCode : 400;
      payload = typeof(payload) === "object" ? payload : {};


    //    return the funaly output
    let resPoylead  = JSON.stringify(payload);  
    res.writeHead(statusCode);
    res.end(resPoylead);

    });
    
    req.on("data", (buffer) => {
        realData += decoder.write(buffer);
    });
    
    req.on("end", () => {
        realData += decoder.end();
        res.end("Hello sir");
        console.log(realData);
    });


}

module.exports = heandle;