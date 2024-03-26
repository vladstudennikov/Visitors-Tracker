const settings = require("../settings").VisitorModel;
const Visitor = require(`${settings}`).Visitor;
const VisitorInterface = require("../models/VisitorInterface");

class ValidAPIClass {
    constructor() {
        if (!(Visitor.prototype instanceof VisitorInterface)) {
            throw new Error("Invalid visitor class - Visitor should be inherited from VisitorInterface class");
        }
    }
}

module.exports = {ValidAPIClass};