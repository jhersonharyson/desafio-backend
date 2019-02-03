'use strict';

const mogoose = require('mongoose');
const fieldsAliasPlugin = require('mongoose-aliasfield');
const Schema = mogoose.Schema;
const Game = require('./game')

const schema = new Schema({
    _id:{
        type: mogoose.Schema.ObjectId,
        alias: 'id'
    },
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true
    },
    company: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    games: [{
        type: Object,
    }]

});

schema.plugin(fieldsAliasPlugin);


module.exports = mogoose.model('Videogame', schema);