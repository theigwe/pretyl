/* jshint esversion: 9 */

const Response = require('./Response');
const BaseClass = require('./BaseClass');

class Controller extends BaseClass {
    constructor(props) {
        super(props);
        this.response = Response;
    }
}

module.exports = Controller;