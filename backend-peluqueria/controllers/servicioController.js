const Servicio = require('../models/servicioModel');

// Función para obtener los servicios
const obtenerServicios = async (req, res) => {
    try {
        const servicios = await Servicio.obtenerTodos();
        res.json(servicios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los servicios', detalle: error.message });
    }
};

// Función para crear un servicio
const crearServicio = async (req, res) => {
    try {
        const nuevoServicio = req.body; // Los datos vienen del body de la petición
        
        // Validación básica
        if (!nuevoServicio.nombre || !nuevoServicio.precio || !nuevoServicio.duracion_min) {
            return res.status(400).json({ error: 'Faltan campos obligatorios' });
        }

        const idInsertado = await Servicio.crear(nuevoServicio);
        res.status(201).json({ mensaje: 'Servicio creado con éxito', id_servicio: idInsertado });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el servicio', detalle: error.message });
    }
};

const actualizarServicio = async (req, res) => {
    try {
        const filas = await Servicio.actualizar(req.params.id, req.body);
        if (filas === 0) return res.status(404).json({ error: 'Servicio no encontrado' });
        res.json({ mensaje: 'Servicio actualizado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar servicio', detalle: error.message });
    }
};

const eliminarServicio = async (req, res) => {
    try {
        const filas = await Servicio.eliminar(req.params.id);
        if (filas === 0) return res.status(404).json({ error: 'Servicio no encontrado' });
        res.json({ mensaje: 'Servicio eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar servicio', detalle: error.message });
    }
};

module.exports = { obtenerServicios, crearServicio, actualizarServicio, eliminarServicio };