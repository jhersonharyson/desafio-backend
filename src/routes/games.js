'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controlles/games-controller')

router.get('/listar/videogames',controller.getVideogames)
router.get('/listar/games',controller.getGames)

router.post('/cadastro/videogame',controller.postVideogames)
router.post('/cadastro/game',controller.postGames)

router.get('/listar/game-videogame',controller.getGamesPorVideogames)



module.exports = router;