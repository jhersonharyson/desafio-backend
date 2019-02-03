'use strict'
const mongoose = require('mongoose');

const modelGame = require('../models/game')
const modelVideogame = require('../models/videogame')
const Videogame = mongoose.model('Videogame');
const Game = mongoose.model('Game');


//LISTAR TODAS OS VIDEO-GAMES
exports.getVideogames = async (req, res, next) => {
    let videogame = []
    try {
        videogame = await Videogame.find({}).catch(error => res.status(400).send({ message: error }))
        res.status(200).send({ success: "true", data: videogame })
    } catch (error) { res.status(400).send({ success: "false" }) }
}

//CADASTRO DE VIDEOGAME
exports.postVideogames = async (req, res, next) => {
    try {
        const videogame = new Videogame();
        videogame.name = req.body.name
        videogame.company = req.body.company
        videogame.games = []
        await videogame.save()
        res.status(201).send({ success: "true", data: videogame });
    } catch (e) {
        res.status(400).send({ success: "false" });
    }
}

//LISTAR TODOS OS GAMES
exports.getGames = async (req, res, next) => {
    let game = []
    try {
        game = await Game.find({}).catch(error => res.status(400).send({ message: error }))
        res.status(200).send({ success: "true", data: game })
    } catch (error) { res.status(400).send({ success: "false" }) }
}


//CADASTRO DE GAMES
exports.postGames = async (req, res, next) => {
    try {
        const game = new Game();
        game.name = req.body.name
        game.console_name = req.body.console_name
        game.console_id = req.body.console_id
        await game.save();
        res.status(201).send({ success: "true", data: game });
    } catch (e) {
        res.status(400).send({ success: "false" });
    }
}

//LISTAR TODAS OS VIDEO-GAMES
exports.getGamesPorVideogames = (req, res, next) => {
    let game = []

    Game.aggregate([
        {
            $group: { _id: '$console_id', games: { $push: '$name' }, console_name: { $first: '$console_name' } }
        },
        {
            $project: { arr: true, _id: true, games: true, console_name: true }
        }])
        .then(x => {
            game = x
            res.status(200).send({ success: "true", data: game })
        }).catch(error => { res.status(400).send({ message: error }) })
}