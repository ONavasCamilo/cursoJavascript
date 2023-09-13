// console.log(21%5);

//function devolverString(string){
//  return string;
//}

// function sonIguales(x, y) {
//     // Retorna true si "x" e "y" son iguales.
//     // De lo contrario, retorna false.
//     // Tu código:
//    if (x === y) {
//     console.log(true);
//    }  else if (x != y) {
//     console.log(false);

//    }
//  }

//  sonIguales(13, 13);


// function esPar(num) {
//   // Retorna true si "num" es par.
//   // De lo contrario, retorna false.
//   // Tu código:
//   if(num % 2 !==0 ) console.log(true);
//   else console.log(false);
// }

// esPar(6);


// function esPositivo(num) {
// La función recibe un entero. Devuelve como resultado un string que indica si el número
// es positivo o negativo.
// Si el número es positivo ---> "Es positivo".
// Si el número es negativo ---> "Es negativo".
// Si el número es 0, devuelve false.
// Tu código:
// if (num > 0 ) {
//    console.log('Es positivo');
// }
// else if (num < 0 ) {
//       console.log('Es negativo');
// }
// else if (num === 0 ) {
//          console.log(false);
//       }};

//       esPositivo(-12);


// function agregarSimboloExclamacion(str){
//   var exclamacion = '!';
//   exclamacion.push(str);{
//     return (str + exclamacion);
//   }
// };

// agregarSimboloExclamacion('hola k tal');

// function esVocal(letra) {
// Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
// Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
// Si no es vocal, tambien debe retornar "Dato incorrecto".
// Tu código:
// if (letra.length !== 1) {
//   console.log('Dato incorrecto');
// }

// else if (letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U' || 
// letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
//   console.log('Es vocal'); }  

// else if (letra !== 'A' || letra !== 'E' || letra !== 'I' || letra !== 'O' || letra !== 'U' ||
//      letra !== 'a' || letra !== 'e' || letra !== 'i' || letra !== 'o' || letra !== 'u'); {
//       console.log('Dato incorrecto');
//      }
//   }


// esVocal('d');

//   function numeroMayor(x, y){
//     var elMayor = Math.max(x, y);
//     console.log(elMayor);
//   };

//  numeroMayor(8,7);


// function mayoriaDeEdad(edad){
//   if(edad >= 18) {
//     console.log('Allowed')
//   }
//   else {
//     console.log('Not Allowed');
//   }
// };

// mayoriaDeEdad(16);

// function conection(status) {
// El argumento "status" representa el estado de conexión de un usuario.
// Si el estado es igual a 1, el usuario está "Online".
// Si el estado es igual a 2, el usuario está "Away".
// De lo contrario, presumimos que el usuario está "Offline".
// Retornar el estado de conexión del usuario.
// Tu código:
//     if (status === 1){
//       console.log('Online')
//     }
//     else if(status === 2){
//       console.log('Away')
//     }
//     else {
//       console.log('Offline');
//     }
//  };

//  conection(3);


// function saludo(idioma) {
// Retornar un saludo en tres diferentes lenguajes:
// Si "idioma" es "aleman", devuelve "Guten Tag!".
// Si "idioma" es "mandarin", devuelve "Ni Hao!".
// Si "idioma" es "ingles", devuelve "Hello!".
// Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
// Tu código:
//   if (idioma === 'aleman') {
//     console.log('Guten Tag!')
//   }
//   else if(idioma === 'mandarin'){
//     console.log('Ni Hao!')
//   }
//   else if(idioma === 'ingles'){
//     console.log('Hello!')
//   }
//   else {
//     console.log('Hola!')
//   }
// };

// saludo('mandarin');


// function colors(color) {
//   // La función recibe un color. Retornar el string correspondiente:
//   // En caso que el color recibido sea "blue"   --> "This is blue".
//   // En caso que el color recibido sea "red"    --> "This is red".
//   // En caso que el color recibido sea "green"  --> "This is green".
//   // En caso que el color recibido sea "orange" --> "This is orange".
//   // Si no es ninguno de esos colores           --> "Color not found".
//   // IMPORTANTE: utilizar el statement SWITCH.
//   // Tu código:
//   switch (color){
//     case 'blue':
//       console.log('This is blue');
//       break;
//       case 'red':
//         console.log('This is red');
//         break;
//         case 'green':
//           console.log('This is green');
//           break;
//           case 'orange':
//             console.log('This is orange');
//             break;
//             default:
//               console.log('Color not found');
//               break;
//   }
// }

// colors('blue');

// function esDiezOCinco(num) {
//   // Retornar true si "num" es 10 o 5.
//   // De lo contrario, retornar false.
//   // Tu código:
//   if (num === 10 || num === 5) {
//     console.log(true);
//   }
//   else{
//     console.log(false);
//   }
// };

// esDiezOCinco(6);



// Math.floor para saber si es un numero entero

// function esEntero(numero){
//   if (numero - Math.floor(numero) == 0) {
//        console.log("Es un numero entero");
//   } else {
//       console.log("Es un numero decimal");
//   }
// };

// esEntero(2);

function operadoresLogicos4(num1, num2, num3) {
  // La función recibe tres números distintos.
  // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
  // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
  // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  // Si todos los argumentos son cero, retornar ---> "Error".
  // Si no se cumple ninguna de las condiciones anteriores, retornar false.
  // Tu código:
  if (num1 > num2, num3 && num1 >= 0) {
    return 'Numero 1 es mayor y positivo';
  }
  else if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
    return 'Hay negativos';
  }
  else if (num3 > num1 && num3 > num2) {
    return num3 + 1;
  }
};


// codigo copy

// function operadoresLogicos(num1, num2, num3) {
//   //La función recibe tres números distintos. 
//   //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
//   //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
//   //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
//   //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
//   //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
//   if (num1 === 0 || num2 === 0 || num3 === 0 ) {
//     return "Error"
//   } else if (num1 > num2 || num1 > num3 || num1 > 0) {
//     return "Numero 1 es mayor y positivo"
//   } else if (num1 < 0 || num2 < 0 || num < 0 ) {
//     return "Hay negativos"
//   } else if (num3 > num1 && num3 > num2) {
//     num3 += 1;
//     return num3
//   } else {
//     return false
//   }
// };


//   function esPrimo(num) {
//     // Retornar true si "num" es primo.
//     // De lo contrario retorna false.
//     // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
//     // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
//     // [Nota]: los números negativos, 0 y 1 NO son números primos.
//     // Tu código:
//     if(num <= 1){
//       return false;
//     }
//     for (var i = 2; i < num; i++){
//       if (num % 1 === 0){
//         return false;
//       }
//     }
//  };

// function esVerdadero(valor) {
//   // Si "valor" es verdadero retornar "Soy verdadero".
//   // Caso contrario, retornar "Soy falso".
//   // Tu código:
//  if(valor === true){
//   console.log('Soy verdadero')
//  }
//  else if(valor === false){
//   console.log('Soy falso')
//  }
// };

// esVerdadero(false);


//MAL INTENTO
// function tieneTresDigitos(num){
//   if(num.length === 3){
//     console.log(true)
//   }
//   else {
//     console.log(false);
//   }
// };

// tieneTresDigitos('alm');

function doWhile(num) {
  // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
  // Retornar el valor final.
  // Utilizar el bucle Do-While.
  // Tu código:
  var cont = 8;
  var result = 0;
  do {
    result += 5
    cont -= 1
  } while (cont !== 0)
  return num + result;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

}

function tienePropiedad(objeto, propiedad) {
  for (clave in objeto) {
    if (clave === propiedad) {
      return true
    } 
    return false
  }
}