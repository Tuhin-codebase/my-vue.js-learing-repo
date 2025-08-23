/**
 * title: data red write file
 * description: data red write filecreate 
 * author: Tuhin ali
 * date: 9, aug, 2025
 */

// dependensices 
const fs = require("fs");
const path = require("path");


// modules scoffolding 
const lib = {};

// base dirctory fo the folder
lib.basedir = path.join(__dirname, '../.data/');

// write data to file
lib.create = function (dir, file, data, callback) {
    fs.open(lib.basedir+dir+ '/'+file+".json", 'wx', function (err, fileDescriptor) {
        // data convert to string 

        const stringData = JSON.stringify(data);
        if(!err && fileDescriptor ) {
            fs.writeFile(fileDescriptor, stringData, (err) => {
                if(!err) {
                    fs.close(fileDescriptor, (err) => {
                       if(!err) {
                        callback(false)
                       } else{
                        callback("Error closing new file");
                       }
                    });
                } else {
                    callback("file write some Error");
                }
            });
        } else {
            callback(err);
        }
    });
};
// red data from file
lib.readFunction = function (dir, file, callback) {
    fs.readFile(lib.basedir+dir+'/'+file+".json","utf8", (err, data) =>{
        callback(err,data);
    });
}

// updata file 
lib.update = function (dir, file, data , callback) {
    // open the file 
    fs.open(lib.basedir+dir+'/'+file+'.json', "r+", function (err1, fileDescriptor) {
        // convert data to string
        const stringData = JSON.stringify(data);
        if(!err1 && fileDescriptor){
            fs.ftruncate(fileDescriptor, (err2, fileDescriptor) => {
                if(!err2) {
                     fs.writeFile(fileDescriptor, stringData, (err) => {
                    if(!err) {
                    fs.close(fileDescriptor, (err) => {
                       if(!err) {
                        callback(false)
                       } else{
                        callback("Error closing new file");
                       }
                    });
                } else {
                    callback("file write some Error");
                }
            });
                } else {
                    callback("ftruncate some error !");
                }
            });
        }else {
            callback("open file some error!")
        };
    });
}

lib.delete = function (dir, file , callback) {
    // unlink file
    fs.unlink(lib.basedir+dir+ '/'+file+".json", (err) => {
        if(!err) {
            callback(false)
        } else {
            callback("some delete error");
        }
    })
}
// exports
module.exports = lib;