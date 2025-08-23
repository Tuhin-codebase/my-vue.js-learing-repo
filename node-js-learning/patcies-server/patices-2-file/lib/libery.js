/**
 * title: libery.js file
 * descripton: this file handler the all function create, read, update , delete ext,
 * aouthor: Tuhin ali
 * date: 15, aug, 25
 */

// module scoffolding 
const lib = {};

// devepdensices 
const path = require("path");
const fs = require('fs');
const { BlockList } = require("net");
const { FILE } = require("dns");



lib.basePath = path.join(__dirname, '../.data/');

lib.createUser = (dir, file , data, callback) => {
    fs.open(lib.basePath+dir+'/'+file+".json","wx", (err1, fd) => {
        // cheange data value to jsonData
        const stringData = JSON.stringify(data);
        if(!err1 && fd){
            fs.writeFile(fd, stringData, (err2) => {
                if(!err2 ){
                    fs.close(fd, (err3) => {
                        if(!err3){
                            callback("user create is sucessfully !")
                        } else {
                            callback("error in close the file ! ");
                        }
                    });
                } else {
                    callback("error in file write in !");
                }
            });
        } else {
           callback("error in open the file !");
        }
    });
}

lib.readFunc = (dir, file, callback) => {
    fs.readFile(lib.basePath+dir+"/"+file+".json", "utf-8", (err1, data) => {
        if(!err1 && data){
            let  userData = JSON.parse(data);
            callback(userData);
        } else {
            callback( "error in readfile ! ");
        }
    });
}

lib.upDateFunc = (dir, file , data , callback) => {
    fs.open(lib.basePath+dir+'/'+file+".json", 'r+', (err1, fileDescriptor)  => {
        if(!err1 && fileDescriptor) {
            // chenge to data in jsonData
            const stringData = JSON.stringify(data);

            //truncated the file 
            fs.ftruncate(fileDescriptor, (err2) => {
                if(!err2){
                    fs.writeFile(fileDescriptor, stringData, (err3) => {
                        if(!err3 ) {
                            fs.close(fileDescriptor, (err4) => {
                                if(!err4) {
                                    callback(false);
                                } else {
                                    callback( "some error in close file !");
                                };
                            } );
                        } else {
                           callback("some probleam in writing file ! ");
                        }
                    });
                } else {
                   callback("soem problem in truncating file !");
                }
            });
        } else {
            callback( "this error in open the file ! ");
        }
    });
}


lib.delete = (dir, file, callback) => {
    fs.unlink(lib.basePath+dir+'/'+file+".json", (err1) => {        
        if(!err1) {
            callback("file delete is sucessfully !");
        } else {
          callback("some probleam in unlink file !");
        };
    });
}
// export 
module.exports = lib ;