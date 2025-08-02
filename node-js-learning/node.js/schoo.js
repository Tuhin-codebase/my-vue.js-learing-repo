// Hello i am school.js
let Eventemitter = require("events");
class school extends Eventemitter {
    work () {
        console.log("setTimeout is rannig ");
        setTimeout(() => {
            this.emit("callRannig", "yes");
        }, 2000)
    }
}

module.exports = school;