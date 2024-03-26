class InvalidFieldNameException extends Error {
    constructor() {
        super("Validation stopped because field was not found in object. Please. check ValidationSetup");
        this.name = "InvalidFieldNameException";
    }
}

class InvalidValidationSetup extends Error {
    constructor() {
        super("Validation stopped because your ValidationSetup file is corrupted. Please, check this file");
        this.name = "InvalidValidationSetup";
    }
}

class ValidationFunctionWasNotFound extends Error {
    constructor(fieldName, valName) {
        super(`Validation stopped because in class ${valName} for validating ${fieldName} was not found function validate(). Please, check ValidationSetup of class ${valName}`);
        this.name = "ValidationFunctionWasNotFound";
    }
}

module.exports = {InvalidFieldNameException, InvalidValidationSetup, ValidationFunctionWasNotFound};