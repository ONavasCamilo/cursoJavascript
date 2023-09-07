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

  function esVocal(letra) {
    // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
    // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
    // Si no es vocal, tambien debe retornar "Dato incorrecto".
    // Tu código:
    if (letra.length !== 1) {
      console.log('Dato incorrecto');
    }

    else if (letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U' || 
    letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
      console.log('Es vocal'); }  

    else if (letra !== 'A' || letra !== 'E' || letra !== 'I' || letra !== 'O' || letra !== 'U' ||
         letra !== 'a' || letra !== 'e' || letra !== 'i' || letra !== 'o' || letra !== 'u'); {
          console.log('Dato incorrecto');
         }
      }
    
    


    esVocal('d');