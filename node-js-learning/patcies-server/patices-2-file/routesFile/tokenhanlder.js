/**
 * title: tokenhandler.js
 * descripton: token realted aall handle file 
 * aouthor: Tuhin ali
 * date: 16, aug, 25
 */


// modules scoffolding 
const tokensHandler = {};


// dependensices 
const {shah}  = require('../utilites/utlites');
const lib = require('../lib/libery');
const {UnickIdFnc} = require("../utilites/utlites");

tokensHandler.tokenFunction = (requestPropretices, callback) => {
      const accpetMethod = ["get", "put", "post", "delete"];
      let userValudMethod = accpetMethod.indexOf(requestPropretices.methods) > -1 ? requestPropretices.methods: false;

      if(userValudMethod) {
            tokensHandler._token[requestPropretices.methods](requestPropretices, (err) => {
              callback(200, {
                message: err
              });
            } )
      } else {
        callback("your methods is not valud ! ");
      };
   

}

tokensHandler._token = {};

// token get function 
tokensHandler._token.get = (requestPropretices, callback) => {
    // this is get function 
    const uId = typeof(requestPropretices.queryStringObject.id) === "string" && requestPropretices.queryStringObject.id.length > 0 ? requestPropretices.queryStringObject.id : false;

    if(uId) {
        lib.readFunc("tokens", uId, (data) => {
            if(data) {
                console.log(data);
                callback("token read is sucessfully ");
            } else {
                callback("you token is not found !");
            }
        });
    } else {
        callback("your id is NOT FOUND !");
    }
    
    
}

// token put function 
tokensHandler._token.put = (requestPropretices, callback) => {
    // callback("yes this is put function !")
    const userBodyData = JSON.parse(requestPropretices.body);
    const userPhone = typeof(userBodyData.phone) === "string" && userBodyData.phone.length === 11 ? userBodyData.phone : false;

    const userId = typeof( userBodyData.id) === "string" && userBodyData.id.length > 0 ? userBodyData.id : false;
    
    if(userPhone && userId) {
        lib.readFunc("tokens", userId, (data) => {
            if(data) {
                let validExparedDate = data.expareDate <= Date.now() + 60 * 60 * 1000 ? true: false;
                let userUpDateValue = {
                    id: userId,
                    Uphone: userPhone,
                    expareDate: Date.now() + 60 * 60 * 1000,
                };
                if(validExparedDate) {
                    lib.upDateFunc('tokens', userId, userUpDateValue , (err) => {
                        if(!err) {
                            callback("user token is sucessfully update !");
                        } else {
                            callback("user update is server side peoblem !");
                        }
                    } );
                } else {
                    callback('your token date already expard!');
                }
            } else {
                callback(" there was a problem in server side !");
            }
        });
    } else {
        callback('some problem in your request !');
    }
}

// token post function 
tokensHandler._token.post = (requestPropretices, callback) => {
    // chenge vlaue to the json to js object 
    const userValidData = JSON.parse(requestPropretices.body);

    const phone = typeof(userValidData.phone) === "string" && userValidData.phone.trim().length === 11 ? userValidData.phone : false;

    const password = typeof(userValidData.password) === "string" && userValidData.password.trim().length > 0 ? userValidData.password : false;

    if(phone && password) {
        lib.readFunc('users', phone , (data) => {
            // let Udata = JSON.parse(data);
                if(data) {
                    let Upassword = shah(password) === data.password ? data.password : false;
                    let Uphone = phone === data.phone ? data.phone : false;
                    if(Upassword) {
                        let UnickId = UnickIdFnc(20);
                        let expareDate = Date.now() + 60 * 60 * 1000 ;
                        let userTokenObject = {
                                Uphone,
                                expareDate,
                                id: UnickId
                        };
                        lib.createUser("tokens",userTokenObject.id, userTokenObject, (err) => {
                            // console.log(err);
                            if(err) {
                                callback("token file create sucess !")
                            } else {
                                callback("user valid but file create is error !");
                            }
                         } )

                    } else {
                        callback('your data password and phone is not valid !');
                    }
            } else {
                callback("post function your data not find !");
            }

           
        });
    } else {
        callback("your are not valid user !")
    }

}


// token delete function 
tokensHandler._token.delete = (requestPropretices, callback) => {
   const userId = typeof(requestPropretices.queryStringObject.id) === "string" && requestPropretices.queryStringObject.id.length > 0 ? requestPropretices.queryStringObject.id : false;
   if(userId) {
    lib.delete("tokens", userId, (err) => {
        if(err) {
            callback("token user delete is sucessfully !");
        } else {
            callback("error is user token delete !");
        }
    });
   } else {
    callback("some error was in server side ! ");
   } 
};

tokensHandler._token.veryfy = (id, phone, callback) => {
    lib.readFunc('tokens', id, (data) => {
        if(data) {
            // let parseData = JSON.parse(data);
            if(data.Uphone === phone && data.expareDate > Date.now()) {
                callback(true);
            } else {
                callback(false)
            }
        } else {
            callback(false);
        }
    });
};


// exports
module.exports = tokensHandler;
