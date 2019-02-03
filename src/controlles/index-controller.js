'use strict'

exports.index = (req, res, next) => {
    res.status(200).send({
        title: 'Node Videgame API',
        version: '0.0.1'
    });
}