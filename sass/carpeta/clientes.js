class Cliente {

    constructor(nombre, apellido, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }

    sumarSaldo (saldo) {
        this.saldo += saldo;
    }
}