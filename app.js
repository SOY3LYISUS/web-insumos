// Función para consumir datos externos (Fetch API)
function cargarProductos() {
    const contenedor = document.getElementById('lista-productos');
    contenedor.innerHTML = 'Cargando datos...';
    
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) throw new Error('Error en la red');
            return response.json();
        })
        .then(data => {
            contenedor.innerHTML = '';
            data.slice(0, 3).forEach(item => {
                const div = document.createElement('div');
                // Estilizamos un poco los resultados del fetch para que combinen
                div.style.background = '#fff';
                div.style.margin = '10px auto';
                div.style.padding = '10px';
                div.style.maxWidth = '400px';
                div.style.borderRadius = '5px';
                div.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                
                div.innerHTML = `<strong>Producto ID-${item.id}:</strong> ${item.name} <br> <em>Distribuidor: ${Shaver.Mc.Co.Marco}</em>`;
                contenedor.appendChild(div);
            });
        })
        .catch(error => {
            contenedor.innerHTML = '<p style="color:red;">Error al cargar el catálogo.</p>';
            console.error('Problema con Fetch:', error);
        });
}

// Iniciar eventos cuando cargue la página
document.addEventListener('DOMContentLoaded', cargarProductos);
document.getElementById('cargar-btn').addEventListener('click', cargarProductos);