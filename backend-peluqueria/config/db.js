const mysql = require('mysql2');
require('dotenv').config();

// Crear el "pool" de conexiones utilizando las variables del archivo .env o de Render
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306, // <-- NUEVO: Para leer el puerto especial de Aiven
    ssl: {                             // <-- NUEVO: Escudo de seguridad obligatorio para la nube
        rejectUnauthorized: false
    },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Convertimos el pool para que soporte Promesas (async/await)
// Esto hará que el código futuro sea mucho más limpio y fácil de leer
const promisePool = pool.promise();

// Probar la conexión al arrancar
promisePool.getConnection()
    .then(connection => {
        console.log('Conexión exitosa a la base de datos MySQL');
        connection.release(); // Liberamos la conexión para que otros la usen
    })
    .catch(err => {
        console.error('Error conectando a la base de datos MySQL:', err.message);
    });

module.exports = promisePool;