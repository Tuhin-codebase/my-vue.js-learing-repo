/**
 * title: i am create a restfullapi 
 * descripton: creaet a restfull api and this is mane file 
 * aouthor: Tuhin ali
 * date: 13, aug, 25
 */


// dependensice
const {serverHelper} = require("./serverHelper/serverHelper");
// modules scoffoldign
const app = {};

app.createServer = serverHelper ;

app.createServer();