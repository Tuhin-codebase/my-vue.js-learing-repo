/**
 * titel: helper handle file 
 * description: helper file create and hendle
 * Aouthor: Tuhin islam
 * date: 6, aug, 2025
 */

// modules scoffolsding
const helper = {};
// dependenices
const url = require("url");
const {StringDecoder} = require("string_decoder");
const {notfound} = require("../routerHelperReqRes/notFound");
const router = require("../routes");
const { stats } = require("fs");
const {parseJSON} = require('./utilies');


helper.helperHandle =  (req, res) => {
    const pathUrl = url.parse(req.url, true);
    const path = pathUrl.pathname;
    const trimmePath = path.replace(/^\/+|\/$/g ,"");
    const methods = req.method.toLowerCase();
    const headObject =  req.headers;
    const queryStringObject = pathUrl.query;
    const docoder = new StringDecoder("utf-8");
    let postData = '';
    const chocenHandler = router[trimmePath] ? router[trimmePath] : notfound;
    const requestProperties = {
        path, 
        trimmePath, 
        methods,
        headObject, 
        queryStringObject,
        postData
    }


    req.on("data", (buffer) => {
        postData += docoder.write(buffer);
    });
    req.on("end", () => {
        postData += docoder.end();
        requestProperties.body = parseJSON(postData);
        
        chocenHandler(requestProperties, (statusCode , paygold) => {
            statusCode = typeof(statusCode) === "number" ? statusCode : 404;
            paygold = typeof(paygold) === "object" ? paygold : {};

            const resPaygold = JSON.stringify(paygold);
            res.setHeader("Content-type", "application/json");
            res.writeHead(statusCode);
            res.end(resPaygold);
        }) ;
        
    });
  
    
}

// modules exports
module.exports = helper;