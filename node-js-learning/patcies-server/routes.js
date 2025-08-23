/** 
 * title: router the file
 * description: router the all file and manage
 * aouthor: Tuhin islam
 * date: 7, aug ,2025
 */



// dependenices 
const {contact} = require("./routerHelperReqRes/contact");
const {user} = require('./routerHelperReqRes/userHandleer');
// modules scoffolding 
const router = {
    contact: contact,
    users: user,
}



// exports the file 
module.exports = router;

