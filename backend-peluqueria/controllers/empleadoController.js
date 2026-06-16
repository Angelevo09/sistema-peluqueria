const Empleado = require('../models/empleadoModel');

const obtenerEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.obtenerTodos();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener empleados', detalle: error.message });
    }
};

const crearEmpleado = async (req, res) => {
    try {
        const { nombre, especialidad, telefono } = req.body;
        if (!nombre) {
            return res.status(400).json({ error: 'El nombre es obligatorio' });
        }
        const idInsertado = await Empleado.crear({ nombre, especialidad, telefono });
        res.status(201).json({ mensaje: 'Empleado creado', id_empleado: idInsertado });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear empleado', detalle: error.message });
    }
};

const actualizarEmpleado = async (req, res) => {
    try {
        const filas = await Empleado.actualizar(req.params.id, req.body);
        if (filas === 0) return res.status(404).json({ error: 'Empleado no encontrado' });
        res.json({ mensaje: 'Empleado actualizado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar empleado', detalle: error.message });
    }
};

const eliminarEmpleado = async (req, res) => {
    try {
        const filas = await Empleado.eliminar(req.params.id);
        if (filas === 0) return res.status(404).json({ error: 'Empleado no encontrado' });
        res.json({ mensaje: 'Empleado eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar empleado', detalle: error.message });
    }
};

module.exports = { obtenerEmpleados, crearEmpleado, actualizarEmpleado, eliminarEmpleado };