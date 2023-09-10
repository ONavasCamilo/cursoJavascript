var listaDeCompras = [];

listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';

 console.log(listaDeCompras.length);


listaDeCompras[1];

var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);


Lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa', ''].length;
console.log(nombres);

var nombres = 'Matias'.length;
console.log(nombres);

var colores = ['Amarillo','Azul'];

//  push() añade uno o más elementos al final de un arreglo, y devuelve la nueva longitud del array.
colores.push('rojo');   

// método unshift() agrega uno o más elementos al inicio de un arreglo, y devuelve la nueva longitud del array.
colores.unshift('verde');

// método pop() elimina y devuelve el último elemento de un arreglo.
colores.pop();

// El método shift() elimina y devuelve el primer elemento de un arreglo.
colores.shift();

console.log(colores);

var pintores = ['Picasso','Velazquez','Van Gogh','Dalí']
var incluyeDali = pintores.includes('Monet');
console.log(incluyeDali);

var numeros = [10, 6, 8, 9];
var cumplenCondicion = numeros.every((num) => {
    return num > 5;
});
console.log(cumplenCondicion);


var palabra = 'Henri';
var palabraSeparada = palabra.split('');
palabraSeparada.pop();
palabraSeparada.push('y');
console.log(palabraSeparada);

var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);

 var numeros = [1, 2, 3, 4];
// te da cada uno de los números de manera individual
numeros.forEach((num) => console.log(num));
// aquellos numeros iguales a 3 que se encuentren en el array
numeros.forEach(num => {
   if(num === 3) {
      console.log(num)
}
});

// El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.


// ELIMINANDO EL ULTIMO ELEMENTO (4)
numeros.pop();
console.log(numeros);


// El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento.
// La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.
var masUno = numeros.map(num => {
   return num + 1;
});
console.log(masUno);




// El método includes() determina si un arreglo
//  incluye o contiene un elemento específico. Devuelve true o false en cada caso.

// El método every() determina si todos los elementos en un arreglo satisfacen una misma condición.

// El método split() convierte un string en un arreglo, donde cada elemento contendrá un sub-string, 
// dependiendo del parámetro divisor que indiquemos.

// El método join() convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena.

var arr = [1, 2, 3, 4, 5];

for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};

function encontrarLaLetraP(string) {
    var letras = string.split('');

    for (let i = 0; i < letras.length; i++) {
        if (letras[i] === 'p') {
            console.log('Si contiene a P');
        }
    }
}


encontrarLaLetraP('JavaScrit');
encontrarLaLetraP('Henry');


var arr = [];

while(arr.length < 250) {
    arr.push('CELE TE AMO');
}

console.log(arr);


// BUCLE INFINITO Y COMO EVITARLOS WE
var arr = [];
var n = 1;
while (n < 3) {
    arr.push(Math.random());
}

var arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++){
  console.log(arr[i]);
};


function encontrarLetraP(str) {
  var letras  = str.split('');

  for(let i = 0; i < letras.length; i++){
    if (letras[i] === "p") {
      console.log('Si contiene a P');
    }
  }
}

encontrarLetraP('JavaScript');
encontrarLetraP('henry');


