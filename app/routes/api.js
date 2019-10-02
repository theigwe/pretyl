/* jshint esversion: 9 */

const router = require('express').Router();

const { check } = require('express-validator');

const PretiffyController = require('../controllers/PretiffyController');

router.get(
	'/pretty/:ref',
	[
		check('ref')
			.isAlpha()
			.isLength({ min: 5, max: 15 }),
	],
	PretiffyController.getDirty
);

router.post(
	'/pretty',
	[
		check('url', 'Please enter a valid url.').isURL({
			allow_underscores: true,
		}),
	],
	PretiffyController.makePretty
);

module.exports = router;
