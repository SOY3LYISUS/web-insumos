// Función para cargar tu catálogo propio
function cargarProductos() {
    const contenedor = document.getElementById('lista-productos');
    contenedor.innerHTML = ''; // Limpiamos el texto de "Cargando..."

    // AQUÍ ESTÁ TU NUEVA LISTA. Puedes editar el texto entre comillas o agregar más.
    const misInsumos = [
        { id: 1, nombre: "Pinza Quirúrgica Kelly Recta", marca: "MedTools" },
        { id: 2, nombre: "Bisturí de Acero Inoxidable No. 4", marca: "SurgiPro" },
        { id: 3, nombre: "Paquete de Gasas Estériles 10x10", marca: "CuracionesMX" }
    ];

    // Este código dibuja los recuadros en la pantalla
    misInsumos.forEach(item => {
        const div = document.createElement('div');
        div.style.background = '#fff';
        div.style.margin = '10px auto';
        div.style.padding = '10px';
        div.style.maxWidth = '400px';
        div.style.borderRadius = '5px';
        div.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        
        // Aquí es donde se define exactamente qué texto aparece en pantalla
        div.innerHTML = `<strong>Insumo #${item.id}:</strong> ${item.nombre} <br> <em>Marca: ${item.marca}</em>`;
        
        contenedor.appendChild(div);
    });
}

// Iniciar eventos cuando cargue la página
document.addEventListener('DOMContentLoaded', cargarProductos);
document.getElementById('cargar-btn').addEventListener('click', cargarProductos);