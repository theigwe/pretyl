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

class NotFoundError extends BaseError {
    constructor(message = 'Requested resource not found.', errors = [], status = 404) {
        super(message, status, errors);
    }
}


module.exports = NotFoundError;