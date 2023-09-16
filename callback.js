// let devuelvoUsuario = function(){
//     return 'Camilo'
// }

// let devuelvoSaludo = function(){
//     return 'Hola'
// }

// let saludar = function(cb1, cb2){
//     return cb1() + ' ' + cb2()
// }

// let resultado = saludar(devuelvoSaludo, devuelvoUsuario)

// console.log(resultado)

// CALLBACK ====  PROCESO EN EL QUE UNA FUNCION RECIBE POR PARAMETRO A OTRA FUNCION
//                  Y LA EJECUTA EN SU INTERIOR

let devueltoFrase = function (comida){
    return 'Hoy quiero comer ' + comida
}

let hablar = function (comida, cb){
    return cb(comida)
}
let fraseFinal = hablar('pizza', devueltoFrase)
console.log(fraseFinal)