const FieldValidator = require("./FieldValidator");

//Here you can find some classes for validating fields
//each class should be extended from FieldValidator to avoid errors

//class for validating PassportNumber of Visitor
class PassportNumberValidator extends FieldValidator{
    async validate(value) {
        return (Number.isInteger(parseInt(value)));
    }
}

//class for validating passport data of the visitor
class PassportValidation extends FieldValidator{
    async validate(value) {
        let tmp = Object.entries(value);
        if (tmp.length != 3) return false;
        return tmp[0][0] == 'number' && tmp[1][0] == 'issued_by' && tmp[2][0] == 'issued_on';
    }
}

//write here classes for validating that should be used
module.exports = {
    PassportNumberValidator,
    PassportValidation
};