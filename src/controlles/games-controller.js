'use strict'
const mongoose = require('mongoose');
// const model = require('../models/products')
const modelGame = require('../models/game')
const modelVideogame = require('../models/videogame')
const Videogame = mongoose.model('Videogame');

exports.get = async (req, res, next) => {
    let videogame = []
    try {
        await Videogame.find({}, 'name company', (err, video) => {
            video = video.map(function (p) {
                return p.toAliasedFieldsObject();
            });
            videogame = video
        })
        res.status(200).send({ success: "true", data: videogame })
    } catch (error) { res.status(200).send(error) }
}

exports.post = (req, res, next) => {

    try {
        const videogame = new Videogame();
        videogame.name = req.body.name
        videogame.company = req.body.company
        videogame.games = []
        videogame.save();
        console.log(videogame);
        res.status(201).send({ success: "true", data: videogame });
    } catch (e) {
        res.status(201).send({ success: "false" });
    }
}
