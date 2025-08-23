/**
 * title: envierment sestem file
 * description : all envierment handle file 
 * Aouthor: Tuhin ali
 * date: 9,aug, 2025
 */

// modules scoffolding 
const envierment = {};

envierment.staging = {
    port:3000,
    envName:"staging",
    secrctkey: "sfksdsdfsdj"
}

envierment.production = {
    port:5000,
    envName:"production",
    secrctkey: "jsdhfkjsjkdfh"
}

// determine which environment object
const currenenvironment = typeof process.env.NODE_ENV ? process.env.NODE_ENV : "staging";
//export coresponding evvironment object
const environmentToExports = typeof envierment[currenenvironment] === "object" ? envierment[currenenvironment] : envierment.staging; 

// exports file
module.exports = environmentToExports;
