const personajes = [ "Goku", "Vegeta", "Trunks" ];

/* console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]); */

const [ , p2 ] = personajes;
console.log( p2 );

const retornaArreglo = () => {
  return [ "ABC", 123 ];
};

const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros );

//Smulacion del hook useState
const usarEstado = ( valor ) => {
  return [
    valor,
    () => {
      console.log( "Hola mundo" );
    },
  ];
};

const arr = usarEstado( "Goku" );
console.log( arr );

const [ nombre, setNombre ] = usarEstado( "Goku" );
console.log( nombre, setNombre );
