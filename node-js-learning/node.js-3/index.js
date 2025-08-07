/** 
**Title: CREATE A RESTFULLAPI,
**description: cteate a rest pai in full row Node.js use in project 
**aouther: MD: Tuhin Ali 
**data: 5/7/2025 
*/

// base Object -app.object 
const app = {};

// configaretion object 
app.config = {
    port: 7000,
};

// import server modules 
const http = require("http");
const {heandleReqRes} = require("./helpers/handle");



// create http server 
app.createServer = () => {
    const server = http.createServer(app.handleReqRes, () => {
        console.log("Hello programmers");
    });
    server.listen(app.config.port); 
}


// handle server functon 
app.handleReqRes = heandleReqRes;
// strat the server
app.createServer();
