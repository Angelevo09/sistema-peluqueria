const db = require('../config/db');

const Empleado = {
    obtenerTodos: async () => {
        const [rows] = await db.query('SELECT * FROM Empleados');
        return rows;
    },
    crear: async (nuevoEmpleado) => {
        const { nombre, especialidad, telefono } = nuevoEmpleado;
        const [result] = await db.query(
            'INSERT INTO Empleados (nombre, especialidad, telefono) VALUES (?, ?, ?)',
            [nombre, especialidad, telefono]
        );
        return result.insertId;
    }
};

module.exports = Empleado;