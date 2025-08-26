const miArreglo1 = new Array();

miArreglo1.push( 1 );
miArreglo1.push( 2 );
miArreglo1.push( 3 );

console.log( miArreglo1 );

/* -------------------------------------- */

const miArreglo2 = [ 1, 2, 3, 4 ];
//let miArreglo3 = miArreglo2;
//miArreglo3.push(5);
const miArreglo3 = [ ...miArreglo2, 5 ];

const miArreglo4 = miArreglo3.map( ( numero ) => {
  numero * 2;
} );

console.log( miArreglo2 );
console.log( miArreglo3 );
console.log( miArreglo4 );
