/**
 * title: bulid a restfull api patices 
 * description: create api patices parpase 
 * Aouthor: Tuhin islam
 * date: 7, agu, 2025
 */

//  modules scoffolding 
const app = {};


// dependenices
const http = require("http");
const {helperHandle} = require("./helpers/helper");
// config server 
app.config ={
    post: 8000,
}
// create server 
app.createServer = () => {
   const server =  http.createServer(app.hendleServer);
    server.listen(app.config.post);
}

app.hendleServer = helperHandle;

app.createServer();