
class Logger {
    constructor() {
        if (!Logger.instance) {
            Logger.instance = this;
        }
        return Logger.instance;
    }

    log(message) {
  
        console.log(message);
    }
}

module.exports = Logger;
