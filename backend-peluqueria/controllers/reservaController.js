const Reserva = require('../models/reservaModel');

const obtenerReservas = async (req, res) => {
    try {
        const reservas = await Reserva.obtenerTodas();
        res.json(reservas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener reservas', detalle: error.message });
    }
};

const crearReserva = async (req, res) => {
    try {
        const { id_cliente, id_empleado, fecha_hora, notas, servicios } = req.body;
        
        if (!id_cliente || !id_empleado || !fecha_hora || !servicios || servicios.length === 0) {
            return res.status(400).json({ error: 'Faltan datos obligatorios o servicios' });
        }

        // Verificar disponibilidad del estilista
        const estaDisponible = await Reserva.verificarDisponibilidad(id_empleado, fecha_hora);
        if (!estaDisponible) {
            return res.status(409).json({ error: 'El estilista ya tiene una cita confirmada en ese horario' });
        }

        const idInsertado = await Reserva.crearConDetalles(
            { id_cliente, id_empleado, fecha_hora, notas }, 
            servicios
        );
        
        res.status(201).json({ mensaje: 'Reserva creada con éxito', id_reserva: idInsertado });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la reserva', detalle: error.message });
    }
};

const cambiarEstadoReserva = async (req, res) => {
    try {
        const { id } = req.params; // Captura el número que venga en la URL
        const { estado } = req.body;

        const estadosValidos = ['pendiente', 'confirmada', 'cancelada', 'completada'];
        if (!estadosValidos.includes(estado)) {
            return res.status(400).json({ error: 'Estado no válido' });
        }

        const filasAfectadas = await Reserva.actualizarEstado(id, estado);
        if (filasAfectadas === 0) {
            return res.status(404).json({ error: 'Reserva no encontrada' });
        }

        res.json({ mensaje: `Reserva actualizada a ${estado}` });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar reserva', detalle: error.message });
    }
};

// AQUÍ ESTABA EL ERROR: Asegurarnos de exportar las 3 funciones
module.exports = { 
    obtenerReservas, 
    crearReserva, 
    cambiarEstadoReserva 
};