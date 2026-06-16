const express = require('express');
const router = express.Router();
const servicioController = require('../controllers/servicioController');

// Ruta para obtener todos los servicios (GET)
router.get('/', servicioController.obtenerServicios);

// Ruta para crear un nuevo servicio (POST)
router.post('/', servicioController.crearServicio);
router.put('/:id', servicioController.actualizarServicio);
router.delete('/:id', servicioController.eliminarServicio);
module.exports = router;