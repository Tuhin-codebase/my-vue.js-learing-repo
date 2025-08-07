/**
 * title: contact.js handle file
 * description: contact.js handle file
 * Aouthor: Tuhin islam
 * data: 22, 20, 2025
 */

// module scoffdoing
const handle = {};

handle.contactHandler = (requestProperties, callback) => {
    console.log(requestProperties.trimmePath);
   callback(300, {
    message: "this is contact.js file"
   });
}


module.exports = handle;