/* jshint esversion: 9 */

const _ = require('lodash');

module.exports = {
    host: process.env.PRETIFFY_HOST,
    config: {
        length: _.random(5, 10),
        charset: 'alphabetic',
        capitalization: 'lowercase',
    }
};