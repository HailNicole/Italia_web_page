//const { Router } = require('express');
const express = require('express')
const router = express.Router()
const comentarioController = require('../controllers/comentariosController')

router.get('/', (req, res) => res.send('Hello Word')) //Define las rutas 

/*router.get('/platos', platoController.obtenerPlatos);
router.post('/agregar-plato', platoController.crearPlato);*/

module.exports = router;