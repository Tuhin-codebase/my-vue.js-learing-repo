/**
 * title: notFound.js file
 * descripton: this file show the your request is not found 
 * aouthor: Tuhin ali
 * date: 14, aug, 25
 */

// modules scoffolding 
const notFound = {};

// dependensices 

notFound.notFoundFunction = (propreticesObject, callback) => {
    callback(404, {
        message: "your request is not Found !"
    });
}


// modules export 
module.exports = notFound;
