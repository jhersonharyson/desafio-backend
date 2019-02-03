'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true
    },
    console_id: {
        type: mongoose.Types.ObjectId,
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

module.exports = mongoose.model('Game', schema);