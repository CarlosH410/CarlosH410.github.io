// Cargo los clientes
const listaClientes = [];

listaClientes.push(new Cliente("Gonzalo", "Rodriguez", 2000));
listaClientes.push(new Cliente("Fernando", "Gutierrez", 1000));
listaClientes.push(new Cliente("Camila", "Fernandez", 3000));
listaClientes.push(new Cliente("Joaquin", "Apellido2", 1500));
listaClientes.push(new Cliente("Adriana", "Apellido3", 500));
listaClientes.push(new Cliente("Carlos", "Huallpa", 600));
listaClientes.push(new Clientes("Alfredo" , "Fernandes" ,1500));
listaClientes.push(new Clientes("Chino" , "Peca" ,2000));
listaClientes.push(new Cliente("David", "Velazques", 200));


// Filtrar clientes
const inputBuscar = document.getElementById("buscarCliente");

inputBuscar.addEventListener("input", () => {

    const valor = inputBuscar.value;

    // Filtro clientes por nombre y apellido
    const clientesFiltrados = listaClientes.filter( (cliente) => {

        const nombreYApellido = `${cliente.nombre} ${cliente.apellido}`.toLowerCase();

        return nombreYApellido.includes(valor.toLowerCase());
    });

    cargarClientesAHTML(clientesFiltrados);

});

function cargarClientesAHTML (clientesFiltrados) {

    const clientesEncontrados = document.getElementById("clientesEncontrados");
    clientesEncontrados.innerHTML = "";

    // Recorro los clientes filtrados y construyo el HTML
    clientesFiltrados.forEach( (cliente) => {

        // Creo los elementos
        const div = document.createElement("div");
        div.className = "cliente";

        const h5 = document.createElement("h5");
        h5.innerText = `${cliente.nombre} ${cliente.apellido}`;

        const p = document.createElement("p");
        p.innerHTML = `<strong>Saldo:</strong> $${cliente.saldo}`;

        const inputSaldo = document.createElement("input");

        const botonCargarSaldo = document.createElement("button");
        botonCargarSaldo.innerText = "Cargar";

        // Evento del botón de cargar saldo
        botonCargarSaldo.addEventListener("click", () => {

            let saldo = inputSaldo.value;

            if(saldo === "") {
                alert("Tiene que ingresar algún valor");
            } else {

                saldo = parseInt(saldo);

                if(isNaN(saldo) || saldo <= 0) {
                    alert("Saldo inválido. Ingrese saldo mayor o igual a 0");
                } else {

                    cliente.sumarSaldo(saldo);

                    cargarClientesAHTML(listaClientes);
                }
            }
        });

        div.append(h5, p, inputSaldo, botonCargarSaldo);

        clientesEncontrados.append(div);
    });

}

// Al momento de iniciar la página, cargo todos los clientes
cargarClientesAHTML(listaClientes);