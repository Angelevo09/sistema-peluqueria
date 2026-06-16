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
    },
    actualizar: async (id, datos) => {
    const { nombre, descripcion, precio, duracion_min } = datos;
    const [result] = await db.query(
        'UPDATE Servicios SET nombre=?, descripcion=?, precio=?, duracion_min=? WHERE id_servicio=?',
        [nombre, descripcion, precio, duracion_min, id]
    );
    return result.affectedRows;
},
eliminar: async (id) => {
    const [result] = await db.query(
        'DELETE FROM Servicios WHERE id_servicio=?',
        [id]
    );
    return result.affectedRows;
}
};

module.exports = Servicio;