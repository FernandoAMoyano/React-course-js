//import { heroes } from "./data/heroes";
//import heroes, {owners} from "./data/heroes";
import { heroes,  owners } from "./data/heroes";
console.log( heroes, owners );


const getHeroeById1 = ( id ) => {
  return heroes.find( ( heroe ) => {
    if ( heroe.id === id ) {
      return true;
    } else {
      return false;
    }
  } );
};


export const getHeroeById2 = ( id ) =>  heroes.find( ( heroe ) => heroe.id === id );


console.log( getHeroeById1( 2 ) );
console.log( getHeroeById2( 2 ) );


export const getHeroesByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner );
console.log( getHeroesByOwner( "Marvel" ) );

