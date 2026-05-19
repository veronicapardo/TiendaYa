let productos = [
    {
        id: 1,
        nombre: "Laptop",
        precio: 500
    },
    {
        id: 2,
        nombre: "Mouse",
        precio: 20
    }
];

function mostrarProductos(){

    let html = `
        <h2>Productos</h2>

        <table>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
            </tr>
    `;

    productos.forEach(p => {
        html += `
            <tr>
                <td>${p.id}</td>
                <td>${p.nombre}</td>
                <td>${p.precio}</td>
            </tr>
        `;
    });

    html += `</table>`;

    document.getElementById("contenido").innerHTML = html;
}

function mostrarPedidos(){

    document.getElementById("contenido").innerHTML = `
        <h2>Pedidos</h2>
        <p>Aquí aparecerán los pedidos.</p>
    `;
}