/**
 * Title : router setup the file
 * Aouthor: tuhin islam
 * descripton: server all router setup this file  
 * data: 12, 3, 2025
 */

// depdendeinces 
const {contactHandler} = require("./routerHelper/contact");
const routes = {
    contact: contactHandler ,
};

module.exports = routes;



