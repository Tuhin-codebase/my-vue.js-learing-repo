// console.log("write stream file");
// power of write stream function in node.js 
// const fs = require("fs");
// const streamValue = fs.createReadStream(`${__dirname}/bigData.txt`);
// let  writeStreamValue = fs.createWriteStream( `${__dirname}/output.txt`);

// streamValue.on("data", (chunk) => {
//     writeStreamValue.write(chunk);
// });

// let writeValue = fs.createWriteStream(__dirname + '/output.txt');
// let readValue = fs.createReadStream(__dirname + "/bigData.txt");
// readValue.pipe(writeValue);

const http = require("http");
const fs = require("fs");
const readValue = fs.createReadStream(__dirname + "/bigData.txt");
let server = http.createServer((req, res) => {
    readValue.pipe(res)
});

server.listen(7000);