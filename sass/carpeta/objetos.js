class Producto {

    constructor (nombre, precio, stock) {

        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;

        this.vendido = false;
        this.estaEnOferta = false;
    }

}

const productos = [];

for(let i = 0; i < 3; i++) {
    const nombreProducto = prompt("Ingrese el nombre del producto");
    const precioDelProducto = parseInt(prompt("Ingrese el precio del producto"));
    const stockDelProducto = parseInt(prompt("Ingrese el stock del producto"));

    const producto = new Producto(nombreProducto, precioDelProducto, stockDelProducto);

    productos.push(producto);
}

/** MODIFICAR ARRAY DE OBJETOS */

const productosModificados = productos.map( (producto) => {

    producto.categoria = "Legumbres";

    return  producto;
});

console.log(productosModificados);

/** OBTENER LOS NOMBRES DE LOS PRODUCTOS EN OTRO ARRAY */

// const nombresProductos = productos.map( (producto) => {
//     return producto.nombre;
// });
//
// console.log(nombresProductos);

/** RECORRER EL ARRAY E IMPRIMIR EL NOMBRE */
// productos.forEach( (producto) => {
//
//     alert(producto.nombre);
//
// });

// const productoYogurt = new Producto("Yogurt", 15, 20);
