
class DB {

    clone() {
        
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this); 
    }
}

module.exports = DB;
