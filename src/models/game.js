'use strict';

const mogoose = require('mongoose');
const Schema = mogoose.Schema;

const schema = new Schema({
    
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true
    },
    console_id: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    console_nome:{
        type: String,
        required: true,
        trim: true,
        index: true,
    }
});

module.exports = mogoose.model('Game', schema);