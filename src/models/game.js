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
    console_name:{
        type: String,
        required: true,
        trim: true,
        index: true,
    }
});

schema.set('toJSON', {
    transform : (doc, result) => {
      return {
        id : result._id,
        name : result.name,
        console_id: result.console_id,
        console_name: result.console_name
      };
    }
});


module.exports = mongoose.model('Game', schema);