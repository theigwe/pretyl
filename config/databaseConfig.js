/* jshint esversion: 9 */

const db = {};
db.name = process.env.DB_NAME || '';
db.port = process.env.DB_PORT || 27017;
db.host = process.env.DB_HOST || 'localhost';
db.user = process.env.DB_USER || '';
db.pwd = process.env.DB_PWD || '';
db.uri =
	process.env.DB_URI ||
	`mongodb+srv://${db.user}:${db.pwd}@${db.host}:${db.host}/${db.name}?retryWrites=true&w=majority`;
db.options = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
};

module.exports = db;