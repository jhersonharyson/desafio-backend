'use strict'
const mongoose = require('mongoose');

const modelGame = require('../models/game')
const modelVideogame = require('../models/videogame')
const Videogame = mongoose.model('Videogame');
const Game = mongoose.model('Game');


//LISTAR TODAS OS VIDEO-GAMES
exports.get = async (req, res, next) => {
    let videogame = []
    try {
        videogame = await Videogame.find({})
        res.status(200).send({ success: "true", data: videogame })
    } catch (error) { res.status(200).send({ message: error }) }
}

//CADASTRO DE VIDEOGAME
exports.post = async (req, res, next) => {
    try {
        const videogame = new Videogame();
        videogame.name = req.body.name
        videogame.company = req.body.company
        videogame.games = []
        await videogame.save();
        console.log(videogame);
        res.status(201).send({ success: "true", data: videogame });
    } catch (e) {
        res.status(201).send({ success: e });
    }
}

//CADASTRO DE GAMES
exports.post = async (req, res, next) => {
    try {
        const game = new Game();
        game.name = req.body.name
        game.console_name = req.body.console_name
        game.console_id = req.body.console_id
        await game.save();
        console.log(game);
        res.status(201).send({ success: "true", data: game });
    } catch (e) {
        res.status(201).send({ success: e });
    }
}