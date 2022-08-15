/**const productos = [];

for(let i = 0 ; i < 3; i++){
    const nombreProducto = prompt("ingrse el nombre");

    const precioeDelProducto = prompt("ingrse el nombre");

    const stockDelProducto = prompt("ingrse el nombre");

    const producto = new producto
    (nombreProducto, precioeDelProducto, stockDelProducto);

    productos.push(producto)


}

console.log(productos)

class Producto {

    constructor (nombre, precio, stock) {

        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;

        this.vendido = false;
        this.estaEnOferta = false;
    }

}

const productos = ["busos, remeras"];




/**for(let i = 0; i < 3; i++) {
    const nombreProducto = prompt("Ingrese el nombre del producto");
    const precioDelProducto = parseInt(prompt("Ingrese el precio del producto"));
    const stockDelProducto = parseInt(prompt("Ingrese el stock del producto"));

    const producto = new Producto(nombreProducto, precioDelProducto, stockDelProducto);

    productos.push(producto);

}*/

const productos = ["busos, remeras, zapatillas, gorras"];

productos.forEach( (producto) => {
    
    alert(productos);
});

const ingresar =parseInt(prompt("te interesa alguno?"))