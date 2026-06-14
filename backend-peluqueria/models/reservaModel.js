const db = require('../config/db');

const Reserva = {
    obtenerTodas: async () => {
        const query = `
            SELECT r.id_reserva, c.nombre AS cliente, e.nombre AS estilista, 
                   r.fecha_hora, r.estado, r.notas
            FROM Reservas r
            JOIN Clientes c ON r.id_cliente = c.id_cliente
            JOIN Empleados e ON r.id_empleado = e.id_empleado
            ORDER BY r.fecha_hora ASC
        `;
        const [rows] = await db.query(query);
        return rows;
    },
    
    crearConDetalles: async (datosReserva, servicios) => {
        const conexion = await db.getConnection();
        try {
            await conexion.beginTransaction(); // Iniciar transacción

            // 1. Insertar la Reserva principal
            const { id_cliente, id_empleado, fecha_hora, notas } = datosReserva;
            const [resultReserva] = await conexion.query(
                'INSERT INTO Reservas (id_cliente, id_empleado, fecha_hora, notas) VALUES (?, ?, ?, ?)',
                [id_cliente, id_empleado, fecha_hora, notas]
            );
            const idReserva = resultReserva.insertId;

            // 2. Insertar los servicios en la tabla intermedia Detalle_Reserva
            for (let servicio of servicios) {
                await conexion.query(
                    'INSERT INTO Detalle_Reserva (id_reserva, id_servicio, precio_aplicado) VALUES (?, ?, ?)',
                    [idReserva, servicio.id_servicio, servicio.precio_aplicado]
                );
            }

            await conexion.commit(); // Confirmar cambios si todo sale bien
            return idReserva;
        } catch (error) {
            await conexion.rollback(); // Deshacer todo si hay un error
            throw error;
        } finally {
            conexion.release(); // Devolver la conexión al pool
        }
    },
    verificarDisponibilidad: async (id_empleado, fecha_hora) => {
        const [rows] = await db.query(
            'SELECT id_reserva FROM Reservas WHERE id_empleado = ? AND fecha_hora = ? AND estado != "cancelada"',
            [id_empleado, fecha_hora]
        );
        return rows.length === 0; // Retorna true si está libre
    },

    actualizarEstado: async (id_reserva, estado) => {
        const [result] = await db.query(
            'UPDATE Reservas SET estado = ? WHERE id_reserva = ?',
            [estado, id_reserva]
        );
        return result.affectedRows;
    }
};

module.exports = Reserva;