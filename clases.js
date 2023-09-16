// function Auto(puertas, color, marca, año, ruedas) {
//     this.puertas = puertas
//     this.color = color
//     this.marca = marca
//     this.año = año
//     this.ruedas = ruedas

//     this.informacion = function(){
//         console.log('este es un ' + this.marca + ' de color ' + this.color)
//     }
// }

// let miPrimerAuto = new Auto(2, 'rojo', 'ferrari', 2018, 4)

// // console.log(miPrimerAuto)
// // console.log(miPrimerAuto.marca)

// miPrimerAuto.informacion()

// class Auto {
//     constructor(puertas, color, marca, año, ruedas) {
//         this.puertas = puertas
//         this.color = color
//         this.marca = marca
//         this.año = año
//         this.ruedas = ruedas
//     }
//     informacion(){
//         console.log('este es un ' + this.marca + ' de color ' + this.color)
//     }
// }


// let miSegundoAuto = new Auto(4, 'blanco', 'Fiat', 2015, 4)
// // console.log(miSegundoAuto)
// miSegundoAuto.informacion()

class Football{
    constructor(jugador){
        this.jugador = jugador
    }
    obtenerNombre(){
        console.log(this.jugador)
    }
}

let argentina = new Football('Messi')
let brasil = new Football('pele')

argentina.obtenerNombre()
brasil.obtenerNombre()