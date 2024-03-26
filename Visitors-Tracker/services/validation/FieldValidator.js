//this is a base class for any validation class

module.exports = class FieldValidator{
    async validate(value){
        throw new Error("validate() is not implemented");
    }
}