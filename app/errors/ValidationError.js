/* jshint esversion: 9 */

/**
 * @extends BaseError
 * @param message
 * @param errors
 * @param status
 * 
 * @returns null
 */

const BaseError = require('../core/BaseError.js');

class ValidationError extends BaseError {
    constructor(errors = [], status = 400) {
        errors = this.formatErrors(errors);
        super('Request validation failed.', status, errors);
    }

    static formatErrors(errors) {
        return errors.errors.map( error => {
            return {
                [error.param]: {
                    value: error.value,
                    message: error.msg
                }
            };
        });
    }
}


module.exports = ValidationError;

 