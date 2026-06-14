const db = require('../config/db');

const Cliente = {
    obtenerTodos: async () => {
        const [rows] = await db.query('SELECT * FROM Clientes');
        return rows;
    },
    buscarPorEmail: async (email) => {
        const [rows] = await db.query('SELECT * FROM Clientes WHERE email = ?', [email]);
        return rows[0]; // Retorna el cliente si existe, o undefined si no
    },
    crear: async (nuevoCliente) => {
        const { nombre, telefono, email } = nuevoCliente;
        const [result] = await db.query(
            'INSERT INTO Clientes (nombre, telefono, email) VALUES (?, ?, ?)',
            [nombre, telefono, email]
        );
        return result.insertId;
    }
};

module.exports = Cliente;