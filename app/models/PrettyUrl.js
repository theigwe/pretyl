/* jshint esversion: 9 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const PrettyUrlSchema = new Schema({
    user_id: {type: ObjectId, required: false},
    url: {type: String, required: true},
    ref: {type: String, min: 5, max: 15, required: true},
    pretty: {type: String, required: true},
    created_at: {type: Date, default: Date.now}
});

PrettyUrlSchema.methods.toJSON = function () {
    let obj = this.toObject();
    delete obj.__v;
    delete obj._id;
    return obj;
};

module.exports = mongoose.model('PrettyUrls', PrettyUrlSchema);