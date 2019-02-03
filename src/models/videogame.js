'use strict';

const mogoose = require('mongoose');
const Schema = mogoose.Schema;
const Game = require('./game')

const schema = new Schema({

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

schema.set('toJSON', {
    transform : (doc, result) => {
      return {
        id : result._id,
        name : result.name,
        company: result.company
      };
    }
  });





module.exports = mogoose.model('Videogame', schema);