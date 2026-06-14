const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

// Ruta para obtener reservas
router.get('/', reservaController.obtenerReservas);

// Ruta para crear una reserva nueva
router.post('/', reservaController.crearReserva);

// Ruta para actualizar el estado de una reserva existente
// El :id es una variable dinámica, no una carpeta
router.put('/:id/estado', reservaController.cambiarEstadoReserva);

module.exports = router;