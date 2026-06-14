const express = require('express');
const router = express.Router();
const servicioController = require('../controllers/servicioController');

// Ruta para obtener todos los servicios (GET)
router.get('/', servicioController.obtenerServicios);

// Ruta para crear un nuevo servicio (POST)
router.post('/', servicioController.crearServicio);

module.exports = router;