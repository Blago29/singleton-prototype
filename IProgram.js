const Logger = require('./singletone-prototype/Logger');

class IProgram {
    constructor() {
        this.logger = new Logger();
    }

    log(message) {
        this.logger.log(message);
    }
}

module.exports = IProgram;
