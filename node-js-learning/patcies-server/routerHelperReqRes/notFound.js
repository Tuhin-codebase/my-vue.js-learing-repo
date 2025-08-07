/**
 * title: not found file
 * description : not found.js file 
 * aouthor: tuhin ali
 * date: 7, aug, 2025
 */

// modules scoffolding
const handler = {};


handler.notfound = (requestProperties, callback) => {
    callback(404, {
        message: "Your request URl is Not Found",
    });
}

module.exports = handler;