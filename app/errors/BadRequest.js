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

class BadRequestError extends BaseError {
    constructor(message = 'Request is invalid.', errors = [], status = 400) {
        super(message, status, errors);
    }
}


module.exports = BadRequestError;