/**
 * title: contact found file
 * description : contact.js file 
 * aouthor: tuhin ali
 * date: 7, aug, 2025
 */

// modules scoffolding
const handler = {};


handler.contact = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        message: "this si contact  page all right",
    });
}

module.exports = handler;