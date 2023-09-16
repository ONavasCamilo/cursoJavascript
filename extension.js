class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre,
            this.edad = edad
    }
    saludad() {
        console.log(`hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}


class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia) {
        super(nombre, edad)
        this.añosDeExperiencia = añosDeExperiencia
    }
    codear() {
        console.log(
            `Soy ${this.nombre}, llevo ${this.añosDeExperiencia} años programando y tengo ${this.edad} años de edad`)
    }
}

let camilo = new Persona('Camilo', 21)
let programador = new Programador('carlos', 37, 4)

// camilo.saludad()

programador.codear()

