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

function esEntero(numero){
  if (numero - Math.floor(numero) == 0) {
       console.log("Es un numero entero");
  } else {
      console.log("Es un numero decimal");
  }
};

esEntero(2);