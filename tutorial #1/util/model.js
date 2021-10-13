const mongoose = require('mongoose');

/**
 * This describes the specific schema/definition for the
 * post that will be put into a collection in the database
 * @type {*}
 */
module.exports.Post = mongoose.model('Posts', mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}));