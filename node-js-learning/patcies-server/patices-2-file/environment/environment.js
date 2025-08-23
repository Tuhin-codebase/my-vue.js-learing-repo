/**
 * title: environment help to the serverFile 
 * descripton: creaet a restfull api and this is server file 
 * aouthor: Tuhin ali
 * date: 13, aug, 25
 */


const environments = {};

environments.staging = {
    port: 9000,
    envName: "staging"
}

environments.production = {
    port: 6000,
    envName: "production"
}

const currentEnvironment = typeof(process.env.NODE_ENV) === "number" ? process.env.NODE_ENV : {port: 7000, envName: "problem the enviromnet variable"};

// check the environmet 
const environmentToExport = typeof(environments[currentEnvironment]) === "object"  ? environments[currentEnvironment] : environments.staging ;

module.exports = environmentToExport;