const {XMLParser} = require("fast-xml-parser");
const {readFileSync, writeFileSync} = require("fs");
const o2x = require("object-to-xml");
const error_msg = require("./error_messages");
const VisitorInterface = require("./VisitorInterface");
const dblink = require("../settings").dbLink;


class Visitor extends VisitorInterface {
    static #instance;
    static #visitorsList;
    static #currId;

    constructor() {
        super()
        if (Visitor.#instance) {
            return Visitor.#instance;
        }

        const xmlFile = readFileSync(dblink, "utf-8");
        const parser = new XMLParser();
        Visitor.#visitorsList = parser.parse(xmlFile);
        Visitor.#instance = this;
        
        let max = -1;
        for (let i of Visitor.#visitorsList.library_visitors.visitor) {
            if (i.id > max) { max = i.id; }
        }

        Visitor.#currId = max;
    }

    async getVisitors() {
        return Visitor.#visitorsList.library_visitors.visitor;
    }

    #filterUsers(filter, err_msg) {
        let visitors = Visitor.#visitorsList.library_visitors.visitor;
        let res = visitors.filter(filter);
        if (res.length === 0) throw new Error(err_msg);
        return (res.length === 1) ? res[0] : res;
    }

    async getVisitorById(id) {
        return this.#filterUsers(i => i.id === id, error_msg.id_was_not_found);
    }

    async getVisitorsByName(name) {
        return this.#filterUsers(i => i.name === name, error_msg.name_was_not_found);
    }

    async getVisitorsBySurname(surname) {
        return this.#filterUsers(i => i.surname === surname, error_msg.name_was_not_found);
    }

    async getVisitorsByCity(city) {
        return this.#filterUsers(i => i.city === city, error_msg.city_was_not_found)
    }

    #createVisitorObj(id, name, surname, patronym, city, addr, passport) {
        let params = ["id", "name", "surname", "patronym", "city", "addr", "passport"];
        let visitorToAdd = {}
        for (let i = 0; i < arguments.length; ++i) {
            visitorToAdd[params[i]] = arguments[i]
        }

        return visitorToAdd;
    }

    async addVisitor(name, surname, patronym, city, addr, passport) {
        Visitor.#currId++;
        let visitorToAdd = this.#createVisitorObj(Visitor.#currId, name, surname, patronym, city, addr, passport);

        Visitor.#visitorsList.library_visitors.visitor.push(visitorToAdd);
        writeFileSync(`${dblink}`, o2x(Visitor.#visitorsList), 'utf-8');
    }

    async deleteVisitorById(id) {
        let j = 0;
        for (let i of Visitor.#visitorsList.library_visitors.visitor) {
            if (i.id === id) {
                delete Visitor.#visitorsList.library_visitors.visitor[j];
                writeFileSync(`${dblink}`, o2x(Visitor.#visitorsList), 'utf-8');
                return;
            }
            ++j;
        }

        throw new Error(error_msg.id_was_not_found);
    }

    static getCurrentId() { let id = Visitor.#currId; return id; }
}

module.exports = {Visitor}