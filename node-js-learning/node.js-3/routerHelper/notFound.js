/**
 * title: notfound.js handle file
 * description: notfound.js handle file
 * Aouthor: Tuhin islam
 * data: 22, 20, 2025
 */

// module scoffdoing
const handle = {};

handle.notfound = (requestProperties, callback) => {
    callback(404, {
        message: "Your requested URl was not Found",
    });
}


module.exports = handle;