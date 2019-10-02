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

 class InvalidPayloadError extends BaseError {
     constructor(message = 'Invalid request payload', errors = [], status = 400) {
         super(message, status, errors);
     }
 }


 module.exports = InvalidPayloadError;

