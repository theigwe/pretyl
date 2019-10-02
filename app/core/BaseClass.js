/* jshint esversion: 6 */

const autoBind = require('auto-bind');
const config = require('../../config/');

class BaseClass {
    constructor() {
        autoBind(this);
        this.config = config;
    }
    
}

module.exports = BaseClass;