/* jshint esversion: 9 */

// load envirnment variables
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');

const db = require('./app/core/Db');
const routes = require('./app/routes/');
const appConfig = require('./config/appConfig');

db.connect();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/', routes);

//Catch error
app.use(
	(req, res, next) => next(),
	(req, res) => res.status(404).json({
        status: 'ERROR',
        message: 'Resource is missing ',
        data: {},
    })
);

app.listen(appConfig.port, () => {
	console.log(`App is running on ${appConfig.port}`);
	console.log(`In ${process.env.NODE_ENV || 'development'} environment`);
});
