let divProductos = document.getElementById('divProducto');
let divProductoSemana = document.getElementById('divProductoSemana');
let mostrarCompra = document.getElementById("mostrar-compra");
let divEventos = document.getElementById("divEventos")

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
async function cargarEventos() {
    let promesa = await fetch('js/eventos.json')
    let productosJSON = await promesa.json()
    return productosJSON
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

cargarEventos().then(data => {
    data.forEach((evento, indice) => {
        divEventos.innerHTML += `
<div class="four columns">
    <div class="card">
    <img src="img/${evento.img}">
        <div class="info-card">
        <h2>${evento.nombre}</h2>
            <img src="img/estrellas.png">
            <p>S/. ${evento.precio}</p>
            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar al carrito</a>
        </div>
    </div>
</div>
 `

    })
})