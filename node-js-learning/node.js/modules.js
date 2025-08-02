//  node.js modules items os, fs, path ,
//  what si this buffer value 
// frist i am learing to path modules  how to create path modules 
// this node.js core modules 
const path = require('path');
// console.log(path.basename('C:/my-file/Vue.js-class/node-js-learning/node.js/script.js'));
// console.log(__dirname);
// console.log(__filename);
// console.log(path.extname('input.txt'));
// console.log(path.join("C:/my-file/Vue.js-class/node-js-learning/node.js/script.js", 'docs',"input.txt"));
// console.log(path.resolve("input.txt"));
// console.log(path.parse("C:/my-file/Vue.js-class/node-js-learning/node.js/script.js"));
// console.log(path.format({
//     dir:"C:/my-file/Vue.js-class/node-js-learning/node.js/script.js",
//     base: "script.js"
// }));
// console.log(path.format());
// console.log(path.normalize("C:/my-file/Vue.js-class/node-js-learning/node.js/script.js"));


// fs modules sestem hwo to ceate fs modulse 
let fs = require("fs");
// how to write the file 
// fs.writeFileSync("base.css", "Hello css file");
// fs.writeFileSync("base.css", "HI css i am node.js");
// fs.writeFileSync("file.text", 'Hello file.text');
// let value = fs.readFileSync("file.text");
// console.log(value.toString());
// console.log("Hello");
// read file 
// fs.readFile("input.txt", (err, data) => {
//     console.log(data.toString());
// });
// fs.writeFile("index.html", "Hello file ", (err) => {} );
// fs.appendFile("index.html" , "Hello programmers", (error) => {});
// fs.unlink("index.html", () => {});

// fs.renameSync("output.html", "input.html", ) ;

// how to create a events modules 

//  this is a class Function 
// this is a events modules
const school = require("./schoo");
let classSchool = new school();

classSchool.on("callRannig", (value) => {
    console.log(value + " is rannig ");
});

// classSchool.work();
