/**
 * title: server help to the file 
 * descripton: creaet a restfull api and this is helper file 
 * aouthor: Tuhin ali
 * date: 13, aug, 25
 */


// devepdencise
const http = require("http");
const url = require("url");
// stringDecoder is a class object 
const {StringDecoder} = require("string_decoder");
const { decode } = require("punycode");
const {notFoundFunction} = require("../routesFile/notFound");
const {usersHandler} = require('../routesFile/usersHandler');
const { parse } = require("path");
const lib = require('../lib/libery');
const {tokenFunction} = require("../routesFile/tokenhanlder");
// const environmentToExport  = require("../environment/environment");

// modules scoffolding
const helpFile = {};


// config file
helpFile.config = {
    port: 3000,
    secetkey: 'sdflkjsdkjfkljksdjf'
}



helpFile.serverHelper = () => {
    const server = http.createServer((req, res) => {
        const parseUrl = url.parse(req.url, true);
        const pathUrl = parseUrl.pathname;
        const trimmedPath = pathUrl.replace(/^\/+|\/+$/g,'');
        const queryStringObject = parseUrl.query;
        const headersStringObject = req.headers;
        const methods = req.method.toLowerCase();
        let pustData = '';

        const decoder = new StringDecoder('utf8');


        const routerObject = {
            users: usersHandler,
            token: tokenFunction,
        }

        const propreticesObject = {
            parseUrl, 
            pathUrl,
            trimmedPath,
            queryStringObject,
            headersStringObject,
            methods,
        }

        const chogenHandler = routerObject[trimmedPath] ? routerObject[trimmedPath] : notFoundFunction;
       


        req.on("data", (buffer) => {
            pustData += decoder.write(buffer);
            // console.log(pustData, "Hello sr");
            
        });

        req.on("end", () => {
            pustData += decoder.end();
            propreticesObject.body =  pustData;
            // console.log(pustData);


            chogenHandler(propreticesObject, (statsCode, string) => {
            statsCode = typeof(statsCode) === "number" ? statsCode : 200 ;
            string = typeof(string) === "object" ? string : {message: "some  probleam chogenHandler in ! "}
            // res.setHeader('Content-Type',"application/json");
            res.writeHead(statsCode);
            // res.write(pustData);
            res.end(string.message);
        });

        });
    
    }); 
    server.listen(helpFile.config.port);
}


// exports
module.exports = helpFile;