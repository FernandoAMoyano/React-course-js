const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 3423423,
    lat: 2342342424,
    lang: 23.342343,
  },
};
//console.table(persona);
console.log(persona);

//Se copia la referencia al objeto
//const persona2 = persona;

//operador spread para hacer copia de las propiedades
const persona2 = { ...persona };

//modifica tambien el nombre en el objeto original
persona2.nombre = "Peter";
console.log(persona2);
