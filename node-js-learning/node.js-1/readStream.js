// console.log("node.js stream and buffer data stacker  ");
// const fs = require("fs");
// const filePath = `${__dirname}/bigData.txt`;
// const ourStreamData = fs.createReadStream(filePath);// it get 3 parameter 

// // this for liseanner 
// ourStreamData.on("data", function (buffer) {
//     console.log(buffer);
// });
// console.log("Hello");

// const http  = require("http");
// const server = http.createServer((req, res) => {
//     if(req.url === "/"){
//         res.write(`
//             <!DOCTYPE html>
//              <html lang="en">
//              <head>
//                  <meta charset="UTF-8">
//                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                 <title>Document</title>
//              </head>
//             <body>
//                  <form action="/process" method="post">
//                     <input type="text" name="text" id="">
//                 <button type="submit" >submit</button>
//                 </form>
//             </body>
//             </html>
//             `);
//             res.end();
//     } else if(req.url === "/process") {
//         req.on("data", (chunk) => {
//             console.log(chunk.toString());
//         });
//         res.write("Thank you for submitting");
//         res.end();

//     } else {
//         res.write("this page is not found");
//         res.end();
//     };

// });

// server.listen(5000);

// pactise
const http = require("http");
const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write(
            `<html> 
                <head> <title> node.js paritice</title> </head>
                <boyd> 
                    <form action="/process" method="post">
                        <input type='text', name='text', id="">
                        <button type="submit">submit</button>
                    </form>
                </body>
            </html>`
        );
        res.end();
    } else if(req.url === "/process") {
        let body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on("end", () => {
            console.log("you data loding is finish");
            let dataBody = Buffer.concat(body).toString();
            console.log(dataBody);
        })
        res.write("Thank you for submitting ");
        res.end();
    } else {
        res.write("NOT FOUND");
        res.end();
    };
});
server.listen(4000);