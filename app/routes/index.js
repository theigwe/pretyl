/* jshint esversion: 9 */

const router = require('express').Router();
const api = require('./api');

// router.get('/:ref', )

router.use('/api', api);

module.exports = router;