/*---------------------- Funcion declarada --------------------- */

function saludar1 ( nombre ) {
  return "Hola" + nombre;
}

/* Funcion expresada */
const saludar2 = function ( nombre ) {
  return "Hola" + nombre;
};

/*----------------------- Funcion flecha ------------------------- */

const saludar3 = ( nombre ) => {
  return "Hola" + nombre;
};

/* -------------------Funcion flecha simplificada --------------- */

const saludar4 = ( nombre ) => "Hola" + nombre;

console.log( saludar1() );
console.log( saludar2() );
console.log( saludar3() );
console.log( saludar4() );

/* ------------------- retornando un objeto 1 ----------------- */

const getUser = () => {
  return {
    uid: "ABSDF",
    username: "Fernando21",
  };
};

/* ----------------------retornando un objeto 2------------------------- */

const getUser1 = () => ( {
  uid: "ABSDF",
  username: "Fernando21",
} );

console.log( getUser() );
console.log( getUser1() );
