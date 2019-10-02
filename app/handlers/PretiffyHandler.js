/* jshint esversion: 9 */

const Handler = require('../core/Handler');
const randomstring = require('randomstring');
const urlJoin = require('url-join');

const PrettyUrlModel = require('../models/PrettyUrl');

const ServerError = require('../errors/ServerError');
const NotFoundError = require('../errors/NotFound');

class PretiffyHandler extends Handler {
    
    constructor(props) {
        super(props);
    }

    pretiffy(req, callback) {

        let reqErrors = this.getValidationError(req);

        if( ! reqErrors.isEmpty()) 
            return callback.onError(this.validationError(reqErrors));


        let prettyUrl = new PrettyUrlModel({
            url: req.body.url.trim(),
            ...PretiffyHandler.PRETTY,
        });

        prettyUrl.save()
            .then(doc => {
                return callback.onSuccess(doc, 'Successfully prettified');
            })
            .catch(err => {
                return callback.onError(new ServerError());
            });
    }

    unPretiffy(req, callback) {
        let reqErrors = this.getValidationError(req);

        if( ! reqErrors.isEmpty()) 
            return callback.onError(this.validationError(reqErrors));

        PrettyUrlModel.findOne({ref: req.params.ref})
            .then( doc => {
                if(! doc) {
                    return callback.onError(new NotFoundError());
                }
                return callback.onSuccess(doc);
            })
            .catch( err => {
                callback.onError(new ServerError());
            });

    }


    static get PRETTY () {
        let self = new this();

        let pretty = {};
        pretty.ref = randomstring.generate(self.config.pretiffy.config);
        pretty.pretty = urlJoin(self.config.pretiffy.host,  pretty.ref);
        
        return pretty;

    }
}

module.exports = PretiffyHandler;