//Clase Cliente 
class Cliente {
    constructor(nombre, apellido, telefono, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
    }
}


let clientes = []
if (localStorage.getItem('Clientes')) {
    clientes = JSON.parse(localStorage.getItem('Clientes'))
} else {

    localStorage.setItem('Clientes', JSON.stringify(clientes))
}

let formClientes = document.getElementById('formCli') //Creando el formulario
let botonClientes = document.getElementById('botonClientes')
let divClientes = document.getElementById('divClientes')
let contador = 0;

formClientes.addEventListener('submit', (e) => {
    e.preventDefault()
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let telefono = document.getElementById('telefono').value
    let email = document.getElementById('email').value

    const cliente = new Cliente(nombre, apellido, telefono, email)

    clientes.push(cliente)

    localStorage.setItem('Clientes', JSON.stringify(clientes)) //Modifico la clase Cliente
    formClientes.reset()
})

botonClientes.addEventListener('click', () => {
    let arrayStorage = JSON.parse(localStorage.getItem('Clientes'))
    divClientes.innerHTML = ""
    arrayStorage.forEach((ClienteEnArray, indice) => {
        divClientes.innerHTML += `      
            <div id="cliente${indice}" style="width: 18rem;">
                    <table class="table">
                    <thead >
                        <tr>
                            <th scope="col">Cliente N°</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"> ${indice + 1}</td>
                            <td>${ClienteEnArray.nombre}</td>
                            <td>${ClienteEnArray.apellido}</td>
                            <td>${ClienteEnArray.telefono}</td>
                            <td>${ClienteEnArray.email}</td>
                        </tr>         
                    </tbody>
                    </table>
            </div> 
        `
    })
})