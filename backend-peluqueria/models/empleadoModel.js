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
    },
    actualizar: async (id, datos) => {
    const { nombre, especialidad, telefono, activo } = datos;
    const [result] = await db.query(
        'UPDATE Empleados SET nombre=?, especialidad=?, telefono=?, activo=? WHERE id_empleado=?',
        [nombre, especialidad, telefono, activo, id]
    );
    return result.affectedRows;
},
eliminar: async (id) => {
    const [result] = await db.query(
        'DELETE FROM Empleados WHERE id_empleado=?',
        [id]
    );
    return result.affectedRows;
}
    
};

module.exports = Empleado;