const settings = require("../settings").VisitorModel;
const Visitor = require(`${settings}`).Visitor;
const CheckVisitor = require("./checkVisitor").ValidAPIClass;

class VisitorDeleter extends CheckVisitor{
    #v = new Visitor();
    constructor() { super(); }

    deleteBiId(id) { 
        try {
            this.#v.deleteVisitorById(id)
        } 
        catch(err) {
            throw new Error("Cannot delete this visitor");
        }
     }
}

module.exports = {VisitorDeleter}