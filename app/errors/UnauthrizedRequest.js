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

class UnauthorizedError extends BaseError {
    constructor(message = 'Authentication failed.', errors = [], status = 401) {
        super(message, status, errors);
    }
}


module.exports = UnauthorizedError;

