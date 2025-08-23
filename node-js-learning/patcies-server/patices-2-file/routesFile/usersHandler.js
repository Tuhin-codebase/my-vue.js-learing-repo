/**
 * title: userHandler.js file
 * descripton: this file menopulate the all clienside file  
 * aouthor: Tuhin ali
 * date: 14, aug, 25
 */


// modules scoffolding 
const hanlder = {};
const {routerHandlerFunction} = require('./routeDatahandle'); 
// devendensices 

hanlder.usersHandler = (propreticesObject, callback) => {
    // callback(200 , {
    //     message: "this is userhandler apge ! "
    // });
    routerHandlerFunction(propreticesObject , (error) => {
        callback(200,{
            message: error,
        });
    })
}


// export 
module.exports = hanlder;