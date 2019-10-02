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

class ServiceUnavailableError extends BaseError {
    constructor(message = 'Service is currently unavailable; retry later.', errors = [], status = 503) {
        super(message, status, errors);
    }
}


module.exports = ServiceUnavailableError;

