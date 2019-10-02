/* jshint esversion: 9 */

const mongoose = require('mongoose');
const BaseClass = require('./BaseClass');

class Db extends BaseClass {
	constructor(props) {
		super(props);
		this.uri = this.config.database.uri;
		this.options = this.config.database.options;
	}

	static connect() {
		let self = new this();
		mongoose.connect(self.uri, self.options)
            .then( () => {			
				console.log('Database connection successfull.');
			})
            .catch ( err => {
				console.log(err.message) ;
			});
	}
}

module.exports = Db;
