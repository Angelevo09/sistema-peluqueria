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

module.exports = { obtenerEmpleados, crearEmpleado };