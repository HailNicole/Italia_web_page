//const { Router } = require('express');
const express = require('express')
const router = express.Router()
const notasController = require('../controllers/notasController')

router.get('/', (req, res) => res.send('Hello Word')) //Define las rutas 

router.post('/agregar-nota', notasController.agregarNota);

module.exports = router;