// Uso de Fetch API para simular la carga de datos
function cargarProductos() {
    const contenedor = document.getElementById('lista-productos');
    
    // Aquí podrías poner la URL de tu backend real. 
    // Usamos JSONPlaceholder como prueba de concepto.
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) throw new Error('Error en la red');
            return response.json();
        })
        .then(data => {
            contenedor.innerHTML = '';
            // Simulamos que los "usuarios" son "productos médicos"
            data.slice(0, 3).forEach(item => {
                const div = document.createElement('div');
                div.innerHTML = `<strong>Producto:</strong> ${item.name} <br> <strong>Distribuidor:</strong> ${item.company.name}`;
                div.style.marginBottom = '10px';
                contenedor.appendChild(div);
            });
        })
        .catch(error => {
            contenedor.innerHTML = 'Error al cargar el catálogo.';
            console.error('Hubo un problema con la petición Fetch:', error);
        });
}

// Cargar al iniciar y al hacer clic en el botón
document.addEventListener('DOMContentLoaded', cargarProductos);
document.getElementById('cargar-btn').addEventListener('click', cargarProductos);