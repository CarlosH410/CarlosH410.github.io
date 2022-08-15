
for(let i = 1; i <= 1; i++) {

    const nombreAlumno = prompt("Ingrese nombre del alumno " + i);

    let promedio = 0;

    for(let j = 1; j <= 3; j++) {
        const nota = parseInt(prompt("Ingrese la nota " + j));

        promedio = promedio + nota;
    }

    promedio = parseInt(promedio / 3);

   

    alert("El nombre del alumno " + i + " es: " + nombreAlumno + " y su promedio: " + promedio);
}

let numero = parseInt(prompt("Ingrese su promedio"));

while(numero < 7) {
    numero = parseInt(prompt("Ingrese su promedio"));
}

for(let i = 1; i <= numero; i++) {
    console.log(i);
}


console.log("aprobaste");




let nombre = "rodrigo"
const edad = 15


nombre = "Gonsalo"
edad = 12 


const numero1 = 10
const numero2 = 20 






const nota1 = parseInt(prompt("ingrese la primera nota"));
const nota2 = parseInt(prompt("ingrese la segunda nota"));

const promedio = (nota1 + nota2) / 2;

alert ("su promedio es: " + promedio)


/*
const numero = 5
let multiplicacion = numero * 2; 

if (multiplicacion == 10 ) {
    console.log ("el numero es igual a 10");
} else {
    console.log ("el numero no es sigual a 10")
}


const edad = prompt("ingrese su edad")

if (edad >= 18 ) {
    console.log("acceso permitido");
} else {
    console.log( "no puede ingresar");
}


const edad = parseInt(prompt("ingrese su edad"));

if (edad < 19 ) {
    console.log("usted es menor de edad");
} else if (edad < 30) {
    console.log( "usted tiene entre 18 y 30 años");
} else if (edad < 60) {
    console.log ("usted tiene entre 30 y 60 años");
} else {
    console.log("usted tiene mas de 60 años")
}


const numero = prompt("ingrese un numero");

if( (numero >=10) && (numero <=50)) {
    alert("el numero esta entre 10 y 50")
} else {
    alert("el numero es mayor a 50")
}

const nombreAlumno = prompt("ingrese su nombre");
const apellidoAlumno = prompt ("ingrese su apellido")


alert ("su nombre es: " + nombreAlumno + " "+ apellidoAlumno )

const ingresar = parseInt(prompt("quisiera ver nuestros productos?"))

if (ingresar !== "si" ) {

    console.log("hollaa")

} else {
    console.log( "no puede ingresar");
}

const productos = ["busos, remeras, zapatillas, gorras"];

productos.forEach( (producto) => {
    
    alert(productos);
});

const entrar =parseInt(prompt("te interesa alguno?")) 
*/
