module.exports = class PassportData {
    number;
    issued_by;
    issued_on;

    constructor(num, iss_by, iss_on) {
        this.number = num;
        this.issued_by = iss_by;
        this.issued_on = iss_on;
    }

    getAsDict() {
        return {
            "number": this.number,
            "issued_by": this.issued_by,
            "issued_on": this.issued_on
        };
    }
}