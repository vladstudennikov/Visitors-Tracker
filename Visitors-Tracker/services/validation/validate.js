const validate = require("./ValidationSetup");
const exceptions = require("./Exceptions");

//main function for validation objects
async function validation(type, obj) {
    let validationResult = []
    let validators = Object.entries(validate[type]);

    await Promise.all(validators.map(async (i) => {
        let field, valid;
        try{
            field = i[0];
            valid = new(i[1]);
        } catch (err) { throw new exceptions.InvalidValidationSetup(); }

        let f = await eval(`obj.${field}`);
        if (f === undefined) { throw new exceptions.InvalidFieldNameException(); }
        
        let res;
        try {
            res = await valid.validate(f);
        } catch(err) { throw new exceptions.ValidationFunctionWasNotFound(field, valid.constructor.name) }
        
        validationResult.push(res);
    }));

    return !(validationResult.includes(false));
}

module.exports = {validation};
