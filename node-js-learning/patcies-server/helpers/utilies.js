/** 
 * title: uitiles.js the file
 * description: uitiles.js check the user jsondata
 * aouthor: Tuhin islam
 * date: 12, aug ,2025
 */




// dependencies  
const crypto = require("crypto");
const evvironment = require("./envierment");
const utilies = {};

// parse json string to object 
utilies.parseJSON = (jsonString) => {
    let output ;

    try{
        output = JSON.parse(jsonString);
    } catch {
        output = {};
    }
    return output;
}

utilies.passHaah = (string) => {
    if(typeof(string) === "string" && string.trim().length > 0){
        const shah = crypto
            .createHmac('sha256', evvironment.secrctkey )
            .update(string)
            .digest('hex')
        return shah;
    } else {
        return false;
    };
}
// exports file
module.exports = utilies;