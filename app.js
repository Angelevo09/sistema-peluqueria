// Configuración global
// Antes: const API_URL = 'http://localhost:3000/api';
const API_URL = 'https://sistema-peluqueria.onrender.com/api';
const appContainer = document.getElementById('app');

// Estado de la aplicación
const estado = {
    vistaActual: 'cliente', // Puede ser: cliente, paso2, paso3, login, admin-reservas, admin-servicios, admin-empleados
    servicios: [],
    empleados: [],
    reservas: [], 
    borradorReserva: { id_servicio: null },
    autenticado: false,
    menuAbierto: false
};

// 1. Función de Inicialización
async function init() {
    document.body.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
    document.body.style.margin = '0';
    document.body.style.backgroundColor = '#f4f6f9';
    document.body.style.color = '#333';

    // Cargar TODOS los datos antes de pintar
    await cargarServicios();
    await cargarEmpleados();
    await cargarReservas();
    
    render();
}

// 2a. Conexión con el Backend para traer empleados
async function cargarEmpleados() {
    try {
        const respuesta = await fetch(`${API_URL}/empleados`);
        estado.empleados = await respuesta.json();
    } catch (error) {
        console.error('Error cargando empleados:', error);
    }
}
// 2b. Conexión con el Backend (Traer datos)
async function cargarServicios() {
    try {
        const respuesta = await fetch(`${API_URL}/servicios`);
        estado.servicios = await respuesta.json();
    } catch (error) {
        console.error('Error conectando al servidor:', error);
        alert('No se pudo conectar al servidor. Asegúrate de que el Backend esté corriendo.');
    }
}

async function cargarReservas() {
    try {
        const respuesta = await fetch(`${API_URL}/reservas`);
        estado.reservas = await respuesta.json();
    } catch (error) {
        console.error('Error cargando reservas:', error);
    }
}

// 3. Renderizador Principal (El pintor con Sidebar)
function render() {
    appContainer.innerHTML = ''; // Limpiar el lienzo

    // --- 1. Crear Botón Menú Hamburguesa ---
    const menuBtn = document.createElement('button');
    menuBtn.innerHTML = estado.menuAbierto ? '✖ Cerrar' : '☰ Menú';
    menuBtn.style.cssText = 'position: fixed; top: 15px; left: 15px; z-index: 1000; padding: 10px 15px; background-color: #2c3e50; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; transition: 0.3s;';
    menuBtn.onclick = () => { estado.menuAbierto = !estado.menuAbierto; render(); };
    appContainer.appendChild(menuBtn);

    // --- 2. Crear el Sidebar Lateral ---
    const sidebar = document.createElement('div');
    // CORRECCIÓN: Añadimos 'overflow-y: auto;' para que la barra permita hacer scroll en pantallas pequeñas
    sidebar.style.cssText = `position: fixed; top: 0; left: ${estado.menuAbierto ? '0' : '-250px'}; width: 250px; height: 100vh; background-color: #2c3e50; transition: left 0.3s ease; z-index: 999; padding-top: 70px; box-shadow: 2px 0 5px rgba(0,0,0,0.2); display: flex; flex-direction: column; overflow-y: auto;`;
    
    // Enlaces públicos
    let menuHTML = `<a href="#" onclick="cambiarVista('cliente')" style="padding: 15px 20px; color: white; text-decoration: none; border-bottom: 1px solid #34495e; background-color: ${estado.vistaActual === 'cliente' ? '#3498db' : 'transparent'};">Catálogo Público</a>`;

    // Lógica del Candado en el menú
    if (!estado.autenticado) {
        menuHTML += `<a href="#" onclick="cambiarVista('login')" style="padding: 15px 20px; color: white; text-decoration: none; border-bottom: 1px solid #34495e; background-color: ${estado.vistaActual === 'login' ? '#3498db' : 'transparent'};">Acceso Admin</a>`;
    } else {
        // Sub-menús de Admin (Solo se ven si está logueado)
        menuHTML += `
            <div style="padding: 15px 20px; color: #bdc3c7; font-size: 0.85rem; font-weight: bold; background-color: #1a252f; margin-top: 10px;">PANEL DE GESTIÓN</div>
            <a href="#" onclick="cambiarVista('admin-reservas')" style="padding: 15px 20px; color: white; text-decoration: none; border-bottom: 1px solid #34495e; background-color: ${estado.vistaActual === 'admin-reservas' ? '#3498db' : 'transparent'};">Listado de Citas</a>
            <a href="#" onclick="cambiarVista('admin-servicios')" style="padding: 15px 20px; color: white; text-decoration: none; border-bottom: 1px solid #34495e; background-color: ${estado.vistaActual === 'admin-servicios' ? '#3498db' : 'transparent'};">Añadir Servicio</a>
            <a href="#" onclick="cambiarVista('admin-empleados')" style="padding: 15px 20px; color: white; text-decoration: none; border-bottom: 1px solid #34495e; background-color: ${estado.vistaActual === 'admin-empleados' ? '#3498db' : 'transparent'};">Añadir Estilista</a>
            
            <a href="#" onclick="cerrarSesion()" style="padding: 15px 20px; color: #e74c3c; text-decoration: none; margin-top: 20px; border-top: 1px solid #34495e; font-weight: bold; transition: background 0.3s;">Cerrar Sesión</a>
        `;
    }
    sidebar.innerHTML = menuHTML;
    appContainer.appendChild(sidebar);

    // --- 3. Crear el Contenedor Principal dinámico ---
    const vistaMain = document.createElement('div');
    // Si el menú está abierto en pantallas grandes, empujamos el contenido a la derecha
    const margenIzquierdo = estado.menuAbierto && window.innerWidth > 768 ? '250px' : '0';
    vistaMain.style.cssText = `padding: 80px 40px 40px; transition: margin-left 0.3s ease; margin-left: ${margenIzquierdo};`;

    // Lógica para pintar las pantallas
    if (estado.vistaActual === 'cliente') vistaMain.innerHTML = generarVistaCliente();
    else if (estado.vistaActual === 'paso2') vistaMain.innerHTML = generarVistaEstilistaFecha();
    else if (estado.vistaActual === 'paso3') vistaMain.innerHTML = generarVistaDatosPersonales();
    else if (estado.vistaActual === 'login') vistaMain.innerHTML = generarVistaLogin();
    // Bloque protegido por el candado
    else if (estado.autenticado) {
        if (estado.vistaActual === 'admin-reservas') vistaMain.innerHTML = generarVistaAdminReservas();
        else if (estado.vistaActual === 'admin-servicios') vistaMain.innerHTML = generarVistaAdminServicios();
        else if (estado.vistaActual === 'admin-empleados') vistaMain.innerHTML = generarVistaAdminEmpleados();
    } 

    appContainer.appendChild(vistaMain);
}

// Nueva función de apoyo para el menú lateral
window.cerrarSesion = function() {
    estado.autenticado = false;
    estado.vistaActual = 'cliente';
    estado.menuAbierto = false; // Cerramos el menú al salir
    render();
};

// 4. Generador de la Vista Pública (Catálogo)
function generarVistaCliente() {
    let html = `
        <h1 style="color: #2c3e50; margin-bottom: 5px;">Bienvenido a tu Peluquería</h1>
        <p style="font-size: 1.2rem; color: #7f8c8d; margin-bottom: 30px;">Selecciona los servicios que deseas agendar hoy:</p>
        <div style="display: flex; flex-wrap: wrap; gap: 20px;">
    `;

    // Si la base de datos no tiene servicios todavía
    if (estado.servicios.length === 0) {
        html += `<p style="color: #e74c3c;">No hay servicios disponibles en este momento. El administrador debe agregarlos.</p>`;
    }

    // Pintar cada servicio traído desde MySQL
    estado.servicios.forEach(servicio => {
        html += `
            <div style="background-color: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); width: 280px; display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <h2 style="margin-top: 0; color: #2980b9; font-size: 1.4rem;">${servicio.nombre}</h2>
                    <p style="color: #555; line-height: 1.5;">${servicio.descripcion || 'Sin descripción detallada.'}</p>
                </div>
                <div style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 15px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 1.1rem;">
                        <strong>$${servicio.precio}</strong>
                        <span>⏱️ ${servicio.duracion_min} min</span>
                    </div>
                    <button onclick="iniciarReserva(${servicio.id_servicio})" style="width: 100%; padding: 12px; background-color: #27ae60; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; transition: background 0.3s;">
                        + Agregar a mi cita
                    </button>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    return html;
}
// Función para atrapar el clic del cliente y cambiar de pantalla
window.iniciarReserva = function(id_servicio) {
    estado.borradorReserva.id_servicio = id_servicio; 
    estado.vistaActual = 'paso2'; 
    render();
};

// Generador de la Vista Paso 2
function generarVistaEstilistaFecha() {
    const servicioSeleccionado = estado.servicios.find(s => s.id_servicio === estado.borradorReserva.id_servicio);

    // Construir el select dinámico de los estilistas
    let opcionesEstilistas = '<option value="" disabled selected>Selecciona un profesional...</option>';
    estado.empleados.forEach(emp => {
        opcionesEstilistas += `<option value="${emp.id_empleado}">${emp.nombre} - ${emp.especialidad}</option>`;
    });

    // Bloquear fechas pasadas en el calendario
    const fechaHoy = new Date().toISOString().split('T')[0];

    return `
        <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <button onclick="cambiarVista('cliente')" style="background: none; border: none; color: #7f8c8d; cursor: pointer; margin-bottom: 20px; font-size: 1rem; padding: 0;">← Volver al catálogo</button>

            <h2 style="color: #2c3e50; margin-top: 0;">Paso 2: Fecha y Especialista</h2>
            
            <div style="background-color: #ecf0f1; padding: 15px; border-radius: 4px; margin-bottom: 20px; border-left: 4px solid #3498db;">
                <strong>Servicio:</strong> ${servicioSeleccionado.nombre} ($${servicioSeleccionado.precio})
            </div>

            <div style="display: flex; flex-direction: column; gap: 15px;">
                <div>
                    <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #555;">Elige tu Estilista</label>
                    <select id="res-estilista" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                        ${estado.empleados.length === 0 ? '<option disabled> No hay estilistas registrados</option>' : opcionesEstilistas}
                    </select>
                </div>

                <div style="display: flex; gap: 15px;">
                    <div style="flex: 1; display: flex; flex-direction: column;">
                        <label style="margin-bottom: 5px; font-weight: bold; color: #555;">Fecha de la cita</label>
                        <input type="date" id="res-fecha" min="${fechaHoy}" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; height: 42px;">
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column;">
                        <label style="margin-bottom: 5px; font-weight: bold; color: #555;">Hora</label>
                        <input type="time" id="res-hora" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; height: 42px;">
                    </div>
                </div>

                <button onclick="validarPaso2()" style="width: 100%; padding: 12px; background-color: #27ae60; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; margin-top: 10px; font-size: 1.1rem;">
                    Continuar con mis datos →
                </button>
            </div>
        </div>
    `;
}
// Generador de la Vista Paso 3: Datos Personales
function generarVistaDatosPersonales() {
    const servicio = estado.servicios.find(s => s.id_servicio === estado.borradorReserva.id_servicio);
    const empleado = estado.empleados.find(e => e.id_empleado === estado.borradorReserva.id_empleado);

    return `
        <div style="max-width: 500px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <button onclick="cambiarVista('paso2')" style="background: none; border: none; color: #7f8c8d; cursor: pointer; margin-bottom: 20px; font-size: 1rem; padding: 0;">← Volver al paso anterior</button>

            <h2 style="color: #2c3e50; margin-top: 0;">Paso 3: Confirmar Reserva</h2>
            
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px; margin-bottom: 20px; font-size: 0.95rem; border: 1px solid #e9ecef;">
                <p style="margin: 0 0 8px 0;"><strong> Servicio:</strong> ${servicio.nombre} ($${servicio.precio})</p>
                <p style="margin: 0 0 8px 0;"><strong> Fecha y Hora:</strong> ${estado.borradorReserva.fecha_hora}</p>
                <p style="margin: 0;"><strong>Stylist:</strong> ${empleado.nombre}</p>
            </div>

            <form onsubmit="confirmarReserva(event)" style="display: flex; flex-direction: column; gap: 15px;">
                <div>
                    <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #555;">Tu Nombre Completo *</label>
                    <input type="text" id="cli-nombre" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
                </div>

                <div>
                    <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #555;">Número de Teléfono *</label>
                    <input type="tel" id="cli-telefono" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;" placeholder="Ej. 04121234567">
                </div>

                <div>
                    <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #555;">Correo Electrónico *</label>
                    <input type="email" id="cli-email" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;" placeholder="nombre@correo.com">
                </div>

                <button type="submit" style="width: 100%; padding: 14px; background-color: #27ae60; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; margin-top: 10px; font-size: 1.1rem; box-shadow: 0 4px 6px rgba(39, 174, 96, 0.2);">
                     ¡Agendar Cita Ahora!
                </button>
            </form>
        </div>
    `;
}

// Validador antes de pasar al último paso
window.validarPaso2 = function() {
    const id_empleado = document.getElementById('res-estilista').value;
    const fecha = document.getElementById('res-fecha').value;
    const hora = document.getElementById('res-hora').value;

    if (!id_empleado || !fecha || !hora) {
        alert('Por favor completa todos los campos (Estilista, Fecha y Hora).');
        return;
    }

    estado.borradorReserva.id_empleado = parseInt(id_empleado);
    estado.borradorReserva.fecha_hora = `${fecha} ${hora}:00`;

    // CAMBIO AQUÍ: Saltamos al paso 3 y repintamos
    estado.vistaActual = 'paso3';
    render();
};

// 5. Generador de la Vista de Administración
// --- VISTAS DEL ADMINISTRADOR SEPARADAS ---

// 1. Vista de Citas (Tabla)
function generarVistaAdminReservas() {
    let filasTabla = estado.reservas.length === 0 ? 
        '<tr><td colspan="6" style="text-align: center; padding: 20px; color: #7f8c8d;">No hay reservas registradas.</td></tr>' : '';

    estado.reservas.forEach(r => {
        const fechaLocal = new Date(r.fecha_hora).toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' });
        let colorEstado = '#7f8c8d'; 
        if (r.estado === 'confirmada') colorEstado = '#3498db'; 
        if (r.estado === 'completada') colorEstado = '#27ae60'; 
        if (r.estado === 'cancelada') colorEstado = '#e74c3c';  

        filasTabla += `
            <tr style="border-bottom: 1px solid #eee; background-color: white;">
                <td style="padding: 12px; font-weight: bold;">#${r.id_reserva}</td>
                <td style="padding: 12px;">${r.cliente}</td>
                <td style="padding: 12px;">${r.estilista}</td>
                <td style="padding: 12px;">${fechaLocal}</td>
                <td style="padding: 12px; font-weight: bold; color: ${colorEstado};">${r.estado.toUpperCase()}</td>
                <td style="padding: 12px;">
                    <select onchange="actualizarEstadoReserva(${r.id_reserva}, this.value)" style="padding: 6px; border-radius: 4px; border: 1px solid #ccc;">
                        <option value="" disabled selected>Cambiar...</option>
                        <option value="pendiente">Pendiente</option>
                        <option value="confirmada">Confirmada</option>
                        <option value="completada">Completada</option>
                        <option value="cancelada">Cancelada</option>
                    </select>
                </td>
            </tr>`;
    });

    return `
        <h2 style="color: #2c3e50; margin-top: 0;">Gestión de Citas</h2>
        <div style="background-color: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; text-align: left; min-width: 600px;">
                <thead>
                    <tr style="background-color: #f8f9fa; border-bottom: 2px solid #dee2e6;">
                        <th style="padding: 12px;">ID</th><th style="padding: 12px;">Cliente</th>
                        <th style="padding: 12px;">Estilista</th><th style="padding: 12px;">Fecha/Hora</th>
                        <th style="padding: 12px;">Estado</th><th style="padding: 12px;">Acción</th>
                    </tr>
                </thead>
                <tbody>${filasTabla}</tbody>
            </table>
        </div>
    `;
}

// 2. Vista de Añadir Servicio
function generarVistaAdminServicios() {
    return `
        <h2 style="color: #2980b9; margin-top: 0;">Añadir Nuevo Servicio al Catálogo</h2>
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); max-width: 500px;">
            <form onsubmit="guardarNuevoServicio(event)" style="display: flex; flex-direction: column; gap: 15px;">
                <input type="text" id="serv-nombre" required placeholder="Nombre del Servicio *" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                <textarea id="serv-desc" placeholder="Descripción" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px; resize: vertical; min-height: 80px;"></textarea>
                <div style="display: flex; gap: 15px;">
                    <input type="number" step="0.01" id="serv-precio" required placeholder="Precio ($) *" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px; flex: 1;">
                    <input type="number" id="serv-duracion" required placeholder="Duración (min) *" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px; flex: 1;">
                </div>
                <button type="submit" style="padding: 12px; background-color: #3498db; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">Guardar Servicio</button>
            </form>
        </div>
    `;
}

// 3. Vista de Añadir Estilista
function generarVistaAdminEmpleados() {
    return `
        <h2 style="color: #27ae60; margin-top: 0;">Registrar Nuevo Estilista</h2>
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); max-width: 500px;">
            <form onsubmit="guardarNuevoEmpleado(event)" style="display: flex; flex-direction: column; gap: 15px;">
                <input type="text" id="emp-nombre" required placeholder="Nombre Completo *" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                <input type="text" id="emp-especialidad" placeholder="Especialidad (Ej. Barbería)" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                <input type="text" id="emp-telefono" placeholder="Teléfono" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                <button type="submit" style="padding: 12px; background-color: #27ae60; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">Registrar Profesional</button>
            </form>
        </div>
    `;
}

// 6. Controlador de Navegación
window.cambiarVista = function(nuevaVista) {
    estado.vistaActual = nuevaVista;
    render();
};
// 7. Lógica para guardar un nuevo servicio
window.guardarNuevoServicio = async function(event) {
    event.preventDefault(); // Evita que la página se recargue bruscamente

    // 1. Capturar los datos de los inputs
    const nuevoServicio = {
        nombre: document.getElementById('serv-nombre').value,
        descripcion: document.getElementById('serv-desc').value,
        precio: parseFloat(document.getElementById('serv-precio').value),
        duracion_min: parseInt(document.getElementById('serv-duracion').value)
    };

    try {
        // 2. Enviar los datos al Backend
        const respuesta = await fetch(`${API_URL}/servicios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoServicio)
        });

        if (respuesta.ok) {
            alert('¡Servicio guardado con éxito!');
            
            // 3. Magia: Recargar la lista de servicios y volver a pintar la pantalla
            await cargarServicios(); 
            render(); 
        } else {
            const errorData = await respuesta.json();
            alert('Error al guardar: ' + (errorData.error || 'Desconocido'));
        }
    } catch (error) {
        console.error('Error de conexión:', error);
        alert('Error de conexión con el servidor.');
    }
};
// 8. Lógica para guardar un nuevo estilista (Empleado)
window.guardarNuevoEmpleado = async function(event) {
    event.preventDefault();

    const nuevoEmpleado = {
        nombre: document.getElementById('emp-nombre').value,
        especialidad: document.getElementById('emp-especialidad').value,
        telefono: document.getElementById('emp-telefono').value
    };

    try {
        const respuesta = await fetch(`${API_URL}/empleados`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoEmpleado)
        });

        if (respuesta.ok) {
            alert('¡Estilista registrado con éxito!');
            
            // Limpiar los campos del formulario manualmente
            document.getElementById('emp-nombre').value = '';
            document.getElementById('emp-especialidad').value = '';
            document.getElementById('emp-telefono').value = '';
            
            // Si estuviéramos en la vista de agendar, aquí recargaríamos los datos
        } else {
            const errorData = await respuesta.json();
            alert('Error al guardar: ' + (errorData.error || 'Desconocido'));
        }
    } catch (error) {
        console.error('Error de conexión:', error);
        alert('Error de conexión con el servidor.');
    }
};
// 9. Enviar la reserva final al Backend (Corregido)
window.confirmarReserva = async function(event) {
    event.preventDefault();

    // Capturamos los datos del cliente
    const nombre = document.getElementById('cli-nombre').value;
    const telefono = document.getElementById('cli-telefono').value;
    const email = document.getElementById('cli-email').value;

    // Buscamos el servicio en memoria para sacar su precio actual
    const servicio = estado.servicios.find(s => s.id_servicio === estado.borradorReserva.id_servicio);

    try {
        // --- PASO A: Crear o buscar al Cliente ---
        const resCliente = await fetch(`${API_URL}/clientes`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre, telefono, email })
        });

        if (!resCliente.ok) {
            const errorCli = await resCliente.json();
            alert(' Error con el cliente: ' + (errorCli.error || 'Desconocido'));
            return; // Detenemos si falla el cliente
        }

        const dataCliente = await resCliente.json();
        const id_cliente_obtenido = dataCliente.id_cliente; // Ya tenemos el ID (nuevo o existente)

        // --- PASO B: Crear la Reserva con el formato exacto que exige el Backend ---
        const datosReservaFinal = {
            id_cliente: id_cliente_obtenido,
            id_empleado: estado.borradorReserva.id_empleado,
            fecha_hora: estado.borradorReserva.fecha_hora,
            notas: "Reserva autogestionada desde la web",
            servicios: [
                {
                    id_servicio: servicio.id_servicio,
                    precio_aplicado: servicio.precio
                }
            ]
        };

        const resReserva = await fetch(`${API_URL}/reservas`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosReservaFinal)
        });

        if (resReserva.ok) {
            const resultado = await resReserva.json();
            alert(` ¡Reserva confirmada con éxito!\nCódigo de cita: #${resultado.id_reserva || 'Generado'}`);
            
            // Limpiamos la memoria y volvemos al inicio
            estado.borradorReserva = { id_servicio: null };
            estado.vistaActual = 'cliente';
            render();
        } else {
            const errorRes = await resReserva.json();
            alert(' No se pudo procesar la reserva: ' + (errorRes.error || 'Error interno'));
        }

    } catch (error) {
        console.error('Error enviando reserva:', error);
        alert(' Error de conexión al procesar tu cita.');
    }
};

// Función para actualizar el estado de una reserva desde la tabla
window.actualizarEstadoReserva = async function(id_reserva, nuevoEstado) {
    if (!nuevoEstado) return;

    try {
        // Enviar la petición PUT al Backend (La ruta que ya tenías programada)
        const respuesta = await fetch(`${API_URL}/reservas/${id_reserva}/estado`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ estado: nuevoEstado })
        });

        if (respuesta.ok) {
            // Recargar la lista completa de la base de datos para ver los cambios
            await cargarReservas(); 
            render(); // Repintar la pantalla
        } else {
            const errorData = await respuesta.json();
            alert(' Error al actualizar: ' + (errorData.error || 'Desconocido'));
        }
    } catch (error) {
        console.error('Error actualizando estado:', error);
        alert(' Error de conexión al intentar actualizar la reserva.');
    }
};

// Generador de la Vista de Login
function generarVistaLogin() {
    return `
        <div style="max-width: 400px; margin: 50px auto; background-color: white; padding: 40px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align: center;">
            <h2 style="color: #2c3e50; margin-top: 0;"> Acceso Restringido</h2>
            <p style="color: #7f8c8d; margin-bottom: 30px;">Por favor, ingresa la contraseña de administrador para gestionar las reservas.</p>
            
            <form onsubmit="intentarLogin(event)" style="display: flex; flex-direction: column; gap: 15px;">
                <input type="password" id="admin-pass" required placeholder="Contraseña..." style="padding: 12px; border: 1px solid #ccc; border-radius: 4px; font-size: 1rem;">
                <button type="submit" style="padding: 12px; background-color: #2c3e50; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 1rem; transition: background 0.3s;">
                    Entrar al Panel
                </button>
            </form>
        </div>
    `;
}

// Lógica para enviar la contraseña al Backend
window.intentarLogin = async function(event) {
    event.preventDefault();
    const passwordIngresada = document.getElementById('admin-pass').value;

    try {
        const respuesta = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: passwordIngresada })
        });

        if (respuesta.ok) {
            estado.autenticado = true;
            estado.vistaActual = 'admin-reservas'; // <-- Apunta a la nueva vista separada
            estado.menuAbierto = false; // Cerramos el menú para que se vea la tabla completa
            render(); 
        } else {
            // Si la contraseña es incorrecta
            document.getElementById('admin-pass').value = ''; // Limpiar el input
            alert('Contraseña incorrecta. Acceso denegado.');
        }
    } catch (error) {
        console.error('Error en login:', error);
        alert('Error de conexión con el servidor.');
    }
};
// Yyyyy arrrancaaa
init();