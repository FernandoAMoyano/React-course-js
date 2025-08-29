import { getHeroeById2 } from "./08-import";


/* const promise = new Promise( ( resolve, reject ) => {
  setTimeout( () => {
    const heroe = getHeroeById2( 2 );
    resolve( heroe );
    //reject( "No se pudo encontrar el heroe" );
  }, 2000 );
} );


promise.then( ( heroe ) => {
  console.log( heroe );

} ).catch( ( err ) => {
  console.warn( err );

} );
 */

const getHeroeByIdAsync = ( id ) => {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      const heroe = getHeroeById2( id );
      if ( heroe ) {
        resolve( heroe );
      } else {
        reject( "No se puedo encontrar el heroe" );
      }
    }, 2000 );
  } );
};


getHeroeByIdAsync( 4 )
  .then( () => heroe => console.log( heroe ) )
  .catch( ( err ) => console.warn( err ) );
