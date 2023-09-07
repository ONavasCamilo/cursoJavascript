// var deportes = { 
//     conBalon: ["Football", "Basketball", "Rugby"], 
//     sinBalon: ["Boxeo", "Surf", "Trekking"],
// };

var persona = {
    nombre: "Lucas",
    edad: "26",
   // objeto en un objeto
    estudios: { esProgramador: true}
}

// console.log(persona.edad);

persona.nombre = 'Martin';
// console.log('persona.nombre)

persona.edad = 32;
// console.log(persona.edad);

// reescribiendo valor ya creado
// var autos = {};
// autos.marcas = ['Ford', 'Audi', 'Ferrari'];
// // eliminar 
//  delete autos.marcas;
// console.log(autos);

// var misFunciones = {
//     saludar: function() {
//         console.log("Hola");
//     },
// };

// misFunciones.saludar();

var atuendos = {
    manos: ['Guantes', 'Anillos'] ,
     pies: ['Zapatos', 'Soquetes']
};

// console.log(atuendos.manos);

atuendos["Piernas"] = ['Bermudas', 'Pantalones'];
// console.log(atuendos);


// var comidas = {};
// var diferenciaDeNotaciones = function(propUno, propDos){
//     comidas[propUno] = ['Frutas', 'Vegetales'];
//     comidas[propDos] = ['Hamburguesa', 'Papitas'];
// };

// diferenciaDeNotaciones('saludable','noSaludable');
// console.log(comidas);


// var libro = {
//     autor: 'Borger',
//      genero: 'Policial',
//       año: 1990
// };
// hasOwnProperty, saber si var libro tiene propiedad
// var tienePropiedad = libro.hasOwnProperty('autor');

// console.log(tienePropiedad);

// ver todas las propiedades
// var todasLasPropiedades = Object.keys(libro);
// console.log(todasLasPropiedades);


// var mundo = {
//     continentes: 7,
//      paises: 195,
//       oceanos: 5
// };
// for(var prop in mundo){
//     console.log('Esta es la propiedad= ' + prop);
//     console.log('Este es el valor: ' + mundo[prop]);
// };




var mascota = {
    animar: 'perro',
     raza: 'Ovejero alemán',
      amistoso: true,
       dueña: 'María López',
        info: function(){
            console.log('La dueña del ' + this.animar  + ' ' + this.raza + ' se llama ' + this.dueña);
    },
};

mascota.info();