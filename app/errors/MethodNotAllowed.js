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

class MethodNotAllowed extends BaseError {
    constructor(message = 'Request method is not allowed on this resource.', errors = [], status = 405) {
        super(message, status, errors);
    }
}


module.exports = MethodNotAllowed;