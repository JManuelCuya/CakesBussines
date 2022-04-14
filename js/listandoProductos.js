let divProductos = document.getElementById('divProducto');
let divProductoSemana = document.getElementById('divProductoSemana');

async function cargarProductos() {
    let promesa = await fetch('/js/productos.json')
    let productosJSON = await promesa.json()
    return productosJSON
}
async function cargarRotacionSemanal() {
    let promesa = await fetch('js/rotacionSemanal.json')
    let productosJSON = await promesa.json()
    return productosJSON
}

function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = cargarProductos.filter((ItemProducto) => {
            return ItemProducto.codigo === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

cargarProductos().then(data => {
    data.forEach((producto, indice) => {
        divProductos.innerHTML += `

    <div class="four columns">
    <div class="card">
       <img src="/img/${producto.img}" alt="${producto.nombre}">
        <div class="info-card">
            <h4>${producto.nombre}</h4>
            <p>${producto.presentacion}</p>
            <img src="/img/estrellas.png">
            <p class="precio">S/. ${producto.precio}</p>
            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar al carrito</a>
        </div>
    </div>
</div>
 `
    })
})

cargarRotacionSemanal().then(data => {
    data.forEach((producto, indice) => {
        divProductoSemana.innerHTML += `

<div class="four columns">
    <div class="card">
       <img src="img/${producto.img}" alt="${producto.nombre}">
        <div class="info-card">
            <h4>${producto.nombre}</h4>
            <p>${producto.presentacion}</p>
            <img src="img/estrellas.png">
            <p class="precio">S/. ${producto.precio} </p>
            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar al carrito</a>
        </div>
    </div>
</div>
 `
    })
})