/**
 * title: userhandler file
 * description : userhandler file handle to all file  
 * aouthor: tuhin ali
 * date: 11, aug, 2025
 */

const helper = require("../helpers/helper");
const data = require('../lib/data');
const {passHaah} = require("../helpers/utilies");

// modules scoffolding
const handler = {};


handler.user = (requestProperties, callback) => {
    // console.log(requestProperties);
    const accpetMethods = ['get', 'put', 'post', 'delete']; 
    if(accpetMethods.indexOf(requestProperties.methods) > -1 ) {
        handler._ulrHanlder[requestProperties.methods](requestProperties, callback)
     
    } else {
        callback(404)
    };

}

// modules scoffolding 
handler._ulrHanlder = {};

handler._ulrHanlder.get = (requestProperties, callback) => {
   callback(200);
}

handler._ulrHanlder.put = (requestProperties, callback) => {
   callback(200);
}

handler._ulrHanlder.post = (requestProperties, callback) => {

    const firstName = typeof( requestProperties.body.firstName) === "string" && requestProperties.body.firstName.trim().length > 0 ? requestProperties.body.firstName : false;

    const lastName = typeof(requestProperties.body.lastName) === "string" && requestProperties.body.lastName.trim().length > 0 ? requestProperties.body.lastName : false;

    const phone = typeof(requestProperties.body.phone) === "string" && requestProperties.body.phone.trim().length === 11 ? requestProperties.body.phone : false;

    const astAgreement = typeof(requestProperties.body.astAgreement) === "string" && requestProperties.body.astAgreement.trim().length > 0 ? requestProperties.body.astAgreement : false ;
    console.log(astAgreement)

    const password = typeof(requestProperties.body.password) === "string" && requestProperties.body.password.trim().length > 0 ? requestProperties.body.password : false;
    if(firstName && lastName && phone && astAgreement && password) {
        data.readFunction('user',phone , (err1, userData) => {
            if(err1){
                let  userObject = {
                    firstName, 
                    lastName,
                    phone, 
                    astAgreement, 
                    password: passHaah(password),
                }
                data.create("users", phone,userObject , (err2) => {
                    if(!err2){
                        callback(200, {
                            message : " user was create sucessfully !"
                        });
                    } else {
                        callback(500, {
                            error: "some user create problem in server side! "
                        })
                    };
                } );
                
            } else {
                callback(500, {
                    error: "some problem in server side!"
                });
            }
        });
    } else {
        callback(400, {
            error: "you have problem in your request !"
        });
    }
   callback(200, {
    message: "Hello sir"
   });
}  


handler._ulrHanlder.delete = (requestProperties, callback) => {
   callback(200);
}
module.exports = handler;