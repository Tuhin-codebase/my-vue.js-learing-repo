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
const environment = require("./helpers/envierment");
const data = require("./lib/data");
// config server 
app.config ={ 
    post: 8000,
}

// test writing a file 
// data.delete("test", "newfile", function (err) {
//     console.log(err);
// });

// create server 
app.createServer = () => {
   const server =  http.createServer(app.hendleServer);
    server.listen(environment.port);
    console.log(`this server listen this port ${environment.port}`);
}

app.hendleServer = helperHandle;

app.createServer();