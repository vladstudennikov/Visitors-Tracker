const validation = require("./ValidatorClasses");

//here you can find names of objects that are needed to be validated
//with its fields and classes that validates each field

//if you have nested object A and its field B that should be validated
//then write "A.B" in field name 
module.exports = {
    "Visitor": {
        "passport.number": validation.PassportNumberValidator,
        "passport": validation.PassportValidation
    }
};