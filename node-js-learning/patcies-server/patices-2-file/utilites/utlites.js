/**
 * title: utlites.js file
 * descripton: this cheange data value ext ,
 * aouthor: Tuhin ali
 * date: 15, aug, 25
 */


// modules scoffoldign
const Udata = {};
const crypto = require("crypto");
const {config} = require("../serverHelper/serverHelper");
Udata.utliteData = (data, callback) => {
    try{
        let userData = JSON.stringify(data);
        
    } catch {
        callback(405, {
            message: "error utlites file in to jsonData create !"
        })
    }

    return userData;
}

Udata.shah = (string) => {
    if(typeof(string) === "string" && string.length > 0) {
        let shah = crypto.createHmac('sha256', 'jsdkfkdls')
        .update(string)
        .digest('hex');
        return shah;
    } else {
        console.log("soem problem becoase shah to work ! ");
    }

    
}

Udata.UnickIdFnc = (stringLength) => {
    let userLength = typeof(stringLength) === "number" && stringLength > 0 ? stringLength: false;
    let ramPasswordKey = "abcdefghijklmnopqrstuvwxyz1234567890";
    let randomPassword = '';
    if(userLength){
        for(let i = 1 ; i < userLength ; i++) {
            randomPassword += ramPasswordKey.charAt(Math.floor(Math.random() * ramPasswordKey.length)); 
        }
        return randomPassword;
    } else {
        return false ;
    }
};




//exports 
module.exports = Udata;