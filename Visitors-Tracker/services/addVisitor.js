const settings = require("../settings");
const Visitor = require(`${settings.VisitorModel}`).Visitor;
const validate = require(`${settings.ValidationFunction}`).validation;
const CheckVisitor = require("./checkVisitor").ValidAPIClass;
const PassportData = require("./PassportData");


class VisitorAdder extends CheckVisitor {
    #visitor = new Visitor();

    constructor() { super(); }

    #createVisitorObj(id, name, surname, patronym, city, addr, passport) {
        let params = ["id", "name", "surname", "patronym", "city", "addr", "passport"];
        let visitorToAdd = {}
        for (let i = 0; i < arguments.length; ++i) {
            visitorToAdd[params[i]] = arguments[i]
        }

        return visitorToAdd;
    }

    async addVisitor(name, surname, patronym, city, addr, passport) {
        let toAdd = this.#createVisitorObj(Visitor.getCurrentId(), name, surname, patronym, city, addr, passport);
        if (await validate("Visitor", toAdd)) {
            this.#visitor.addVisitor(name, surname, patronym, city, addr, passport);
        }
        else {
            throw new Error("Can`t add object - validation was not passed");
        }
    }
}

module.exports = {VisitorAdder}

//let va = new VisitorAdder();
//let pd = new PassportData(123, "test", "test").getAsDict();
//va.addVisitor("test", "test", "test", "kyiv", "test", pd);