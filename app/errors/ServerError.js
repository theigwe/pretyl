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

class InternalServerError extends BaseError {
    constructor(message = 'Unexpected error has occured; please retry.', errors = [], status = 500) {
        super(message, status, errors);
    }
}


module.exports = InternalServerError;

