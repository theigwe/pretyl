/* jshint esversion: 9 */

const BaseClass = require('./BaseClass');
const ValidationError = require('../errors/ValidationError');
const {validationResult} = require('express-validator');
class Handler extends BaseClass {
    constructor(props) {
        super(props);
    }

    getValidationError(req) {
        return validationResult(req);
    }

    validationError (errors, status = 400) {
        return new ValidationError(errors, status);
    }
}

module.exports = Handler;
