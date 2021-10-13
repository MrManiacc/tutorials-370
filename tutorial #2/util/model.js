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


/**
 * This exported model is user that will be used for authentication. This schema
 * defines the user that will be used to create/modify users in the database.
 * @type {*}
 */
module.exports.User = mongoose.model('User', mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30
    },
    email: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 200,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 1000
    }
}));