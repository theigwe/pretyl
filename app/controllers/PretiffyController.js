/* jshint esversion: 9 */
const Controller = require('../core/Controller');
const PretiffyHandler = require('../handlers/PretiffyHandler');

class PretiffyController extends Controller {
    constructor(props) {
        super(props);
        this.handler  = new PretiffyHandler();
    }

    makePretty(req, res) {
        this.handler.pretiffy(req, this.response.getDefaultResponseHandler(res));
    }

    getDirty(req, res) {
        this.handler.unPretiffy(req, this.response.getDefaultResponseHandler(res));
    }
    
}

module.exports = new PretiffyController();