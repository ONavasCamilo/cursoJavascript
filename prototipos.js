// Array.prototype.mayoresQueTres = function () {
//     var arregloModificado = []

//     for (let i = 0; i < this.length; i++) {
//         if (this[i] > 3){
//             arregloModificado.push(false)
//     } else {
//         arregloModificado.push(this[i])
//     }
// } return arregloModificado
// }

// let arreglo = [1, 2, 3, 4, 5]
// let nuevoArreglo = arreglo.mayoresQueTres()

// console.log(nuevoArreglo)



class Latinoamerica {
    constructor() {
        this.paises = []
    }
}

Latinoamerica.prototype.agregarPais = function(pais){
    this.paises.push(pais)
}

let continente = new Latinoamerica()
continente.agregarPais('Mexico')
console.log(continente.paises)