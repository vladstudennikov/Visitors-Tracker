const adder = require("./addVisitor").VisitorAdder;
const deleter = require("./deleteVisitor").VisitorDeleter;
const settings = require("../settings").VisitorModel;
const Visitor = require(`${settings}`).Visitor;

class API{
    #add = new adder();
    #del = new deleter();
    #v = new Visitor();

    //below you can find set of methods implemented in API
    async deleteVisitorById(id) {
        return await this.#del.deleteVisitorById(id);
    }

    async addVisitor(name, surname, patronym, city, addr, passport) {
        return await this.#add.addVisitor(name, surname, patronym, city, addr, passport);
    }

    async getVisitors() { return await this.#v.getVisitors(); }
    async getById(id) { return await this.#v.getVisitorById(id); }
    async getByName(name) { return await this.#v.getVisitorsByName(name); }
    async getBySurname(surname) { return await this.#v.getVisitorsBySurname(surname); }
    async getByCity(city) { return await this.#v.getVisitorsByCity(city); }
}


module.exports = {API};