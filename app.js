<<<<<<< HEAD
// ============================================
// ICONOS SVG (reemplazan emojis)
// ============================================
const ICONS = {
    home: `<svg class="icon" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
    login: `<svg class="icon" viewBox="0 0 24 24"><path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"/></svg>`,
    dashboard: `<svg class="icon" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>`,
    reservations: `<svg class="icon" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg>`,
    addService: `<svg class="icon" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>`,
    addEmployee: `<svg class="icon" viewBox="0 0 24 24"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
    logout: `<svg class="icon" viewBox="0 0 24 24"><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/></svg>`,
    back: `<svg class="icon" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>`,
    time: `<svg class="icon" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`,
    price: `<svg class="icon" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>`,
    menu: `<svg class="icon" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`,
    close: `<svg class="icon" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`,
    check: `<svg class="icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`,
    arrowForward: `<svg class="icon" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>`,
    person: `<svg class="icon" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
    phone: `<svg class="icon" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
    email: `<svg class="icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
    calendar: `<svg class="icon" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg>`,
};

// ============================================
// CONFIGURACIÓN GLOBAL
// ============================================
const API_URL = 'http://localhost:3000/api';
=======
// Configuración global
// Antes: const API_URL = 'http://localhost:3000/api';
const API_URL = 'https://sistema-peluqueria.onrender.com/api';
>>>>>>> 2bf2bb0c77fec91efc7a164529bcf3041cd958e2
const appContainer = document.getElementById('app');

// ============================================
// ESTADO DE LA APLICACIÓN
// ============================================
const estado = {
    vistaActual: 'cliente',
    servicios: [],
    empleados: [],
    reservas: [],
    borradorReserva: { id_servicio: null },
    autenticado: false,
    menuAbierto: false
};

// ============================================
// 1. INICIALIZACIÓN
// ============================================
async function init() {
    await cargarServicios();
    await cargarEmpleados();
    await cargarReservas();
    render();
}

// ============================================
// 2. CARGA DE DATOS
// ============================================
async function cargarEmpleados() {
    try {
        const respuesta = await fetch(`${API_URL}/empleados`);
        estado.empleados = await respuesta.json();
    } catch (error) {
        console.error('Error cargando empleados:', error);
    }
}

async function cargarServicios() {
    try {
        const respuesta = await fetch(`${API_URL}/servicios`);
        estado.servicios = await respuesta.json();
    } catch (error) {
        console.error('Error conectando al servidor:', error);
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

// ============================================
// 3. RENDERIZADOR PRINCIPAL
// ============================================
function render() {
    appContainer.innerHTML = '';

    // Botón Menú Hamburguesa
    const menuBtn = document.createElement('button');
    menuBtn.className = 'menu-btn';
    menuBtn.innerHTML = `
        ${estado.menuAbierto ? ICONS.close : ICONS.menu}
        ${estado.menuAbierto ? 'Cerrar' : 'Menú'}
    `;
    menuBtn.onclick = () => {
        toggleMenu();
    };
    appContainer.appendChild(menuBtn);

    // Overlay (fondo oscuro al abrir el menú en móvil)
    const overlay = document.createElement('div');
    overlay.className = `sidebar-overlay ${estado.menuAbierto ? 'visible' : ''}`;
    overlay.onclick = () => {
        if (estado.menuAbierto) {
            toggleMenu();
        }
    };
    appContainer.appendChild(overlay);

    // Sidebar
    const sidebar = document.createElement('div');
    sidebar.className = `sidebar ${estado.menuAbierto ? 'open' : ''}`;

    let menuHTML = `
        <a href="#" onclick="cambiarVista('cliente'); return false;" class="sidebar-link ${estado.vistaActual === 'cliente' ? 'active' : ''}">
            ${ICONS.home} Catálogo Público
        </a>`;

    if (!estado.autenticado) {
        menuHTML += `
            <a href="#" onclick="cambiarVista('login'); return false;" class="sidebar-link ${estado.vistaActual === 'login' ? 'active' : ''}">
                ${ICONS.login} Acceso Admin
            </a>`;
    } else {
        menuHTML += `
            <div class="sidebar-section-title">Panel de Gestión</div>
            <a href="#" onclick="cambiarVista('admin-reservas'); return false;" class="sidebar-link ${estado.vistaActual === 'admin-reservas' ? 'active' : ''}">
                ${ICONS.reservations} Listado de Citas
            </a>
            <a href="#" onclick="cambiarVista('admin-servicios'); return false;" class="sidebar-link ${estado.vistaActual === 'admin-servicios' ? 'active' : ''}">
                ${ICONS.addService} Añadir Servicio
            </a>
            <a href="#" onclick="cambiarVista('admin-empleados'); return false;" class="sidebar-link ${estado.vistaActual === 'admin-empleados' ? 'active' : ''}">
                ${ICONS.addEmployee} Añadir Estilista
            </a>
            <div class="divider"></div>
            <a href="#" onclick="cerrarSesion(); return false;" class="sidebar-link" style="color: var(--error);">
                ${ICONS.logout} Cerrar Sesión
            </a>`;
    }

    sidebar.innerHTML = menuHTML;
    appContainer.appendChild(sidebar);

    // Contenedor Principal
    const vistaMain = document.createElement('div');
    vistaMain.className = `main-container ${estado.menuAbierto ? 'with-sidebar' : ''}`;

    if (estado.vistaActual === 'cliente') vistaMain.innerHTML = generarVistaCliente();
    else if (estado.vistaActual === 'paso2') vistaMain.innerHTML = generarVistaEstilistaFecha();
    else if (estado.vistaActual === 'paso3') vistaMain.innerHTML = generarVistaDatosPersonales();
    else if (estado.vistaActual === 'login') vistaMain.innerHTML = generarVistaLogin();
    else if (estado.autenticado) {
        if (estado.vistaActual === 'admin-reservas') vistaMain.innerHTML = generarVistaAdminReservas();
        else if (estado.vistaActual === 'admin-servicios') vistaMain.innerHTML = generarVistaAdminServicios();
        else if (estado.vistaActual === 'admin-empleados') vistaMain.innerHTML = generarVistaAdminEmpleados();
    }

    vistaMain.classList.add('fade-in');
    appContainer.appendChild(vistaMain);
}

// ============================================
// FUNCIÓN PARA ABRIR/CERRAR MENÚ CON ANIMACIÓN
// ============================================
function toggleMenu() {
    estado.menuAbierto = !estado.menuAbierto;
    
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const mainContainer = document.querySelector('.main-container');
    const menuBtn = document.querySelector('.menu-btn');
    
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
    
    if (overlay) {
        overlay.classList.toggle('visible');
    }
    
    if (mainContainer) {
        mainContainer.classList.toggle('with-sidebar');
    }
    
    if (menuBtn) {
        menuBtn.innerHTML = `
            ${estado.menuAbierto ? ICONS.close : ICONS.menu}
            ${estado.menuAbierto ? 'Cerrar' : 'Menú'}
        `;
    }
}

// ============================================
// 4. VISTA PÚBLICA - CATÁLOGO
// ============================================
function generarVistaCliente() {
    let html = `
        <div>
            <h1>Bienvenido a Tu Estilo</h1>
            <p class="subtitle">Elige los servicios que deseas agendar hoy y reserva tu cita en segundos</p>
            <div class="services-grid">
    `;

    if (estado.servicios.length === 0) {
        html += `<div class="alert-box alert-warning">No hay servicios disponibles en este momento</div>`;
    } else {
        estado.servicios.forEach(servicio => {
            html += `
                <div class="service-card">
                    <h3>${servicio.nombre}</h3>
                    <p>${servicio.descripcion || 'Nuestro servicio premium'}</p>
                    <div class="service-info">
                        <div class="service-price">${ICONS.price} $${servicio.precio}</div>
                        <div class="service-duration">${ICONS.time} ${servicio.duracion_min} min</div>
                    </div>
                    <button onclick="iniciarReserva(${servicio.id_servicio})" class="btn btn-primary">
                        ${ICONS.arrowForward} Agendar Ahora
                    </button>
                </div>
            `;
        });
    }

    html += `</div></div>`;
    return html;
}

window.iniciarReserva = function(id_servicio) {
    estado.borradorReserva.id_servicio = id_servicio;
    estado.vistaActual = 'paso2';
    estado.menuAbierto = false;
    
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const mainContainer = document.querySelector('.main-container');
    const menuBtn = document.querySelector('.menu-btn');
    
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('visible');
    if (mainContainer) mainContainer.classList.remove('with-sidebar');
    if (menuBtn) {
        menuBtn.innerHTML = `${ICONS.menu} Menú`;
    }
    
    render();
};

// ============================================
// 5. VISTA PASO 2 - ESTILISTA Y FECHA
// ============================================
function generarVistaEstilistaFecha() {
    const servicioSeleccionado = estado.servicios.find(s => s.id_servicio === estado.borradorReserva.id_servicio);
    let opcionesEstilistas = '<option value="" disabled selected>Selecciona un profesional...</option>';
    estado.empleados.forEach(emp => {
        opcionesEstilistas += `<option value="${emp.id_empleado}">${emp.nombre} - ${emp.especialidad}</option>`;
    });

    const fechaHoy = new Date().toISOString().split('T')[0];

    return `
        <div class="form-container">
            <button onclick="cambiarVista('cliente')" class="btn btn-back">
                ${ICONS.back} Volver al catálogo
            </button>

            <h2>Paso 2: Elige tu Estilista</h2>

            <div class="summary-card">
                <div class="summary-row">
                    <span class="summary-label">Servicio:</span>
                    <span class="summary-value">${servicioSeleccionado.nombre}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">Precio:</span>
                    <span class="summary-value">$${servicioSeleccionado.precio}</span>
                </div>
            </div>

            <form onsubmit="validarPaso2(event)" style="display: flex; flex-direction: column; gap: 20px;">
                <div class="form-group">
                    <label>Selecciona tu Estilista</label>
                    <select id="res-estilista" required>
                        ${estado.empleados.length === 0 ? '<option disabled>No hay estilistas registrados</option>' : opcionesEstilistas}
                    </select>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Fecha de la Cita</label>
                        <input type="date" id="res-fecha" min="${fechaHoy}" required>
                    </div>
                    <div class="form-group">
                        <label>Hora</label>
                        <input type="time" id="res-hora" required>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary">
                    ${ICONS.arrowForward} Continuar
                </button>
            </form>
        </div>
    `;
}

window.validarPaso2 = function(event) {
    event.preventDefault();
    const id_empleado = document.getElementById('res-estilista').value;
    const fecha = document.getElementById('res-fecha').value;
    const hora = document.getElementById('res-hora').value;

    if (!id_empleado || !fecha || !hora) {
        alert('Por favor completa todos los campos');
        return;
    }

    estado.borradorReserva.id_empleado = parseInt(id_empleado);
    estado.borradorReserva.fecha_hora = `${fecha} ${hora}:00`;
    estado.vistaActual = 'paso3';
    render();
};

// ============================================
// 6. VISTA PASO 3 - DATOS PERSONALES
// ============================================
function generarVistaDatosPersonales() {
    const servicio = estado.servicios.find(s => s.id_servicio === estado.borradorReserva.id_servicio);
    const empleado = estado.empleados.find(e => e.id_empleado === estado.borradorReserva.id_empleado);

    return `
        <div class="form-container">
            <button onclick="cambiarVista('paso2')" class="btn btn-back">
                ${ICONS.back} Volver atrás
            </button>

            <h2>Paso 3: Confirma tu Reserva</h2>

            <div class="summary-card">
                <div class="summary-row">
                    <span class="summary-label">Servicio:</span>
                    <span class="summary-value">${servicio.nombre}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">Estilista:</span>
                    <span class="summary-value">${empleado.nombre}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">Fecha y Hora:</span>
                    <span class="summary-value">${estado.borradorReserva.fecha_hora}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">Total:</span>
                    <span class="summary-value" style="color: var(--primary); font-weight: 500;">$${servicio.precio}</span>
                </div>
            </div>

            <form onsubmit="confirmarReserva(event)" style="display: flex; flex-direction: column; gap: 20px;">
                <div class="form-group">
                    <label>Tu Nombre Completo *</label>
                    <input type="text" id="cli-nombre" placeholder="Ej. María Pérez" required>
                </div>

                <div class="form-group">
                    <label>Número de Teléfono *</label>
                    <input type="tel" id="cli-telefono" placeholder="04121234567" required>
                </div>

                <div class="form-group">
                    <label>Correo Electrónico *</label>
                    <input type="email" id="cli-email" placeholder="nombre@correo.com" required>
                </div>

                <button type="submit" class="btn btn-success">
                    ${ICONS.check} Agendar Cita Ahora
                </button>
            </form>
        </div>
    `;
}

// ============================================
// 7. CONFIRMACIÓN DE RESERVA
// ============================================
window.confirmarReserva = async function(event) {
    event.preventDefault();

    const nombre = document.getElementById('cli-nombre').value;
    const telefono = document.getElementById('cli-telefono').value;
    const email = document.getElementById('cli-email').value;
    const servicio = estado.servicios.find(s => s.id_servicio === estado.borradorReserva.id_servicio);

    try {
        const resCliente = await fetch(`${API_URL}/clientes`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre, telefono, email })
        });

        if (!resCliente.ok) {
            const errorCli = await resCliente.json();
            alert('Error con el cliente: ' + (errorCli.error || 'Desconocido'));
            return;
        }

        const dataCliente = await resCliente.json();
        const id_cliente_obtenido = dataCliente.id_cliente;

        const datosReservaFinal = {
            id_cliente: id_cliente_obtenido,
            id_empleado: estado.borradorReserva.id_empleado,
            fecha_hora: estado.borradorReserva.fecha_hora,
            notas: "Reserva autogestionada desde la web",
            servicios: [{
                id_servicio: servicio.id_servicio,
                precio_aplicado: servicio.precio
            }]
        };

        const resReserva = await fetch(`${API_URL}/reservas`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosReservaFinal)
        });

        if (resReserva.ok) {
            const resultado = await resReserva.json();
            alert(`Reserva confirmada!\nCódigo de cita: #${resultado.id_reserva || 'Generado'}\n\nTe enviaremos los detalles al correo.`);

            estado.borradorReserva = { id_servicio: null };
            estado.vistaActual = 'cliente';
            render();
        } else {
            const errorRes = await resReserva.json();
            alert('No se pudo procesar: ' + (errorRes.error || 'Error interno'));
        }

    } catch (error) {
        console.error('Error enviando reserva:', error);
        alert('Error de conexión. Intenta de nuevo.');
    }
};

// ============================================
// 8. VISTA ADMIN - RESERVAS
// ============================================
function generarVistaAdminReservas() {
    let filasTabla = estado.reservas.length === 0 ?
        '<tr><td colspan="6" style="text-align: center; padding: 20px; color: var(--text-secondary);">No hay reservas registradas</td></tr>' : '';

    estado.reservas.forEach(r => {
        const fechaLocal = new Date(r.fecha_hora).toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' });
        let statusClass = 'status-pending';
        if (r.estado === 'confirmada') statusClass = 'status-confirmed';
        if (r.estado === 'completada') statusClass = 'status-completed';
        if (r.estado === 'cancelada') statusClass = 'status-cancelled';

        filasTabla += `
            <tr>
                <td><strong>#${r.id_reserva}</strong></td>
                <td>${r.cliente}</td>
                <td>${r.estilista}</td>
                <td>${fechaLocal}</td>
                <td><span class="status-badge ${statusClass}">${r.estado}</span></td>
                <td>
                    <select class="status-select" onchange="actualizarEstadoReserva(${r.id_reserva}, this.value)">
                        <option value="">Cambiar...</option>
                        <option value="pendiente">Pendiente</option>
                        <option value="confirmada">Confirmada</option>
                        <option value="completada">Completada</option>
                        <option value="cancelada">Cancelada</option>
                    </select>
                </td>
            </tr>`;
    });

    return `
        <div>
            <h2>Gestión de Citas</h2>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Cliente</th>
                            <th>Estilista</th>
                            <th>Fecha/Hora</th>
                            <th>Estado</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>${filasTabla}</tbody>
                </table>
            </div>
        </div>
    `;
}

// ============================================
// 9. VISTA ADMIN - SERVICIOS
// ============================================
function generarVistaAdminServicios() {
    let filas = estado.servicios.length === 0 ?
        '<tr><td colspan="5" style="text-align:center; padding: 20px; color: var(--text-secondary);">No hay servicios registrados.</td></tr>' : '';

    estado.servicios.forEach(s => {
        filas += `
            <tr>
                <td>${s.nombre}</td>
                <td>${s.descripcion || '-'}</td>
                <td>$${s.precio}</td>
                <td>${s.duracion_min} min</td>
                <td>
                    <button class="btn btn-primary" style="width:auto; padding: 6px 12px; margin-right: 6px;" onclick="abrirModalServicio(${s.id_servicio}, '${s.nombre}', '${s.descripcion || ''}', ${s.precio}, ${s.duracion_min})">Editar</button>
                    <button class="btn" style="width:auto; padding: 6px 12px; background: var(--error); color: white;" onclick="eliminarServicio(${s.id_servicio})">Eliminar</button>
                </td>
            </tr>
        `;
    });

    return `
        <div class="fade-in">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                <h2 style="margin-bottom: 0;">Gestión de Servicios</h2>
                <button class="btn btn-success" style="width: auto;" onclick="abrirModalServicio()">+ Añadir Servicio</button>
            </div>

            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Duración</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>${filas}</tbody>
                </table>
            </div>
        </div>

        <!-- MODAL -->
        <div id="modal-servicio" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.4); z-index:2000; justify-content:center; align-items:center;">
            <div style="background: var(--white); border-radius: var(--radius); padding: 32px; width: 100%; max-width: 460px; box-shadow: 0 8px 32px rgba(0,0,0,0.15); position: relative;">
                <h3 id="modal-serv-titulo" style="margin-bottom: 24px;">Añadir Servicio</h3>
                <input type="hidden" id="modal-serv-id">

                <div class="form-group">
                    <label>Nombre del servicio *</label>
                    <input type="text" id="modal-serv-nombre" placeholder="Ej. Corte clásico">
                </div>
                <div class="form-group">
                    <label>Descripción</label>
                    <textarea id="modal-serv-descripcion" placeholder="Descripción del servicio..."></textarea>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Precio ($) *</label>
                        <input type="number" step="0.01" id="modal-serv-precio" placeholder="Ej. 15.00">
                    </div>
                    <div class="form-group">
                        <label>Duración (min) *</label>
                        <input type="number" id="modal-serv-duracion" placeholder="Ej. 30">
                    </div>
                </div>

                <div style="display: flex; gap: 12px; margin-top: 8px;">
                    <button class="btn btn-success" onclick="guardarServicioModal()">Guardar</button>
                    <button class="btn" style="background: var(--border); color: var(--text);" onclick="cerrarModalServicio()">Cancelar</button>
                </div>
            </div>
        </div>
    `;
}

window.abrirModalServicio = function(id = null, nombre = '', descripcion = '', precio = '', duracion_min = '') {
    document.getElementById('modal-servicio').style.display = 'flex';
    document.getElementById('modal-serv-id').value = id || '';
    document.getElementById('modal-serv-nombre').value = nombre;
    document.getElementById('modal-serv-descripcion').value = descripcion;
    document.getElementById('modal-serv-precio').value = precio;
    document.getElementById('modal-serv-duracion').value = duracion_min;
    document.getElementById('modal-serv-titulo').textContent = id ? 'Editar Servicio' : 'Añadir Servicio';
};

window.cerrarModalServicio = function() {
    document.getElementById('modal-servicio').style.display = 'none';
};

window.guardarServicioModal = async function() {
    const id = document.getElementById('modal-serv-id').value;
    const body = {
        nombre: document.getElementById('modal-serv-nombre').value,
        descripcion: document.getElementById('modal-serv-descripcion').value,
        precio: parseFloat(document.getElementById('modal-serv-precio').value),
        duracion_min: parseInt(document.getElementById('modal-serv-duracion').value)
    };

    if (!body.nombre || !body.precio || !body.duracion_min) return alert('Completa los campos obligatorios.');

    const url = id ? `${API_URL}/servicios/${id}` : `${API_URL}/servicios`;
    const method = id ? 'PUT' : 'POST';

    try {
        const res = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        if (res.ok) {
            cerrarModalServicio();
            await cargarServicios();
            render();
        } else {
            const err = await res.json();
            alert('Error: ' + (err.error || 'Desconocido'));
        }
    } catch (error) {
        alert('Error de conexión');
    }
};

window.eliminarServicio = async function(id) {
    if (!confirm('¿Eliminar este servicio?')) return;
    try {
        const res = await fetch(`${API_URL}/servicios/${id}`, { method: 'DELETE' });
        if (res.ok) {
            await cargarServicios();
            render();
        } else {
            alert('Error al eliminar');
        }
    } catch (error) {
        alert('Error de conexión');
    }
};

window.guardarNuevoServicio = async function(event) {
    event.preventDefault();

    const nuevoServicio = {
        nombre: document.getElementById('serv-nombre').value,
        descripcion: document.getElementById('serv-desc').value,
        precio: parseFloat(document.getElementById('serv-precio').value),
        duracion_min: parseInt(document.getElementById('serv-duracion').value)
    };

    try {
        const respuesta = await fetch(`${API_URL}/servicios`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoServicio)
        });

        if (respuesta.ok) {
            alert('Servicio guardado con éxito!');
            await cargarServicios();
            render();
        } else {
            const errorData = await respuesta.json();
            alert('Error: ' + (errorData.error || 'Desconocido'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión.');
    }
};

// ============================================
// 10. VISTA ADMIN - EMPLEADOS
// ============================================
function generarVistaAdminEmpleados() {
    let filas = estado.empleados.length === 0 ?
        '<tr><td colspan="4" style="text-align:center; padding: 20px; color: var(--text-secondary);">No hay estilistas registrados.</td></tr>' : '';

    estado.empleados.forEach(e => {
        filas += `
            <tr>
                <td>${e.nombre}</td>
                <td>${e.especialidad || '-'}</td>
                <td>${e.telefono || '-'}</td>
                <td>
                    <button class="btn btn-primary" style="width:auto; padding: 6px 12px; margin-right: 6px;" onclick="abrirModalEmpleado(${e.id_empleado}, '${e.nombre}', '${e.especialidad || ''}', '${e.telefono || ''}')">Editar</button>
                    <button class="btn" style="width:auto; padding: 6px 12px; background: var(--error); color: white;" onclick="eliminarEmpleado(${e.id_empleado})">Eliminar</button>
                </td>
            </tr>
        `;
    });

    return `
        <div class="fade-in">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                <h2 style="margin-bottom: 0;">Gestión de Estilistas</h2>
                <button class="btn btn-success" style="width: auto;" onclick="abrirModalEmpleado()">+ Añadir Estilista</button>
            </div>

            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Especialidad</th>
                            <th>Teléfono</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>${filas}</tbody>
                </table>
            </div>
        </div>

        <!-- MODAL -->
        <div id="modal-empleado" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.4); z-index:2000; justify-content:center; align-items:center;">
            <div style="background: var(--white); border-radius: var(--radius); padding: 32px; width: 100%; max-width: 460px; box-shadow: 0 8px 32px rgba(0,0,0,0.15); position: relative;">
                <h3 id="modal-emp-titulo" style="margin-bottom: 24px;">Añadir Estilista</h3>
                <input type="hidden" id="modal-emp-id">

                <div class="form-group">
                    <label>Nombre completo *</label>
                    <input type="text" id="modal-emp-nombre" placeholder="Ej. Juan Pérez">
                </div>
                <div class="form-group">
                    <label>Especialidad</label>
                    <input type="text" id="modal-emp-especialidad" placeholder="Ej. Barbería">
                </div>
                <div class="form-group">
                    <label>Teléfono</label>
                    <input type="text" id="modal-emp-telefono" placeholder="Ej. 04120000000">
                </div>

                <div style="display: flex; gap: 12px; margin-top: 8px;">
                    <button class="btn btn-success" onclick="guardarEmpleadoModal()">Guardar</button>
                    <button class="btn" style="background: var(--border); color: var(--text);" onclick="cerrarModalEmpleado()">Cancelar</button>
                </div>
            </div>
        </div>
    `;
}

window.abrirModalEmpleado = function(id = null, nombre = '', especialidad = '', telefono = '') {
    document.getElementById('modal-empleado').style.display = 'flex';
    document.getElementById('modal-emp-id').value = id || '';
    document.getElementById('modal-emp-nombre').value = nombre;
    document.getElementById('modal-emp-especialidad').value = especialidad;
    document.getElementById('modal-emp-telefono').value = telefono;
    document.getElementById('modal-emp-titulo').textContent = id ? 'Editar Estilista' : 'Añadir Estilista';
};

window.cerrarModalEmpleado = function() {
    document.getElementById('modal-empleado').style.display = 'none';
};

window.guardarEmpleadoModal = async function() {
    const id = document.getElementById('modal-emp-id').value;
    const body = {
        nombre: document.getElementById('modal-emp-nombre').value,
        especialidad: document.getElementById('modal-emp-especialidad').value,
        telefono: document.getElementById('modal-emp-telefono').value
    };

    if (!body.nombre) return alert('El nombre es obligatorio.');

    const url = id ? `${API_URL}/empleados/${id}` : `${API_URL}/empleados`;
    const method = id ? 'PUT' : 'POST';

    try {
        const res = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        if (res.ok) {
            cerrarModalEmpleado();
            await cargarEmpleados();
            render();
        } else {
            const err = await res.json();
            alert('Error: ' + (err.error || 'Desconocido'));
        }
    } catch (error) {
        alert('Error de conexión');
    }
};

window.eliminarEmpleado = async function(id) {
    if (!confirm('¿Eliminar este estilista?')) return;
    try {
        const res = await fetch(`${API_URL}/empleados/${id}`, { method: 'DELETE' });
        if (res.ok) {
            await cargarEmpleados();
            render();
        } else {
            alert('Error al eliminar');
        }
    } catch (error) {
        alert('Error de conexión');
    }
};

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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoEmpleado)
        });

        if (respuesta.ok) {
            alert('Estilista registrado con éxito!');
            document.getElementById('emp-nombre').value = '';
            document.getElementById('emp-especialidad').value = '';
            document.getElementById('emp-telefono').value = '';
            await cargarEmpleados();
        } else {
            const errorData = await respuesta.json();
            alert('Error: ' + (errorData.error || 'Desconocido'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión.');
    }
};

// ============================================
// 11. VISTA LOGIN
// ============================================
function generarVistaLogin() {
    return `
        <div class="form-container">
            <h2>Acceso Restringido</h2>
            <p style="color: var(--text-secondary); margin-bottom: 24px;">Ingresa la contraseña de administrador para acceder al panel de gestión.</p>

            <form onsubmit="intentarLogin(event)" style="display: flex; flex-direction: column; gap: 20px;">
                <div class="form-group">
                    <label>Contraseña *</label>
                    <input type="password" id="admin-pass" placeholder="Ingresa la contraseña" required>
                </div>
                <button type="submit" class="btn btn-primary">
                    ${ICONS.login} Entrar al Panel
                </button>
            </form>
        </div>
    `;
}

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
            estado.vistaActual = 'admin-reservas';
            estado.menuAbierto = false;
            
            const sidebar = document.querySelector('.sidebar');
            const overlay = document.querySelector('.sidebar-overlay');
            const mainContainer = document.querySelector('.main-container');
            const menuBtn = document.querySelector('.menu-btn');
            
            if (sidebar) sidebar.classList.remove('open');
            if (overlay) overlay.classList.remove('visible');
            if (mainContainer) mainContainer.classList.remove('with-sidebar');
            if (menuBtn) {
                menuBtn.innerHTML = `${ICONS.menu} Menú`;
            }
            
            render();
        } else {
            document.getElementById('admin-pass').value = '';
            alert('Contraseña incorrecta. Acceso denegado.');
        }
    } catch (error) {
        console.error('Error en login:', error);
        alert('Error de conexión.');
    }
};

// ============================================
// 12. CAMBIO DE VISTA
// ============================================
window.cambiarVista = function(nuevaVista) {
    estado.vistaActual = nuevaVista;
    estado.menuAbierto = false;
    
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const mainContainer = document.querySelector('.main-container');
    const menuBtn = document.querySelector('.menu-btn');
    
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('visible');
    if (mainContainer) mainContainer.classList.remove('with-sidebar');
    if (menuBtn) {
        menuBtn.innerHTML = `${ICONS.menu} Menú`;
    }
    
    render();
};

// ============================================
// 13. CERRAR SESIÓN
// ============================================
window.cerrarSesion = function() {
    estado.autenticado = false;
    estado.vistaActual = 'cliente';
    estado.menuAbierto = false;
    
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const mainContainer = document.querySelector('.main-container');
    const menuBtn = document.querySelector('.menu-btn');
    
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('visible');
    if (mainContainer) mainContainer.classList.remove('with-sidebar');
    if (menuBtn) {
        menuBtn.innerHTML = `${ICONS.menu} Menú`;
    }
    
    render();
};

// ============================================
// 14. ACTUALIZAR ESTADO DE RESERVA
// ============================================
window.actualizarEstadoReserva = async function(id_reserva, nuevoEstado) {
    if (!nuevoEstado) return;

    try {
        const respuesta = await fetch(`${API_URL}/reservas/${id_reserva}/estado`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ estado: nuevoEstado })
        });

        if (respuesta.ok) {
            await cargarReservas();
            render();
        } else {
            const errorData = await respuesta.json();
            alert('Error: ' + (errorData.error || 'Desconocido'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión.');
    }
};

// ============================================
// INICIAR APLICACIÓN
// ============================================
init();