const err_msg = require("./error_messages");

module.exports = class VisitorInterface {
    constructor() {
        //Cannot create object if class VisitorInterface
        //We can work only with visitors
        if (this.constructor == VisitorInterface) {
            throw new Error(err_msg.cant_create_object);
        }
    }

    //set of methods that should contain Visitor Class
    async getVisitors() { throw new Error(err_msg.not_implemented); }
    async getVisitorById(id) { throw new Error(err_msg.not_implemented); }
    async getVisitorsByName(name) { throw new Error(err_msg.not_implemented); }
    async getVisitorsBySurname(surname) { throw new Error(err_msg.not_implemented); }
    async getVisitorsByCity(city) { throw new Error(err_msg.not_implemented); }
    async addVisitor(id, name, surname, patronym, city, addr, passport){ throw new Error(err_msg.not_implemented); }    
    async deleteVisitorById(id) { throw new Error(err_msg.not_implemented); }
}