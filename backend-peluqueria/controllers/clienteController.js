const Cliente = require('../models/clienteModel');

const obtenerClientes = async (req, res) => {
    try {
        const clientes = await Cliente.obtenerTodos();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener clientes', detalle: error.message });
    }
};

const crearCliente = async (req, res) => {
    try {
        const { nombre, telefono, email } = req.body;
        if (!nombre || !telefono || !email) {
            return res.status(400).json({ error: 'Faltan campos obligatorios' });
        }

        //Verificar si ya existe
        const clienteExistente = await Cliente.buscarPorEmail(email);
        if (clienteExistente) {
            return res.status(200).json({ 
                mensaje: 'El cliente ya existe', 
                id_cliente: clienteExistente.id_cliente 
            });
        }

        const idInsertado = await Cliente.crear({ nombre, telefono, email });
        res.status(201).json({ mensaje: 'Cliente creado', id_cliente: idInsertado });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear cliente', detalle: error.message });
    }
};

module.exports = { obtenerClientes, crearCliente };