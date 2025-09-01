const activo = true;
/* let mensaje = "";

if ( !activo ) {
  mensaje = "Activo";
} else {
  mensaje = "Inactivo";
} */

//const mensje = (activo === true)  ? "Activo" : "Inactivo"
//const mensaje = ( activo ) ? "Activo" : "Inactivo";
//const mensaje = ( activo ) ? "Activo" : null;
const mensaje = activo && "Activo";

console.log( mensaje );
