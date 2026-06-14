const db = require('../config/db');

const Servicio = {
    // Obtener todos los servicios
    obtenerTodos: async () => {
        const [rows] = await db.query('SELECT * FROM Servicios');
        return rows;
    },

    // Crear un nuevo servicio
    crear: async (nuevoServicio) => {
        const { nombre, descripcion, precio, duracion_min } = nuevoServicio;
        const [result] = await db.query(
            'INSERT INTO Servicios (nombre, descripcion, precio, duracion_min) VALUES (?, ?, ?, ?)',
            [nombre, descripcion, precio, duracion_min]
        );
        return result.insertId;
    }
};

module.exports = Servicio;