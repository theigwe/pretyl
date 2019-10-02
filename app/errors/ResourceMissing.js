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

class ResourceMissingError extends BaseError {
    constructor(message = 'Requested resource is missing or may have been moved.', errors = [], status = 410) {
        super(message, status, errors);
    }
}


module.exports = ResourceMissingError;