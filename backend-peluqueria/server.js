const express = require('express');
const cors = require('cors');
require('dotenv').config();

require('./config/db');

// Inicializar la aplicación
const app = express();

// Middlewares (Configuraciones base)
app.use(cors()); // Permite peticiones de otros orígenes
app.use(express.json()); // Permite que el servidor entienda datos en formato JSON

//importo rutas
const servicioRoutes = require('./routes/servicioRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const empleadoRoutes = require('./routes/empleadoRoutes');
const reservaRoutes = require('./routes/reservaRoutes');

// Usar rutas
app.use('/api/servicios', servicioRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/empleados', empleadoRoutes);
app.use('/api/reservas', reservaRoutes);

//Ruta de Login para el Administrador
app.post('/api/login', (req, res) => {
    const { password } = req.body;
    
    // Comparamos la contraseña enviada con la del archivo .env
    if (password === process.env.ADMIN_PASS) {
        // En un proyecto gigante aquí usaríamos JWT. Por ahora, devolvemos una llave simple.
        res.json({ success: true, token: 'llave-maestra-peluqueria' });
    } else {
        res.status(401).json({ error: 'Contraseña incorrecta' });
    }
});

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('El servidor de la Peluquería está funcionando perfectamente');
});

// Levantar el servidor
const PORT = process.env.PORT || 19189;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});