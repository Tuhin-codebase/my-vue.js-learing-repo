/**
 * title: routing all file to this file 
 * descripton: routing all file to this file 
 * aouthor: Tuhin ali
 * date: 15, aug, 25
 */


// module scoffolding 
const routerHandler = {};
const lib = require('../lib/libery');
const helpFile = require('../serverHelper/serverHelper');
const Udata = require('../utilites/utlites');
const verifyHandler = require('./tokenhanlder');

// dependensices 


routerHandler.routerHandlerFunction = (requestProPretise, callback) => {
    const methodsData = ['get', "put", "post", "delete"];
    if(methodsData.indexOf(requestProPretise.methods) > -1) {
        let accpetMehods = requestProPretise.methods ;
        routerHandler._user[requestProPretise.methods](requestProPretise, (err, stirng) => {
            callback(err);
            // console.log(stirng.message);
            // callback();
        });
    } else {
        callback("your request is NOT FOUND !");
    }
}


routerHandler._user = {}

routerHandler._user.post = (requestProPretise, callback) => {
    const  userValidateData = JSON.parse(requestProPretise.body);

    const firstName = typeof(userValidateData.firstName) === "string" && userValidateData.firstName.trim().length > 0 ? userValidateData.firstName : false;

    const lastName = typeof(userValidateData.lastName) === "string" && userValidateData.lastName.trim().length > 0 ? userValidateData.lastName : false;

    const phone = typeof(userValidateData.phone) === "string" && userValidateData.phone.trim().length === 11 ? userValidateData.phone : false;

    const password = typeof(userValidateData.password) === "string" && userValidateData.password.trim().length > 0 ? userValidateData.password : false;

    const tosAgreement = typeof(userValidateData.tosAgreement) === "string" && userValidateData.tosAgreement.trim().length > 0 ? userValidateData.tosAgreement : false;
    
    // console.log(firstName);
    const userData = {
        firstName, 
        lastName,
        phone,
        password: Udata.shah(password),
        tosAgreement,
    }
    if(firstName && lastName && password && phone && tosAgreement ) {
       
        lib.createUser('users', phone, userData, (error) => {
            callback(error);
        } );
    
    } else {
        callback('your data is not valid plasce give valid data ! ');
    }

}
routerHandler._user.get = (requestProPretise, callback) => {
    // console.log("get function ");
    let userValidateData = requestProPretise.queryStringObject;
    const phone = typeof(userValidateData.phone) === "string" && userValidateData.phone.trim().length === 11 ? userValidateData.phone : false;
    if(phone){
        // lookup the funciotn 
        // verify user 
        let token = typeof(requestProPretise.headersStringObject.token) === 'string' ? requestProPretise.headersStringObject.token : false;

        verifyHandler._token.veryfy(token, phone, (tokenValue) => {
            if(tokenValue) {
                
                lib.readFunc('users', phone, (data, err) => {
                    if(data) {
                        delete data.password;
                        console.log(data);
                        callback('get data')
                    } else {
                        callback('some  probleam in server side !',err);
                    }
             });

            } else {
                callback("some problem in server side !");
            }
        })
        
       
        
    
    } else {
        callback('your identtee is NOT FOUND ! ');
    };
}
routerHandler._user.put = (requestProPretise, callback) => {

    let userValidateData = JSON.parse(requestProPretise.body);
    const firstName = typeof(userValidateData.firstName) === "string" && userValidateData.firstName.trim().length > 0 ? userValidateData.firstName : false;

    const lastName = typeof(userValidateData.lastName) === "string" && userValidateData.lastName.trim().length > 0 ? userValidateData.lastName : false;

    const password = typeof(userValidateData.password) === "string" && userValidateData.password.trim().length > 0 ? userValidateData.password : false;

    const phone = typeof(userValidateData.phone) === "string" && userValidateData.phone.trim().length === 11 ? userValidateData.phone : false;

    if(phone) {
        // verify user 
        let token = typeof(requestProPretise.headersStringObject.token) === 'string' ? requestProPretise.headersStringObject.token : false;
        verifyHandler._token.veryfy(token, phone, (tokenValue) => {
            if(tokenValue) {
                 if(token) {
            lib.readFunc(token, phone, (data) => {
                if(firstName || lastName || password) {
            lib.readFunc("users", phone, ( data) => {
                if(data) {
                    if(firstName) {
                        data.firstName = firstName;
                    }

                    if(lastName) {
                        data.lastName = lastName;
                    }
                    if(password) {
                        data.password = Udata.shah(password);
                    }

                    // store the data file sestem 
                    lib.upDateFunc('users', phone , data, (err) => {
                        if(!err) {
                            callback("your data update is sucessfully !");
                        } else {
                            callback(404, {message: "error is update your data in ! "});
                        };
                    })
                } else {
                    callback( 404, {message: "some error in readfile ! "});
                }
            });
        } else {
            callback(404, {message: "your request not valud !"});
        }
            })
        } else {
            callback("some problem in server side !");
        }
            } else {
                callback("some problem in verify user ");
            }
        })
    } else {
      callback(404, {
        message: "your request is probleam ! "
      });
    } 
    
}
routerHandler._user.delete = (requestProPretise, callback) => {
    // console.log("delete function ");
    const  userValidateData = requestProPretise.queryStringObject;

    const phone = typeof(userValidateData.phone) === "string" && userValidateData.phone.trim().length === 11 ? userValidateData.phone : false;
    if(phone){
        // verify user 
         let token = typeof(requestProPretise.headersStringObject.token) === 'string' ? requestProPretise.headersStringObject.token : false;
        
         verifyHandler._token.veryfy(token, phone, (tokenValue) => {
            if(tokenValue) {
                 lib.readFunc('users', phone, (data) => {
           if(data) {
                    lib.delete("users", phone , (error) => {
                        if(error) {
                            callback("user delete is sucessfully !");
                        } else {
                            callback("user delete is error ! ");
                        }

                    });
                } else {
                    callback("error in readfile !");
                }
                })
            } else {
                callback("some problem in verify user !");
            }
         });
    } else {
        callback("error is delete file ! ");
    }

}

module.exports = routerHandler;


// all most done i work in api project row node.js 